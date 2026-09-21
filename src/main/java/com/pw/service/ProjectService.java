package com.pw.service;

import java.util.List;

import com.pw.entity.Project;


public interface ProjectService {

    List<Project> getAllProjects();

    Project getProjectById(Long id);

    Project saveProject(Project project);

    void deleteProject(Long id);
}