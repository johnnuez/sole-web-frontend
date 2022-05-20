import axios from 'axios'

const getRequestParams = (email) => {
  const API_KEY = process.env.MAILCHIMP_API_KEY
  const LIST_ID = process.env.MAILCHIMP_LIST_ID

  const DATACENTER = process.env.MAILCHIMP_API_KEY.split('-')[1]
  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`

  const data = {
    email_address: email,
    status: 'subscribed',
  }

  const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString('base64')
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Basic ${base64ApiKey}`,
  }

  return {
    url,
    data,
    headers,
  }
}

export default async function handler(req, res) {
  const { email } = req.body

  if (!email || !email.length) {
    return res.status(400).json({
      error: 'Te faltó agregar tu email?',
    })
  }

  try {
    const { url, data, headers } = getRequestParams(email)
    const response = await axios.post(url, data, { headers })

    return res.status(201).json({ error: null })
  } catch (error) {
    const errorMessage =
      error.response.data.title === 'Member Exists'
        ? 'Ya estás suscrito/a!'
        : 'Ocurrió un error. Por favor enviame un mail a sole.tarotysimbolos@gmail.com para recibir el newsletter.'
    return res.status(400).json({
      error: errorMessage,
    })
  }
}
