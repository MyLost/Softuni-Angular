package npd21.softuni.backend.configuration;

import npd21.softuni.backend.dtos.ValidationResponse;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.List;

@RestControllerAdvice
public class ValidationHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<List<ValidationResponse>> handleValidationErrors(MethodArgumentNotValidException ex) {

        //TODO: Here may be considered to make translation to another language. But this is not required in this moment!

        List<ValidationResponse> errors = ex.getBindingResult().getFieldErrors()
                .stream().map(error -> new ValidationResponse(error.getDefaultMessage())).toList();

        return new ResponseEntity<>(errors, new HttpHeaders(), HttpStatus.BAD_REQUEST);
    }
}
