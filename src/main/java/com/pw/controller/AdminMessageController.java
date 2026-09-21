package com.pw.controller;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.pw.repository.ContactMessageRepository;


@Controller
public class AdminMessageController {

    private final ContactMessageRepository messageRepository;

    public AdminMessageController(
            ContactMessageRepository messageRepository) {

        this.messageRepository = messageRepository;
    }


    @GetMapping("/admin/messages")
    public String messages(Model model) {

        model.addAttribute(
                "messages",
                messageRepository.findAll()
        );

        return "admin/messages";
    }


    @GetMapping("/admin/messages/delete/{id}")
    public String deleteMessage(
            @PathVariable Long id) {

        messageRepository.deleteById(id);

        return "redirect:/admin/messages";
    }
}