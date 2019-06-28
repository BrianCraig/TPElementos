export const isReserved= (reserve) => reserve.reserveState === "RESERVED"

export const isAvailable= (reserve) => reserve.reserveState === "AVAILABLE"

export const sameDay = (date1, date2) =>
  date1.getFullYear() === date2.getFullYear() &&
  date1.getMonth() === date2.getMonth() &&
  date1.getDate() === date2.getDate();

export const reserveDate = reserve => new Date(reserve.dayHour);