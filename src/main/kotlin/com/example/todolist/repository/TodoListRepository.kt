package com.example.todolist.repository

import com.example.todolist.entity.Item
import com.example.todolist.tables.Todolist.TODOLIST_
import org.jooq.DSLContext
import org.springframework.stereotype.Repository
import java.util.UUID

@Repository
class TodoListRepository(
    private val jooq: DSLContext
) {
    fun getItem(): List<Item> {
        return jooq
            .select(TODOLIST_.ITEM)
            .from(TODOLIST_)
            .fetchInto(Item::class.java)
    }

    fun createItem(item: Item) {
        item.uuid = UUID.randomUUID().toString()
        jooq
            .insertInto(TODOLIST_, TODOLIST_.UUID, TODOLIST_.ITEM)
            .values(item.uuid, item.item)
            .execute()
    }
}