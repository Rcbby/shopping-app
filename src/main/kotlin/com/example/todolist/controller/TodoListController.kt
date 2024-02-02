package com.example.todolist.controller

import com.example.todolist.entity.TodoItem
import com.example.todolist.entity.UploadItem
import com.example.todolist.error.BadArgumentsException
import com.example.todolist.repository.TodoListRepository
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@CrossOrigin("http://localhost:3000")
@RestController
class TodoListController(
    private val todoListRepository: TodoListRepository,
) {

    @GetMapping(path = ["/todolist"])
    fun getTodoList(): List<TodoItem> {
        return todoListRepository.getItem()
    }

    @PostMapping(path = ["/todolist"])
    fun createItem(@RequestBody uploadItem: UploadItem): ResponseEntity<TodoItem> {
        if (uploadItem.isNotValid()) throw BadArgumentsException("Invalid TodoItem")
        return ResponseEntity.ok(todoListRepository.createItem(TodoItem(item = uploadItem.item)))
    }

    @DeleteMapping(path = ["/todolist/{uuid}"])
    fun deleteItem(@PathVariable uuid: String): ResponseEntity<TodoItem> {
        return ResponseEntity.ok(todoListRepository.deleteItem(uuid))
    }

    @PutMapping(path = ["/todolist/{isDone}/{uuid}"])
    fun putIsDone(
        @PathVariable uuid: String,
        @PathVariable isDone: Boolean
                ):ResponseEntity<TodoItem> {
        return ResponseEntity.ok(todoListRepository.putIsDone(uuid, isDone))
    }
}