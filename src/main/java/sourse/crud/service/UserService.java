    package sourse.crud.service;

    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.stereotype.Service;
    import sourse.crud.dto.request.UserCreationRequest;
    import sourse.crud.entity.User;
    import sourse.crud.repository.UserRepository;

    import java.util.List;

    @Service
    public class UserService {
        @Autowired

        private  UserRepository userRepository;

         public User createUser(UserCreationRequest request) {
             User user = new User();

             if( userRepository.existsByUsername(request.getUsername())) {
                 throw  new RuntimeException("user already exist");
             }

             user.setUsername(request.getUsername());
             user.setPassword(request.getPassword());
             user.setFirstName(request.getFirstName());
             user.setLastName(request.getLastName());
             user.setBirthday(request.getBirthday());
             user.setCompanyId(request.getCompanyId());
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
             user.setUsername(request.getUsername());
             user.setFirstName(request.getFirstName());
             user.setLastName(request.getLastName());
             user.setBirthday(request.getBirthday());

             return userRepository.save(user);
         }
        public User getUserById(String id) {
            return userRepository.findById(id)
                    .orElseThrow(() -> new RuntimeException( "User not found"));
        }

    }
