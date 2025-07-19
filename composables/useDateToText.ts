export const getDateDayMonth = (dateString?: string): string => {
  if (!dateString) return 'Unknown date';
  const date = new Date(dateString);
  const dayOfWeekString = date.toLocaleString('en-GB', { weekday: 'short' })
  const dayNum: number = date.getDate();
  const suffix: string = getOrdinalSuffix(dayNum);
  const month = date.toLocaleString('default', { month: 'long' });
  return `${dayOfWeekString} ${dayNum}${suffix} ${month}`;
}

function getOrdinalSuffix(day: number) {
  if (day >= 11 && day <= 13) return 'th'; 
  switch (day % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

export const getTime =(dateString?: string): string => {
  if (!dateString) return 'Unknown Time';
  const date = new Date(dateString);
  return date.toLocaleString('en-GB', { hour: 'numeric', minute: '2-digit' });
}
