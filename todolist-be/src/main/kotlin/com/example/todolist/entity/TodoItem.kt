package com.example.todolist.entity

import java.util.UUID

data class TodoItem(
    val uuid: String = UUID.randomUUID().toString(),
    val item: String,
    val isDone: Boolean= false
)
