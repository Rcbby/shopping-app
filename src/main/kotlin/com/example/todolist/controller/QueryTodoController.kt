package com.example.todolist.controller

import com.example.todolist.entity.TodoItem
import com.example.todolist.repository.TodoListRepository
import org.springframework.graphql.data.method.annotation.Argument
import org.springframework.graphql.data.method.annotation.MutationMapping
import org.springframework.graphql.data.method.annotation.QueryMapping
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.CrossOrigin

@CrossOrigin("http://localhost:3000")
@Controller
class QueryTodoController(
    private val todoListRepository: TodoListRepository
) {
    @QueryMapping
    fun getItem(): List<TodoItem> {
        return todoListRepository.getItem()
    }
    @MutationMapping
    fun createItem(@Argument item: String): TodoItem {
        return todoListRepository.createItem(TodoItem(item = item))
    }
    @MutationMapping
    fun deleteItem(@Argument uuid: String): TodoItem {
        return todoListRepository.deleteItem(uuid)
    }
    @MutationMapping
    fun putIsDone(
        @Argument uuid: String,@Argument isDone: Boolean): TodoItem {
        return todoListRepository.putIsDone(uuid, isDone)
    }
}