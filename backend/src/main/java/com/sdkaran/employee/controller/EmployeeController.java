package com.sdkaran.employee.controller;

import com.sdkaran.employee.entity.Employee;
import com.sdkaran.employee.service.EmployeeService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor

@CrossOrigin("*")

public class EmployeeController {

    private final EmployeeService employeeService;

    @GetMapping("/test")
    public String test(){
        return "Working";
    }

    @PostMapping("/employee")
    public Employee postEmployee(@RequestBody Employee emp){
        return employeeService.postEmployee(emp);
    }

    @GetMapping("/employees")
    public List<Employee> getAllEmployees(){
        return employeeService.getAllEmployees();
    }

    @DeleteMapping("/employee/{id}")
    public ResponseEntity<?> deleteEmployee(@PathVariable Long id){
        try{
            employeeService.deleteEmployee(id);
            return new ResponseEntity<>("Employee id "+id+" deleted successfully", HttpStatus.OK);
        }catch(EntityNotFoundException e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/employee/{id}")
    public ResponseEntity<?> getEmployeeById(@PathVariable Long id){
        Employee employee = employeeService.getEmployeeById(id);
        if(employee == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(employee);
    }


    @PatchMapping("/employee/{id}")
    public ResponseEntity<?> updateEmployee(@PathVariable Long id, @RequestBody Employee emp){
        Employee updatedEmployee =  employeeService.updateEmployee(id, emp);

        if(updatedEmployee == null) return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body("Employee with ID " + id + " not found.");;

        return ResponseEntity.ok(updatedEmployee);
    }


}
