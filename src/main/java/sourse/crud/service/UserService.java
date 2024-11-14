    package sourse.crud.service;
    import lombok.AccessLevel;
    import lombok.RequiredArgsConstructor;
    import lombok.experimental.FieldDefaults;
    import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
    import org.springframework.security.crypto.password.PasswordEncoder;
    import org.springframework.stereotype.Service;
    import sourse.crud.dto.request.UserCreationRequest;
    import sourse.crud.entity.User;
    import sourse.crud.exception.AppException;
    import sourse.crud.exception.ErrorCode;
    import sourse.crud.mapper.UserMapper;
    import sourse.crud.repository.UserRepository;

    import java.util.List;

    @Service
//    create a constructor
    @RequiredArgsConstructor
    @FieldDefaults (level = AccessLevel.PRIVATE, makeFinal = true)
    public class UserService {

     UserRepository userRepository;

     UserMapper userMapper;
         public User createUser(UserCreationRequest request) {
             if( userRepository.existsByUsername(request.getUsername())) {
                 throw  new AppException(ErrorCode.USER_EXITTED);
             }
             if (!request.isPasswordConfirmed()) {
                 throw new IllegalArgumentException("Password and Confirm Password not match.");
             }
             User user = userMapper.toUser(request);
             PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
             String hashedPassword = passwordEncoder.encode(request.getPassword());
             user.setPassword(hashedPassword);
             return userRepository.save(user);
         }
         public List<User> getAllUsers() {
             return userRepository.findAll();
         };
         public void deleteUser (String id) {
            userRepository.deleteById(id);
         };
         public User updateUser(String id, UserCreationRequest request) {
            User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
                userMapper.updateUser(user,request);
                return userRepository.save(user);
         }
        public User getUserById(String id) {
            return userRepository.findById(id)
                    .orElseThrow(() -> new RuntimeException( "User not found"));
        }

    }
