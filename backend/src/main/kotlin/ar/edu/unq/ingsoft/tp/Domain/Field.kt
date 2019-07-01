package ar.edu.unq.ingsoft.tp.Domain


import javax.persistence.*


@Entity
class Field {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        var id: Long? = null

        var name: String = ""

        var address : String? = null

        @OneToMany(mappedBy = "field", cascade = [CascadeType.ALL])
        var calendar: MutableList<ReserveStripe> = mutableListOf()
}