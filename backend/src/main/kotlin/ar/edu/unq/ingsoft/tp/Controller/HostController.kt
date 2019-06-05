package ar.edu.unq.ingsoft.tp

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