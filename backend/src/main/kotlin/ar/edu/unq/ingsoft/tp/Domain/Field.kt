package ar.edu.unq.ingsoft.tp


import jdk.nashorn.internal.objects.annotations.Getter
import lombok.EqualsAndHashCode
import javax.persistence.Entity
import javax.persistence.GenerationType
import javax.persistence.GeneratedValue
import javax.persistence.Id
import lombok.NoArgsConstructor
import lombok.AllArgsConstructor
import lombok.Data


@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
class Field {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private val id: Long? = null

    private val calendar: FieldCalendar? = null




}

