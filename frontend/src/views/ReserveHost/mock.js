const reserveGenerator = (reserved, dayHour) => ({
    reserved,
    dayHour
})

export const reserveDayMock = () => ([
    reserveGenerator(true, 10),
    reserveGenerator(true, 11),
    reserveGenerator(false, 12),
    reserveGenerator(true, 14),
    reserveGenerator(true, 15),
    reserveGenerator(false, 16),
    reserveGenerator(true, 17),
    reserveGenerator(true, 18),
])

export const hostMock = () => ({
    name: "mockberto",
    field: "mockfield",
    reserveList: reserveDayMock()
})