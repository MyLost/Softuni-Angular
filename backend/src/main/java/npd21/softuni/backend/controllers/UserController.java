package npd21.softuni.backend.controllers;

import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import npd21.softuni.backend.dtos.ProjectRequest;
import npd21.softuni.backend.dtos.ProjectResponse;
import npd21.softuni.backend.dtos.user.UserAboutRequest;
import npd21.softuni.backend.dtos.user.UserAboutResponse;
import npd21.softuni.backend.dtos.user.UserLoginRequest;
import npd21.softuni.backend.dtos.user.UserLoginResponse;
import npd21.softuni.backend.dtos.user.UserRegisterRequest;
import npd21.softuni.backend.service.ProjectService;
import npd21.softuni.backend.service.UserService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
@Slf4j
public class UserController {

    private final UserService userService;
    private final ProjectService projectService;

    public UserController(UserService userService, ProjectService projectService) {
        this.userService = userService;
        this.projectService = projectService;
    }
    @PostMapping(value = "/register", produces = "application/json")
    public Boolean registerUser(@RequestBody @Valid UserRegisterRequest request) {
        userService.register(request);
        return true;
    }

    @PostMapping(value = "/login", produces = "application/json")
    public UserLoginResponse registerUser(@RequestBody @Valid UserLoginRequest request) {
        userService.login(request);
        return new UserLoginResponse();
    }

    @PostMapping(value = "/user-about", produces = "application/json")
    public UserAboutResponse userAbout(@RequestBody @Valid UserAboutRequest request) {
        return userService.userAbout(request);
    }

    @PostMapping(value = "/project", produces = "application/json")
    public ProjectResponse userProject(@RequestBody @Valid ProjectRequest request) {
        return projectService.createProject(request);
    }
}
