package com.example.todolist.integration

import com.example.todolist.entity.TodoItem
import com.fasterxml.jackson.databind.ObjectMapper
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.http.MediaType
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.delete
import org.springframework.test.web.servlet.get
import org.springframework.test.web.servlet.post
import org.springframework.transaction.annotation.Transactional

@AutoConfigureMockMvc
@Transactional
@SpringBootTest
class TodoListControllerTest(
    @Autowired val mockMvc: MockMvc,
    @Autowired val mapper: ObjectMapper,
) {

    @BeforeEach
    fun setup() {

    }

    @Test
    fun `should returns every todoItem`() {
     mockMvc.get("/todolist")
         .andExpect {
             status { isOk() }
             content { contentType(MediaType.APPLICATION_JSON) }
         }
    }

    @Test
    fun `should create a new todoItem in the db`() {
        val item = TodoItem("", "take out the trash",false)
        mockMvc.post("/todolist") {
            content = mapper.writeValueAsString(item)
            contentType = MediaType.APPLICATION_JSON
        }.andExpect {
            status { isOk() }
            content { MediaType.APPLICATION_JSON }
        }
    }

    @Test
    fun `deletes a note`() {
        mockMvc.delete("/todolist/{uuid}", "c7556af4-b118-4cd1-892e-b66f0efc3ac0")
            .andExpect {
                status { isOk() }
                content { MediaType.APPLICATION_JSON }
            }
    }
}