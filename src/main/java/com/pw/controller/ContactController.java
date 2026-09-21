package com.pw.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.pw.entity.ContactMessage;
import com.pw.repository.ContactMessageRepository;

@Controller
public class ContactController {

    private final ContactMessageRepository messageRepository;

    public ContactController(
            ContactMessageRepository messageRepository) {

        this.messageRepository = messageRepository;
    }


    @GetMapping("/contact")
    public String contact() {

        return "contact";
    }


    @PostMapping("/contact")
    public String submitContact(
            ContactMessage contactMessage,
            Model model) {

        messageRepository.save(contactMessage);

        model.addAttribute(
                "success",
                true
        );

        return "contact";
    }
}