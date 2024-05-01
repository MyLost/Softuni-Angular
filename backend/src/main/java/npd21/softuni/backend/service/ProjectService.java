package npd21.softuni.backend.service;

import npd21.softuni.backend.dtos.ProjectRequest;
import npd21.softuni.backend.dtos.ProjectResponse;

public interface ProjectService {

    ProjectResponse createProject(ProjectRequest request);
}
