package ar.edu.unq.ingsoft.tp.JPA

import ar.edu.unq.ingsoft.tp.Domain.Field
import ar.edu.unq.ingsoft.tp.Domain.Host
import org.springframework.data.repository.CrudRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource
import org.springframework.web.bind.annotation.CrossOrigin


//HATEOAS, se autogeneran los endpoints y los metodos crud

@CrossOrigin
@RepositoryRestResource//(collectionResourceRel = "hosts", path = "hosts")
interface HostRepository : CrudRepository<Host, Long>

//@Repository



