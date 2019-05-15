package ar.edu.unq.ingsoft.tp

import org.springframework.data.repository.CrudRepository
import javax.persistence.*

import lombok.Data

@Entity
@Data
class ExampleResouce {

    @Id
    @GeneratedValue//
    private val id: Long? = null

    val name: String = ""
}

interface ExampleResouceRepository : CrudRepository<ExampleResouce, Long> {}