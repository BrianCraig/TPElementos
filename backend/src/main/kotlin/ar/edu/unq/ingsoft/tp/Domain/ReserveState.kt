package ar.edu.unq.ingsoft.tp


import java.time.LocalDateTime

enum class ReserveState{ AVAILABLE, RESERVED }

/*
* Data class para manejar una banda horaria (ej: 29/05/2019 10:00hs)
* */
data class ReserveStripe(val dayHour : LocalDateTime){

}