package ar.edu.unq.ingsoft.tp.Domain
import javax.persistence.*

@Entity
class Host {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long? = null

    var name : String? = null

    @OneToOne(cascade = [CascadeType.ALL])
    var field: Field? = null

}
