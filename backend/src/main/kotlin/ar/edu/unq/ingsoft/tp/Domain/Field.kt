package ar.edu.unq.ingsoft.tp.Domain


import javax.persistence.*


@Entity
class Field {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        var id: Long? = null

        var name: String = ""

        @OneToMany(mappedBy = "field")
        var calendar: List<ReserveStripe> = mutableListOf<ReserveStripe>()
        //val calendarState: List<ReserveStripe> = createCalendar()
}