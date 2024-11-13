package sourse.crud.dto.request;


import lombok.Data;

@Data
public class CompanyCreationRequest {
    private String name;
    private String address;
    private String fieldOfActivity;
}
