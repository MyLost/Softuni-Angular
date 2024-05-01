package npd21.softuni.backend.entities;

import jakarta.persistence.Embeddable;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(schema = "softuni")
@AllArgsConstructor
@NoArgsConstructor
public class UserAbout extends Base {

    @NotEmpty(message = "title is required")
    private String title;
    @NotEmpty(message = "description is required")
    private String description;
    private String photoUrl;
    @Embedded
    @NotNull(message = "technology is required")
    private Technology technology;

    @OneToOne
    private User user;

    @Embeddable
    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Technology {
        @NotEmpty(message = "Backend technology is required!")
        private String backend;
        @NotEmpty(message = "Frontend technology is required!")
        private String frontend;
    }
}


