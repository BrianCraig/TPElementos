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
        val host1 = Host();
        val host2 = Host();
        val field1 = Field();
        val field2 = Field();
        //val reserveState = ReserveStripe()
        var calendar = HashMap<DayOfWeek, HourStripe?>()

        host1.name = "cacho";
        host1.field = field1;
        field1.name = "la canchita de cachito";
        field1.address = "Av Calchaqui 2352, Quilmes Oeste"

        host2.name = "Alfredo Casero";
        host2.field = field2;
        field2.name = "la Catedral";
        field2.address = "Bv. de los Italianos 376, Villa Dominico"

        DayOfWeek.values().forEach {
            val from = LocalTime.parse("09:00", DateTimeFormatter.ISO_LOCAL_TIME)
            val to = LocalTime.parse("22:00", DateTimeFormatter.ISO_LOCAL_TIME)
            calendar.put(it, HourStripe(from,to))
        }

        CalendarGenerator.generateStripes(calendar, field1)
        CalendarGenerator.generateStripes(calendar, field2)


        repo.save(host1)
        repo.save(host2)
    }
}