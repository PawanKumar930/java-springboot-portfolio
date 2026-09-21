package com.pw.controller;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import com.pw.entity.Project;
import com.pw.service.ProjectService;


@Controller
@RequestMapping("/admin/projects")
public class AdminProjectController {

    private final ProjectService projectService;

    public AdminProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @GetMapping
    public String projects(Model model) {

        model.addAttribute(
                "projects",
                projectService.getAllProjects()
        );

        return "admin/projects";
    }


    @GetMapping("/add")
    public String addProjectForm(Model model) {

        model.addAttribute("project", new Project());

        return "admin/project-form";
    }


    @PostMapping("/save")
    public String saveProject(
            @ModelAttribute Project project) {

        projectService.saveProject(project);

        return "redirect:/admin/projects";
    }


    @GetMapping("/edit/{id}")
    public String editProject(
            @PathVariable Long id,
            Model model) {

        Project project =
                projectService.getProjectById(id);

        model.addAttribute("project", project);

        return "admin/project-form";
    }


    @GetMapping("/delete/{id}")
    public String deleteProject(
            @PathVariable Long id) {

        projectService.deleteProject(id);

        return "redirect:/admin/projects";
    }
}