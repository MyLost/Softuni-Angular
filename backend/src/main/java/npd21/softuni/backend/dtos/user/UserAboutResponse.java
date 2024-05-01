package npd21.softuni.backend.dtos.user;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserAboutResponse {

    private String title;
    private String description;

    private String photoUrl;

    private TechnologyRequest technology;

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class TechnologyRequest {
        private String backend;
        private String frontend;
    }
}
