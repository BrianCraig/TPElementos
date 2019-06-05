package ar.edu.unq.ingsoft.tp.JPA

import ar.edu.unq.ingsoft.tp.Domain.Field
import ar.edu.unq.ingsoft.tp.Domain.Host
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository


@Repository
interface HostRepository : JpaRepository<Host, Long>

@Repository
interface FieldRepository : JpaRepository<Field, Long>

@Repository
interface ASDRepository : CrudRepository<Field, Long>