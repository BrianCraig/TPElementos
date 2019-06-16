package ar.edu.unq.ingsoft.tp

import ar.edu.unq.ingsoft.tp.Domain.*
import ar.edu.unq.ingsoft.tp.JPA.HostRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.ApplicationArguments
import org.springframework.boot.ApplicationRunner
import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.stereotype.Component
import java.time.DayOfWeek
import java.time.LocalDateTime
import java.time.LocalTime
import java.time.format.DateTimeFormatter

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
        //val reserveState = ReserveStripe()
        var calendar = HashMap<DayOfWeek, HourStripe?>()

        host.name = "cacho";
        host.field = field;

        field.name = "la canchita de cachito";

        DayOfWeek.values().forEach {
            val from = LocalTime.parse("09:00", DateTimeFormatter.ISO_LOCAL_TIME)
            val to = LocalTime.parse("22:00", DateTimeFormatter.ISO_LOCAL_TIME)
            calendar.put(it, HourStripe(from,to))
        }

        CalendarGenerator.generateStripes(calendar, field)


        repo.save(host)
    }
}