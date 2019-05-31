package ar.edu.unq.ingsoft.tp

import java.time.DayOfWeek
import java.time.LocalTime


data class HourStripe(val from: LocalTime, val to: LocalTime)

data class Schedule (val stripes :HashMap<DayOfWeek, HourStripe>)

