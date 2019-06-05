package ar.edu.unq.ingsoft.tp
import javax.persistence.*

@Entity
class Host(

        val name : String? = null,

        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        val id: Long? = null
) {
    @OneToOne(cascade = [CascadeType.ALL])
    @JoinColumn(name = "field_id", referencedColumnName = "id")
    lateinit var field: Field  //en prox sprints se convertiria en una lista

    constructor(name: String, field: Field): this(name=name){
        this.field=field
    }

}
