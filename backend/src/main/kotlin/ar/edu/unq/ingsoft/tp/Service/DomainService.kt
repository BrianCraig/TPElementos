package ar.edu.unq.ingsoft.tp

import org.springframework.stereotype.Service

@Service
class DomainService (val hostRepository : HostRepository, val fieldRepository: FieldRepository) {

    fun getHello(): String {
        return "hello service"
    }

}