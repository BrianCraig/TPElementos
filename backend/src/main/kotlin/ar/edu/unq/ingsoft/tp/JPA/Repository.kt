package ar.edu.unq.ingsoft.tp

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.repository.CrudRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource
import org.springframework.stereotype.Repository


//HATEOAS, se autogeneran los endpoints y los metodos crud

@RepositoryRestResource//(collectionResourceRel = "hosts", path = "hosts")
interface HostRepository : CrudRepository<Host, Long>

//@Repository

@RepositoryRestResource//(collectionResourceRel = "fields", path = "fields")
interface FieldRepository : CrudRepository<Field, Long>


