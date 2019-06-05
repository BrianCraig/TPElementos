package ar.edu.unq.ingsoft.tp.Domain


import java.time.LocalDateTime
import javax.persistence.*



enum class ReserveState{ AVAILABLE, RESERVED }


/*
* Data class para manejar una banda horaria (ej: 29/05/2019 10:00hs)
* */


@Entity
data class ReserveStripe(

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = null,

    val dayHour : LocalDateTime,

    val reserveState: ReserveState
) {

    @ManyToOne
    lateinit var fieldCalendar: FieldCalendar

    constructor(dayHour: LocalDateTime, reserveState: ReserveState, fieldCalendar: FieldCalendar)
        : this(dayHour = dayHour,reserveState = reserveState){
        this.fieldCalendar=fieldCalendar
    }
}





