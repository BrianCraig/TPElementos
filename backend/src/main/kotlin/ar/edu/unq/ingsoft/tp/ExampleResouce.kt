package ar.edu.unq.ingsoft.tp

import org.springframework.data.repository.CrudRepository
import javax.persistence.*

import lombok.Data
import org.springframework.web.bind.annotation.CrossOrigin

@Entity
@Data
class ExampleResouce {

    @Id
    @GeneratedValue//
    private val id: Long? = null

    val name: String = ""
}

@CrossOrigin
interface ExampleResouceRepository : CrudRepository<ExampleResouce, Long> {}