package com.example.todolist.error

import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.ResponseStatus
import java.time.LocalDateTime


@ControllerAdvice
class ErrorHandler {
    @ExceptionHandler(BadArgumentsException::class)
    @ResponseStatus(value = HttpStatus.BAD_REQUEST, code = HttpStatus.BAD_REQUEST)
    fun handle(exception: BadArgumentsException): ApiError {
        return ApiError(exception.message, LocalDateTime.now())
    }
}

data class ApiError(val message: String? = "An unknown error occurred", val timeStamp: LocalDateTime)