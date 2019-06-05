package ar.edu.unq.ingsoft.tp.Domain

import javax.persistence.*


@Entity
data class FieldCalendar (

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = null,

    @OneToOne(mappedBy = "calendar")
    val field : Field,

    @Transient
    val schedule : Schedule
) {

    @OneToMany(mappedBy = "fieldCalendar")
    val calendarState: List<ReserveStripe> = mutableListOf<ReserveStripe>()
    //val calendarState: List<ReserveStripe> = createCalendar()
}

    /**
     * Genera el map con el dia de reserva disponible y horario (para toda la semana)
     */

    /*
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
    */
