package npd21.softuni.backend.dtos.user;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import npd21.softuni.backend.dtos.AddressRequest;
import npd21.softuni.backend.dtos.ProjectRequest;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserRegisterRequest {

    @NotEmpty(message = "First name is required!")
    private String firstName;

    @NotEmpty(message = "Last name is required!")
    private String lastName;

//    TODO: Future support
    private List<AddressRequest> address;

    @Pattern(
        regexp = "^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$",
        message = "Phone number is not valid (phone number must be in format +code<number>)(+3591212121212)!" )
    private String phoneNumber;

    @Past(message = "Date must be in past!")
    @NotNull(message = "Date is required!")
    private LocalDate dateOfBirth;

    @Email(message = "Email is not valid!")
    private String email;

    @Pattern(regexp = "^.*(?=.{8,})(?=..*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$", message = "Password is not valid (Password must contents one uppercase later, one lowercase later, one number, one special character and be minimum 8 symbols)!")
    @NotBlank(message = "Password is required!")
    private String password;

    @Pattern(regexp = "^.*(?=.{8,})(?=..*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$", message = "Password not match!")
    @NotBlank(message = "Confirm password is required!")
    private String confirmPassword;

    private UserAboutRequest userAbout;
    private List<ProjectRequest> projects;
}
