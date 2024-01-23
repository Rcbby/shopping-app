package com.example.todolist.entity

data class Item(
    var uuid: String?,
    val item: String
) {

    fun isNotValid(): Boolean {
        return item.isBlank()
    }
}

