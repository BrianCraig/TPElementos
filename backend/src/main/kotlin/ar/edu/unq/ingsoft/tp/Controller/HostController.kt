package ar.edu.unq.ingsoft.tp.Controller

import ar.edu.unq.ingsoft.tp.Service.DomainService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.ResponseBody
import org.springframework.web.bind.annotation.RestController


@RestController
@ResponseBody
@RequestMapping("/hosts")

class HostController (val service : DomainService){


    @GetMapping("hello-service")
    fun helloKotlinService(): String {
        return service.getHello()
    }

}