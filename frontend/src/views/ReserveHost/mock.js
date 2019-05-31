const reserveGenerator = (reserved, from, to) => ({
    reserved,
    from,
    to
})

export const reserveDayMock = () => ([
    reserveGenerator(true, 10, 11),
    reserveGenerator(true, 11, 12),
    reserveGenerator(false, 12, 13),
    reserveGenerator(true, 14, 15),
    reserveGenerator(true, 15, 16),
    reserveGenerator(true, 10, 11),
    reserveGenerator(true, 10, 11),
    reserveGenerator(true, 10, 11),
])