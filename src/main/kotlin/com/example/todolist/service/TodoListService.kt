package com.example.todolist.service

import com.example.todolist.entity.Item
import com.example.todolist.error.BadArgumentsException
import com.example.todolist.repository.TodoListRepository
import org.springframework.stereotype.Service

@Service
class TodoListService(
    private val todoListRepository: TodoListRepository
) {
    fun createItem(item: Item) {
        //checks if item is valid before creating new query in db
        if (item.isNotValid()) throw BadArgumentsException("Invalid TodoItem")
        todoListRepository.createItem(item)
    }

}