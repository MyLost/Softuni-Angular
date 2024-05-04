package npd21.softuni.backend.service;

import npd21.softuni.backend.dtos.user.UserAboutRequest;
import npd21.softuni.backend.dtos.user.UserAboutResponse;
import npd21.softuni.backend.dtos.user.UserLoginRequest;
import npd21.softuni.backend.dtos.user.UserLoginResponse;
import npd21.softuni.backend.dtos.user.UserRegisterRequest;
import npd21.softuni.backend.entities.User;

public interface UserService {
    User register(UserRegisterRequest request);

    UserLoginResponse login(UserLoginRequest request);

    UserAboutResponse userAbout(UserAboutRequest request);
}
