package ar.edu.unq.ingsoft.tp

import org.springframework.boot.CommandLineRunner
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean

@SpringBootApplication
class SdmApplication{

    @Bean
    fun init(hostRepository: HostRepository) = CommandLineRunner {
        hostRepository.save(Host("Mexico 86"))
    }
}

fun main(args: Array<String>) {
	//SpringApplication.run(SdmApplication::class.java, *args)
    runApplication<SdmApplication>(*args)
}
