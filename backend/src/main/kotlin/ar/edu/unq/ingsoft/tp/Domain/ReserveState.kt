package ar.edu.unq.ingsoft.tp.Domain


import com.fasterxml.jackson.annotation.JsonBackReference
import java.time.DayOfWeek
import java.time.LocalDate
import java.time.LocalDateTime
import java.time.LocalTime
import java.time.temporal.TemporalAdjusters
import javax.persistence.*


enum class ReserveState{ AVAILABLE, RESERVED, UNAVAILABLE }


/*
* Data class para manejar una banda horaria (ej: 29/05/2019 10:00hs)
* */


@Entity
class ReserveStripe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = null

    val dayHour: LocalDateTime

    var reserveState: ReserveState? = ReserveState.AVAILABLE

    @JsonBackReference
    @ManyToOne
    val field: Field

    constructor(dayHour : LocalDateTime, field: Field){
        this.dayHour=dayHour
        this.field=field
        this.reserveState = if(Math.random() >= 0.4) {ReserveState.AVAILABLE} else {ReserveState.RESERVED}
    }

}

data class HourStripe(val from: LocalTime, val to: LocalTime)

object CalendarGenerator{

    /* Calendar
    * LUNES      09 - 20hs
    * MARTES     09 - 20hs
    * MIERCOLES  12 - 18hs
    * ...
    * */

        fun generateStripes(source :HashMap<DayOfWeek, HourStripe?>, field : Field) {

        var date = LocalDate.now()

        source.keys.forEach(){
            var fromHour = source.get(it)!!.from
            var toHour =  source.get(it)!!.to

            while (fromHour<=toHour){
                var formatedDate = LocalDateTime.of(getNextInCalendar(it),fromHour)
                field.calendar.add(ReserveStripe(formatedDate,field))
                fromHour = fromHour.plusHours(1);
            }
        }
    }

    private fun getNextInCalendar(day: DayOfWeek): LocalDate? = LocalDate.now().with(TemporalAdjusters.nextOrSame(day));


}




