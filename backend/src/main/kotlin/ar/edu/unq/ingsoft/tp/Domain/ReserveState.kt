package ar.edu.unq.ingsoft.tp.Domain


import java.time.LocalDateTime
import javax.persistence.*



enum class ReserveState{ AVAILABLE, RESERVED }


/*
* Data class para manejar una banda horaria (ej: 29/05/2019 10:00hs)
* */


@Entity
class ReserveStripe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long? = null

    var dayHour : LocalDateTime? = null

    var reserveState: ReserveState? = null

    var field: Field? = null
}





