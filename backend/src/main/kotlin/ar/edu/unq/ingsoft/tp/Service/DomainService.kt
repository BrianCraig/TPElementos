package ar.edu.unq.ingsoft.tp.Service

import ar.edu.unq.ingsoft.tp.JPA.HostRepository
import org.springframework.stereotype.Service

@Service
class DomainService (val hostRepository : HostRepository) {

    fun getHello(): String {
        return "hello service"
    }

}