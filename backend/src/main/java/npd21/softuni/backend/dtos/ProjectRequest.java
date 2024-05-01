package npd21.softuni.backend.dtos;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProjectRequest {

    private Long id;
    @NotEmpty(message = "user id is required!")
    private String userId;
    @NotEmpty(message = "name is required!")
    private String name;
    @NotEmpty(message = "description is required!")
    private String description;
    @NotEmpty(message = "url is required!")
    @Pattern(
        regexp = "^(http:\\/\\/www\\.|https:\\/\\/www\\.|http:\\/\\/|https:\\/\\/)?[a-z0-9]+([\\-\\.]{1}[a-z0-9]+)*\\.[a-z]{2,5}(:[0-9]{1,5})?(\\/.*)?$",
        message = "url is not valid!")
    private String url;
    @NotEmpty(message = "picture url is required!")
    @Pattern(
        regexp = "^(http:\\/\\/www\\.|https:\\/\\/www\\.|http:\\/\\/|https:\\/\\/)?[a-z0-9]+([\\-\\.]{1}[a-z0-9]+)*\\.[a-z]{2,5}(:[0-9]{1,5})?(\\/.*)?$",
        message = "url is not valid!")
    private String pictureUrl;
}
