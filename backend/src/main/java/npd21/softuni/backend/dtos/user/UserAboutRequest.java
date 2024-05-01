package npd21.softuni.backend.dtos.user;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserAboutRequest {

    private Long id;

    @NotEmpty(message = "User id is required!")
    private String userId;
    @NotEmpty(message = "title is required!")
    private String title;
    @NotEmpty(message = "description is required!")
    private String description;

    private String photoUrl;

    @NotNull(message = "technology is required!")
    private TechnologyRequest technology;

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class TechnologyRequest {
        @NotEmpty(message = "Backend technology is required!")
        private String backend;
        @NotEmpty(message = "Frontend technology is required!")
        private String frontend;
    }
}
