package npd21.softuni.backend.dtos.user;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserLoginRequest {

    @Email
    @NotEmpty(message = "email is required!!!")
    private String email;

    @NotEmpty(message = "password is required!!!")
    private String password;
}
