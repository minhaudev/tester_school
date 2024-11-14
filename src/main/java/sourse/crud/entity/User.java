package sourse.crud.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import java.time.LocalDate;
import java.util.UUID;
@Data
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    String id;

    private String username;
    private String password;
    private String firstName;
    private String lastName;
    private LocalDate birthday;
    private String companyId;
}
