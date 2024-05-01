package npd21.softuni.backend.mapper;

import npd21.softuni.backend.dtos.ProjectRequest;
import npd21.softuni.backend.dtos.ProjectResponse;
import npd21.softuni.backend.entities.Project;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

@Mapper(config = ConfigurationMapper.class)
public abstract class ProjectMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "user", ignore = true)
    public abstract Project fromDto(@MappingTarget Project project, ProjectRequest request);

    public abstract ProjectResponse fromEntity(Project entity);
}
