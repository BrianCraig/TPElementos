package ar.edu.unq.ingsoft.tp.Controller

import ar.edu.unq.ingsoft.tp.Domain.Host
import ar.edu.unq.ingsoft.tp.Service.DomainService
import org.springframework.web.bind.annotation.*


@RestController
@ResponseBody
@RequestMapping("/hosts")
class HostController (val service : DomainService){

    @GetMapping
    fun getHost(): List<Host> {
        return service.getHost()
    }

    @GetMapping(path = ["/{id}"])
    fun getHostById(@PathVariable id: Long): Host {
        return service.getHostById(id)
    }


    @GetMapping("/hello-service")
    fun helloKotlinService(): String {
        return service.getHello()
    }

}