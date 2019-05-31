package ar.edu.unq.ingsoft.tp

import java.time.LocalDate
import java.time.LocalDateTime


class FieldCalendar (val schedule : Schedule) {

    var calendarState:  HashMap<ReserveStripe, ReserveState>

    init {
         calendarState = createCalendar(schedule)
    }
    /**
     * Genera el map con el dia de reserva disponible y horario (para toda la semana)
     */
    private fun createCalendar(schedule : Schedule): HashMap<ReserveStripe, ReserveState> {
        var calendar = HashMap<ReserveStripe,ReserveState>()
        var date = LocalDate.now()

        schedule.stripes.keys.forEach(){
            var fromHour = schedule.stripes.get(it)!!.from
            var toHour =  schedule.stripes.get(it)!!.to

            while (fromHour<=toHour){
                var formatedDate = LocalDateTime.of(date,fromHour)
                calendar.put(ReserveStripe(formatedDate), ReserveState.AVAILABLE)
                fromHour=fromHour.plusHours(1);
            }
            date=date.plusDays(1)
        }
        return calendar
    }

}
