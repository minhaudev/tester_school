package sourse.crud.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class Exception {
    @ExceptionHandler(value = RuntimeException.class)
    ResponseEntity<String> handlingRuntimeException(RuntimeException exception){
        return ResponseEntity.badRequest().body(exception.getMessage());
    }
    @ExceptionHandler (value = MethodArgumentNotValidException.class)
    ResponseEntity<String> handleValidation(MethodArgumentNotValidException exception){
        return ResponseEntity.badRequest().body(exception.getFieldError().getDefaultMessage());
    }

}
