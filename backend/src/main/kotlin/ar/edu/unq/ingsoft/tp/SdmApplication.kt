package ar.edu.unq.ingsoft.tp

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class SdmApplication

fun main(args: Array<String>) {
    SpringApplication.run(SdmApplication::class.java, *args)
}
