package npd21.softuni.backend.service.impl;

import npd21.softuni.backend.dtos.ProjectRequest;
import npd21.softuni.backend.dtos.ProjectResponse;
import npd21.softuni.backend.entities.Project;
import npd21.softuni.backend.mapper.ProjectMapper;
import npd21.softuni.backend.repository.UserRepository;
import npd21.softuni.backend.service.ProjectService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ProjectServiceImpl implements ProjectService {

    private final ProjectMapper projectMapper;
    private final UserRepository userRepository;

    public ProjectServiceImpl(ProjectMapper projectMapper, UserRepository userRepository) {
        this.projectMapper = projectMapper;
        this.userRepository = userRepository;
    }

    @Override
    @Transactional
    public ProjectResponse createProject(ProjectRequest request) {

        var user = userRepository.findById(request.getUserId()).orElseThrow(() -> new RuntimeException("user not found!"));

        Project project;

        if(request.getId() == null) {
            project = new Project();
        } else {
            project = user.getProjects().stream().filter(p -> p.getId().equals(request.getId())).findFirst().orElseThrow(() -> new RuntimeException("Project not found!"));
        }

        var projectEntity = projectMapper.fromDto(project, request);
        projectEntity.setUser(user);
        user.getProjects().add(projectEntity);
        userRepository.save(user);

        return projectMapper.fromEntity(projectEntity);
    }
}
