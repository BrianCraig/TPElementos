package ar.edu.unq.ingsoft.tp.Domain


import javax.persistence.*


@Entity
data class Field (

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        val id: Long? = null,
        val name: String
) {
        @OneToOne
        lateinit var calendar : FieldCalendar

        constructor(name:String, calendar : FieldCalendar): this(name=name){
                this.calendar=calendar
        }
}