package com.pw.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.pw.repository.ContactMessageRepository;
import com.pw.repository.ProjectRepository;


@Controller
public class AdminController {

    private final ProjectRepository projectRepository;
    private final ContactMessageRepository contactMessageRepository;

    public AdminController(
            ProjectRepository projectRepository,
            ContactMessageRepository contactMessageRepository) {

        this.projectRepository = projectRepository;
        this.contactMessageRepository = contactMessageRepository;
    }

    @GetMapping("/admin/login")
    public String login() {
        return "admin/login";
    }

    @GetMapping("/admin/dashboard")
    public String dashboard(Model model) {

        long projectCount = projectRepository.count();
        long messageCount = contactMessageRepository.count();

        model.addAttribute("projectCount", projectCount);
        model.addAttribute("messageCount", messageCount);

        return "admin/dashboard";
    }
}