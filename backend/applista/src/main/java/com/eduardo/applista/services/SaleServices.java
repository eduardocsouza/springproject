package com.eduardo.applista.services;


import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.eduardo.applista.entities.Sale;
import com.eduardo.applista.repository.SaleRepository;

@Service
public class SaleServices {

    @Autowired
    private SaleRepository repository;

    
    //Pageable é um tipo que nos permite trazer resultados do bancos de dados com o máximo de 20 itens.
    //E ele retorna um tipo Page. 
    public Page<Sale> findSales(String minDate, String maxDate, Pageable pageable){

        //criar data do dia. ZoneId está pegando o fuso horário da máquina. Instant pegando a data do dia.
        LocalDate today = LocalDate.ofInstant(Instant.now(), ZoneId.systemDefault());

        //minusDays: está subitraindo o valor máxmo para o mínimo. 
        LocalDate min = minDate.equals("") ? today.minusDays(365) : LocalDate.parse(minDate);
        LocalDate max = maxDate.equals("") ? today : LocalDate.parse(maxDate);

        return repository.findSales(min, max, pageable);
    }

    public String findById(Long id){
        Optional<Sale> opSale =  repository.findById(id);

        if(opSale.isEmpty()){
            
            return "Nenhum registro encontrado.";
        }
        return opSale.get().toString();
    }
}
