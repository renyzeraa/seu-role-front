export function formatDate(dateString: string): string {
  const daysOfWeek = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB']
  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ]

  const date = new Date(dateString)

  const dayOfWeek = daysOfWeek[date.getUTCDay()]
  const day = date.getUTCDate().toString().padStart(2, '0')
  const month = months[date.getUTCMonth()]
  const hours = date.getUTCHours().toString().padStart(2, '0')
  const minutes = date.getUTCMinutes().toString().padStart(2, '0')

  return `${dayOfWeek}, ${day} ${month} - ${hours}:${minutes}`
}
