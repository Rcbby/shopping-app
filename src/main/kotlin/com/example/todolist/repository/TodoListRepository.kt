package com.example.todolist.repository

import com.example.todolist.entity.TodoItem
import com.example.todolist.error.BadArgumentsException
import com.example.todolist.tables.Todo.TODO
import org.jooq.DSLContext
import org.springframework.stereotype.Repository

@Repository
class TodoListRepository(
    private val jooq: DSLContext
) {
    fun getItem(): List<TodoItem> {
        //selects all item records in TodoList-db and fetch it into list
        return jooq
            .select(TODO)
            .from(TODO)
            .fetchInto(TodoItem::class.java)
    }

    fun createItem(item: TodoItem) {

        //creates a new record in the db
        jooq
            .insertInto(TODO)
            .set(TODO.UUID, item.uuid)
            .set(TODO.ITEM, item.item)
            .set(TODO.IS_DONE, item.isDone)
            .execute()
    }

    fun deleteItem(uuid: String): TodoItem {
        //deletes record where uuid eq uuid
        return jooq
            .delete(TODO)
            .where(TODO.UUID.eq(uuid))
            .returning()
            .fetchOneInto(TodoItem::class.java) ?: throw BadArgumentsException("Invalid uuid!")
    }

    fun putIsDone(uuid: String, isDone: Boolean): TodoItem {
        return jooq
            .update(TODO)
            .set(TODO.IS_DONE, isDone)
            .where(TODO.UUID.eq(uuid))
            .returning()
            .fetchOneInto(TodoItem::class.java) ?: throw BadArgumentsException("Invalid Todo!")
    }
}

data class InternalTodoItem(val uuid: String, val item: String, val isDone: Short)

fun TodoItem.convert(): InternalTodoItem = InternalTodoItem(this.uuid, this.item, if (this.isDone) 1 else 0)
