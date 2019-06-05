package ar.edu.unq.ingsoft.tp


import javax.persistence.*


@Entity
data class Field (

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        val id: Long? = null,
        val name: String
) {
        @OneToOne(cascade = [CascadeType.ALL])
        @JoinColumn(name = "fieldCalendar_id", referencedColumnName = "id")
        lateinit var calendar : FieldCalendar

        constructor(name:String, calendar : FieldCalendar): this(name=name){
                this.calendar=calendar
        }
}