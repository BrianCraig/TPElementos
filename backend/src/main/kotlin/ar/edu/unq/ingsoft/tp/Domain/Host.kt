package ar.edu.unq.ingsoft.tp
import javax.persistence.*

@Entity
data class Host(

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = null,
    val name : String? = null
) {
    @OneToOne(cascade = [CascadeType.ALL])
    @JoinColumn(name = "field_id", referencedColumnName = "id")
    lateinit var field: Field  //en prox sprints se convertiria en una lista

    constructor(name: String, field: Field): this(name=name){
        this.field=field
    }

}
