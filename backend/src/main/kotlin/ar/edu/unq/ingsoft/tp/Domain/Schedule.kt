package ar.edu.unq.ingsoft.tp

import java.time.DayOfWeek
import java.time.LocalTime
import javax.persistence.Entity
import javax.persistence.Id


/**
 * Contiene hora de inicio y hora de fin para una banda horaria
 */
data class HourStripe(val from: LocalTime, val to: LocalTime)


/**
 * Rccibe una mapa de dia de la semana con su correspondiente banda horaria
 */
@Entity
data class Schedule (val stripes :HashMap<DayOfWeek, HourStripe>){

    @Id
    @javax.persistence.GeneratedValue(strategy = javax.persistence.GenerationType.IDENTITY)
    private val id: Long? = null

}

