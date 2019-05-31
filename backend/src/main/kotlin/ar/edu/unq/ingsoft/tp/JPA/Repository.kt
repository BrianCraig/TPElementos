package ar.edu.unq.ingsoft.tp

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository


@Repository
interface HostRepository : JpaRepository<Host, Long>

@Repository
interface FieldRepository : JpaRepository<Field, Long>