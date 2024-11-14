package sourse.crud.controller;

import jakarta.validation.Valid;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import sourse.crud.dto.request.ApiResponse;
import sourse.crud.dto.request.UserCreationRequest;
import sourse.crud.entity.Company;
import sourse.crud.entity.User;
import sourse.crud.service.CompanyService;
import sourse.crud.service.UserService;

import java.util.List;

@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@Controller
@RequestMapping("/users")
public class UserController {
    UserService userService;
    CompanyService companyService;

    // Thymeleaf view endpoints
    @GetMapping
    public String getAllUsers(Model model) {
        List<User> users = userService.getAllUsers();
        model.addAttribute("users", users);
        return "users"; // Trả về trang users.html
    }

    @GetMapping("/add")
    public String showAddUserForm(Model model) {
        model.addAttribute("user", new UserCreationRequest());
        List<Company> companies = companyService.getAllCompany();
        model.addAttribute("companies", companies);
        return "add-user"; // Trả về trang add-user.html
    }

    @PostMapping("/add")
    public String createUser(@ModelAttribute @Valid UserCreationRequest request) {
        userService.createUser(request);
        return "redirect:/users";
    }

    @GetMapping("/update/{id}")
    public String showUpdateUserForm(@PathVariable String id, Model model) {
        User user = userService.getUserById(id);
        model.addAttribute("user", user);
        return "edit-user"; // Trả về trang edit-user.html
    }

    @PostMapping("/update/{id}")
    public String editUser(@PathVariable String id, @ModelAttribute @Valid UserCreationRequest request) {
        userService.updateUser(id, request);
        return "redirect:/users";
    }

    @GetMapping("/delete/{id}")
    public String deleteUser(@PathVariable String id) {
        userService.deleteUser(id);
        return "redirect:/users";
    }

    // RESTful API endpoints (JSON responses)
    @GetMapping("/api")
    @ResponseBody
    public List<User> getAllUsersAPI() {
        return userService.getAllUsers();
    }

    @PostMapping("/api")
    @ResponseBody
    ApiResponse <User> createUserAPI(@RequestBody @Valid UserCreationRequest request) {
         ApiResponse<User> apiResponse = new ApiResponse<>();
         apiResponse.setResult(userService.createUser(request));
         apiResponse.setMessage("create user success");
         return apiResponse;
    }

    @GetMapping("/api/{id}")
    @ResponseBody
    public User findUserByIdAPI(@PathVariable String id) {
        return userService.getUserById(id);
    }

    @DeleteMapping("/api/{id}")
    @ResponseBody
    public void deleteUserAPI(@PathVariable String id) {
        userService.deleteUser(id);
    }

    @PatchMapping("/api/{id}")
    @ResponseBody
    public User updateUserAPI(@PathVariable String id, @RequestBody @Valid UserCreationRequest request) {
        return userService.updateUser(id, request);
    }
}
