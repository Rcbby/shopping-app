package com.example.todolist.error


import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.ResponseStatus
import java.time.LocalDateTime

@ControllerAdvice //todo doesn't quite work
class ErrorHandler {
    @ExceptionHandler(BadArgumentsException::class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    fun handle(exception: BadArgumentsException): ApiError {
        return ApiError(exception.message, LocalDateTime.now())
    }
}

data class ApiError(val message: String? = "An unknown error occurred", val timeStamp: LocalDateTime)