package npd21.softuni.backend.service.impl;

import lombok.extern.slf4j.Slf4j;
import npd21.softuni.backend.dtos.user.UserAboutRequest;
import npd21.softuni.backend.dtos.user.UserAboutResponse;
import npd21.softuni.backend.dtos.user.UserLoginRequest;
import npd21.softuni.backend.dtos.user.UserLoginResponse;
import npd21.softuni.backend.dtos.user.UserRegisterRequest;
import npd21.softuni.backend.entities.User;
import npd21.softuni.backend.entities.UserAbout;
import npd21.softuni.backend.mapper.UserAboutMapper;
import npd21.softuni.backend.mapper.UserMapper;
import npd21.softuni.backend.repository.UserRepository;
import npd21.softuni.backend.service.UserService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

@Service
@Slf4j
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final UserAboutMapper userAboutMapper;
    private final PasswordEncoder passwordEncoder;

    public UserServiceImpl(UserRepository userRepository, UserMapper userMapper, UserAboutMapper userAboutMapper, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
        this.userAboutMapper = userAboutMapper;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    @Transactional
    public User register(UserRegisterRequest request) {
        String hashedPassword = null;

        if(request.getPassword().equals(request.getConfirmPassword())){
            hashedPassword = passwordEncoder.encode(request.getPassword());
        } else {
            throw new RuntimeException("Password not match!");
        }

        User user = userMapper.toRegisterUser(request);
        user.setPassword(hashedPassword);

        if(user.getId() == null) {
            user.setId(UUID.randomUUID().toString());
        }

        log.debug("User save request {}", request);
        return userRepository.save(user);
    }

    @Override
    public UserLoginResponse login(UserLoginRequest request) {

        var user = userRepository.findByEmail(request.getEmail());

        if (user.isEmpty()) {
            return null;
        }

        var hashedPassword = passwordEncoder.encode(request.getPassword());

        if(!hashedPassword.equals(user.get().getPassword())) {
            throw new RuntimeException("password mismatch!");
        }

        return new UserLoginResponse();
    }

    @Override
    public UserAboutResponse userAbout(UserAboutRequest request) {

        var user = userRepository.findById(request.getUserId()).orElseThrow(() -> new RuntimeException("User not found!"));

        UserAbout userAbout;
        if(request.getId() == null) {
            userAbout = new UserAbout();
            userAbout.setUser(userRepository.getReferenceById(request.getUserId()));
        } else {
            userAbout = user.getUserAbout();
        }
        userAbout = userAboutMapper.fromDto(userAbout, request);
        user.setUserAbout(userAbout);
        userRepository.save(user);

        return userAboutMapper.fromEntity(userAbout);
    }

}
