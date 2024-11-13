package mapper;

import org.mapstruct.Mapper;
import sourse.crud.dto.request.UserCreationRequest;
import sourse.crud.entity.User;

@Mapper (componentModel = "spring")
public interface UserMapper {
    User toUser (UserCreationRequest request);
}
