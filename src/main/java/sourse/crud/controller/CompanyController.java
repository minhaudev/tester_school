package sourse.crud.controller;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import sourse.crud.dto.request.CompanyCreationRequest;
import sourse.crud.entity.Company;
import sourse.crud.repository.CompanyRepository;
import sourse.crud.service.CompanyService;

import java.util.List;

@RestController
@RequestMapping("/company")
public class CompanyController {
    @Autowired
    private CompanyService companyService;
    @PostMapping()
    public Company createUser(@RequestBody @Valid CompanyCreationRequest request) {
        return companyService.createCompany(request);
    }
    @GetMapping()
    public List<Company> getAllCompany() {
        return companyService.getAllCompany();
    }
    @PatchMapping("/{id}")
    public Company getCompanyById(@PathVariable String id, @RequestBody CompanyCreationRequest request) {
        return companyService.updateCompany(id, request);
    }
    @DeleteMapping("/{id}")
    public void deleteCompany (@PathVariable String id) {
        companyService.deleteCompanyID(id);
    }
}
