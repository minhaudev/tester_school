package sourse.crud.controller;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import sourse.crud.dto.request.AuthenticationRequest;
import sourse.crud.service.AuthenticationService;

@Controller
@RequestMapping("/auth")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class AuthenticationController {
    AuthenticationService authenticationService;
    @PostMapping("/login")
    @ResponseBody
    public boolean authentication(@RequestBody AuthenticationRequest request) {

     boolean  result =  authenticationService.authenticate(request);
        if (result) {
            return true;
        } else {
            return false;
        }
    }

}
