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

        calendar.put(DayOfWeek.MONDAY,
                HourStripe(LocalTime.parse("09:00", DateTimeFormatter.ISO_LOCAL_TIME),
                        LocalTime.parse("22:00", DateTimeFormatter.ISO_LOCAL_TIME)))
        calendar.put(DayOfWeek.TUESDAY,
                HourStripe(LocalTime.parse("09:00", DateTimeFormatter.ISO_LOCAL_TIME),
                        LocalTime.parse("20:00", DateTimeFormatter.ISO_LOCAL_TIME)))
        calendar.put(DayOfWeek.SATURDAY,
                HourStripe(LocalTime.parse("09:00", DateTimeFormatter.ISO_LOCAL_TIME),
                        LocalTime.parse("18:00", DateTimeFormatter.ISO_LOCAL_TIME)))


        CalendarGenerator.generateStripes(calendar,field)



        /*
        field.calendar.add(reserveState)

        reserveState.field = field
        reserveState.dayHour = LocalDateTime.now()
        reserveState.reserveState = ReserveState.AVAILABLE
        */


        repo.save(host)
    }
}