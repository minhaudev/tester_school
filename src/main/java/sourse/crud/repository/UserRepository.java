package sourse.crud.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sourse.crud.entity.User;

// giúp ta có thể sử dụng các phương thức sẳn có như (CRUD)....
@Repository
public interface UserRepository extends JpaRepository<User,String> {
    boolean existsByUsername(String username);
}

