package ar.edu.unq.ingsoft.tp.Service

import ar.edu.unq.ingsoft.tp.Domain.Host
import ar.edu.unq.ingsoft.tp.JPA.*
import org.springframework.stereotype.Service

@Service
class DomainService (val hostRepository : HostRepository, val fieldRepository: FieldRepository) {

    fun getHello(): String {
        return "hello service"
    }

}