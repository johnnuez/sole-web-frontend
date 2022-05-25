export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(400).json({ error: 'Invalid HTTP method' })
  }

  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.REVALIDATE_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  try {
    const body = req.body
    if (!body) {
      res.status(400).send('Bad request. No body.')
      return
    }
    const slugToRevalidate = body.entry.slug
    if (body.model === 'course') {
      if (body.event !== 'entry.delete') {
        await res.unstable_revalidate(`/courses/${slugToRevalidate}`)
      }
      await res.unstable_revalidate(`/courses`)
      await res.unstable_revalidate(`/`)
      return res.json({ revalidated: true })
    }

    if (body.model === 'post') {
      if (body.event !== 'entry.delete') {
        await res.unstable_revalidate(`/blog/${slugToRevalidate}`)
      }
      await res.unstable_revalidate(`/blog`)
      await res.unstable_revalidate(`/`)
      return res.json({ revalidated: true })
    }
    return res.status(500).send('An error occurred.')
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send('An error occurred.')
  }
}
