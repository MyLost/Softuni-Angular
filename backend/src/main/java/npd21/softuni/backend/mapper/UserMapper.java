package npd21.softuni.backend.mapper;

import npd21.softuni.backend.dtos.user.UserRegisterRequest;
import npd21.softuni.backend.entities.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(config = ConfigurationMapper.class)
public abstract class UserMapper {

    @Mapping(target = "userAbout", ignore = true)
    @Mapping(target = "projects", ignore = true)
    @Mapping(target = "address", ignore = true)
    @Mapping(target = "authorities", ignore = true)
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "password", ignore = true)
    public abstract User toRegisterUser(UserRegisterRequest userRequest);
}
