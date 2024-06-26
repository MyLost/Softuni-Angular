package npd21.softuni.backend.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProjectResponse {

    private String name;
    private String description;
    private String url;
    private String pictureUrl;
}
