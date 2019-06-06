package ar.edu.unq.ingsoft.tp

import ar.edu.unq.ingsoft.tp.Domain.Field
import ar.edu.unq.ingsoft.tp.Domain.Host
import ar.edu.unq.ingsoft.tp.Domain.ReserveState
import ar.edu.unq.ingsoft.tp.Domain.ReserveStripe
import ar.edu.unq.ingsoft.tp.JPA.HostRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.ApplicationArguments
import org.springframework.boot.ApplicationRunner
import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.stereotype.Component
import java.time.LocalDateTime

@SpringBootApplication
class SdmApplication

fun main(args: Array<String>) {
    SpringApplication.run(SdmApplication::class.java, *args)
}


@Component
class DataLoader @Autowired
constructor(private val repo: HostRepository) : ApplicationRunner {

    override fun run(args: ApplicationArguments) {
        val host = Host();
        val field = Field();
        val reserveState = ReserveStripe()

        host.name = "cacho";
        host.field = field;

        field.name = "la canchita de cachito";
        field.calendar.add(reserveState)

        reserveState.field = field
        reserveState.dayHour = LocalDateTime.now()
        reserveState.reserveState = ReserveState.AVAILABLE

        repo.save(host)
    }
}