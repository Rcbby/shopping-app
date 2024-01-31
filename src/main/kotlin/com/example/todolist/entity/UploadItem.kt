package com.example.todolist.entity

data class UploadItem(
    val item: String
) {
    fun isNotValid(): Boolean = item.isBlank()


}