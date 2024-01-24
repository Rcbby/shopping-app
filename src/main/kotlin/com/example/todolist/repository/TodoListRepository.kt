package com.example.todolist.repository

import com.example.todolist.entity.Item
import com.example.todolist.tables.Todolist.TODOLIST_
import org.jooq.DSLContext
import org.springframework.stereotype.Repository
import java.util.*

@Repository
class TodoListRepository(
    private val jooq: DSLContext
) {
    fun getItem(): List<Item> {
        //selects all item records in TodoList-db and fetch it into list
        return jooq
            .select(TODOLIST_.ITEM)
            .from(TODOLIST_)
            .fetchInto(Item::class.java)
    }

    fun createItem(item: Item) {
        //creates a random UUID
        item.uuid = UUID.randomUUID().toString()
        jooq
            .insertInto(TODOLIST_, TODOLIST_.UUID, TODOLIST_.ITEM)
            .values(item.uuid, item.item)
            .execute()
    }

    fun deleteItem(uuid: String) {
        //deletes record where uuid eq uuid
        jooq
            .delete(TODOLIST_)
            .where(TODOLIST_.UUID.eq(uuid))
            .execute()
    }
}