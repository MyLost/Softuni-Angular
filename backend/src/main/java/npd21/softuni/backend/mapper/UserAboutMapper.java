package npd21.softuni.backend.mapper;

import npd21.softuni.backend.dtos.user.UserAboutRequest;
import npd21.softuni.backend.dtos.user.UserAboutResponse;
import npd21.softuni.backend.entities.UserAbout;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

@Mapper(config = ConfigurationMapper.class)
public abstract class UserAboutMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "user", ignore = true)
    public abstract UserAbout fromDto(@MappingTarget UserAbout userAbout, UserAboutRequest request);

    public abstract UserAboutResponse fromEntity(UserAbout userAbout);

}
