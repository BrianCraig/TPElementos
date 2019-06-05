package ar.edu.unq.ingsoft.tp.Controller

import ar.edu.unq.ingsoft.tp.Domain.Host
import ar.edu.unq.ingsoft.tp.Service.DomainService
import org.springframework.web.bind.annotation.*


@RestController
@ResponseBody
@RequestMapping("/hosts")

class HostController (val service : DomainService){


    @GetMapping("hello-service")
    fun helloKotlinService(): String {
        return service.getHello()
    }

}