package ar.edu.unq.ingsoft.tp

import ar.edu.unq.ingsoft.tp.JPA.HostRepository
import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.boot.ApplicationArguments
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.ApplicationRunner
import org.springframework.stereotype.Component


@SpringBootApplication
class SdmApplication

fun main(args: Array<String>) {
    SpringApplication.run(SdmApplication::class.java, *args)
}


@Component
class DataLoader @Autowired
constructor(private val userRepository: HostRepository) : ApplicationRunner {

    override fun run(args: ApplicationArguments) {

    }
}