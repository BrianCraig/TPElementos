package ar.edu.unq.ingsoft.tp

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