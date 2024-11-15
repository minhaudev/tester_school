package sourse.crud.controller;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import sourse.crud.dto.request.ApiResponse;
import sourse.crud.dto.request.AuthenticationRequest;
import sourse.crud.dto.response.AuthenticationResponse;
import sourse.crud.service.AuthenticationService;

@Controller
@RequestMapping("/auth")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class AuthenticationController {
    AuthenticationService authenticationService;
    @PostMapping("/login")
    @ResponseBody
    ApiResponse<AuthenticationResponse>authentication(@RequestBody AuthenticationRequest request) {
     var  result =  authenticationService.authenticate(request);
        return ApiResponse.<AuthenticationResponse>builder().result(result).build();
    }
}
