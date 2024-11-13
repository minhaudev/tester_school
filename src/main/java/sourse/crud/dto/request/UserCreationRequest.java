package sourse.crud.dto.request;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults (level = AccessLevel.PRIVATE)

public class UserCreationRequest {
    @Size(min = 2, max = 20, message = "username must be at leat 3 characters.")
     String username;

    @Size(min = 8, max = 20, message = "Password must be between 8 and 20 characters.")
//    @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,20}$",
//            message = "Password must contain at least one letter, one number, and one special character.")
    String password;
    String confirmPassword;
    String firstName;
    String lastName;
    LocalDate birthday;
    String companyId;
}
