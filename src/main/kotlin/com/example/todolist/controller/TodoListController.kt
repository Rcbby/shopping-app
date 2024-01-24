package com.example.todolist.controller

import com.example.todolist.entity.Item
import com.example.todolist.repository.TodoListRepository
import com.example.todolist.service.TodoListService
import org.springframework.web.bind.annotation.*

@RestController
class TodoListController(
    private val todoListRepository: TodoListRepository,
    private val todoListService: TodoListService
) {

    @GetMapping(path = ["/todolist"])
    fun getTodoList(): List<Item> {
        return todoListRepository.getItem()
    }

    @PostMapping(path = ["/todolist"])
    fun createItem(@RequestBody item: Item) {
        todoListService.createItem(item)
    }

    @DeleteMapping(path = ["/todolist/{uuid}"])
    fun deleteItem(@PathVariable uuid: String) {
        todoListRepository.deleteItem(uuid)
    }
}