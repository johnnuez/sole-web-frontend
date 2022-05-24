const months = {
  1: 'Enero',
  2: 'Febrero',
  3: 'Marzo',
  4: 'Abril',
  5: 'Mayo',
  6: 'Junio',
  7: 'Julio',
  8: 'Agosto',
  9: 'Septiembre',
  10: 'Octubre',
  11: 'Noviembre',
  12: 'Diciembre',
}

const dateParser = (dateString) => {
  const day = Number(dateString.substring(8))
  const month = Number(dateString.substring(5, 7))
  const year = Number(dateString.substring(0, 4))

  return {
    day: day,
    month: month,
    year: year,
  }
}

export function shortDate(dateString) {
  const date = dateParser(dateString)

  return date.day + '/' + date.month + '/' + date.year
}

export function longDate(dateString) {
  const date = dateParser(dateString)

  return date.day + ' de ' + months[date.month] + ' de ' + date.year
}
