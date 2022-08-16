package com.eduardo.applista.controllers;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.eduardo.applista.entities.Sale;
import com.eduardo.applista.services.SaleServices;
import com.eduardo.applista.services.SmsService;

@RestController
@RequestMapping(value = "/sale")
public class SaleController {
    

    @Autowired
    private SaleServices services;

    @Autowired
    private SmsService smsService;

    @GetMapping
    public Page<Sale> findSales(
        @RequestParam(value = "minDate", defaultValue = "") String minDate, 
        @RequestParam(value = "maxDate", defaultValue = "") String maxDate, 
        Pageable pageable){
        return services.findSales(minDate, maxDate, pageable);
    }

    @GetMapping("/{id}")
    public String findById(@PathVariable Long id){
        return services.findById(id);
    }

    @GetMapping("/{id}/notification")
    public void sendFySms(@PathVariable Long id){
        smsService.sendSms(id);
    }
}
