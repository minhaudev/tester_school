package sourse.crud.controller;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import sourse.crud.dto.request.UserCreationRequest;
import sourse.crud.entity.Company;
import sourse.crud.entity.User;
import sourse.crud.service.CompanyService;
import sourse.crud.service.UserService;

import java.util.List;

@Controller
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private CompanyService companyService;

    // Trả về danh sách user dưới dạng HTML
    @GetMapping
    public String getAllUsers(Model model) {
        List<User> users = userService.getAllUsers();
        model.addAttribute("users", users);
        return "users"; // trả về file users.html
    }

    // Trả về form để thêm user
    @GetMapping("/add")
    public String showAddUserForm(Model model) {
        model.addAttribute("user", new UserCreationRequest());
        List<Company> companies = companyService.getAllCompany();
        model.addAttribute("companies", companies);
        return "add-user"; // trả về file add-user.html
    }

    @PostMapping("/add")
    public String createUser(@ModelAttribute @Valid UserCreationRequest request) {
        System.out.println("request: " + request);
        userService.createUser(request);
        return "redirect:/users";
    }

    @GetMapping("/update/{id}")
    public  String showUpdateUserForm(@PathVariable String id, Model mode) {
      User user = userService.getUserById(id);
      mode.addAttribute("user", user);
      return "edit-user";
    }
    @PostMapping("/update/{id}")
    public String editUser(@PathVariable String id, @ModelAttribute @Valid UserCreationRequest request) {
        System.out.println("request: " + id +  request.getUsername());
        userService.updateUser(id, request);
        return "redirect:/users";
    }

    @GetMapping("/delete/{id}")
    public String deleteUser(@PathVariable String id) {
        userService.deleteUser(id);
        return "redirect:/users";
    }
}
