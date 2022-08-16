package com.eduardo.applista.services;

import com.twilio.rest.api.v2010.account.Message;

import com.twilio.type.PhoneNumber;
import com.eduardo.applista.entities.Sale;
import com.eduardo.applista.repository.SaleRepository;
import com.twilio.Twilio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;

import org.springframework.stereotype.Service;

@Service
public class SmsService {

    @Autowired
    private SaleRepository repository;

	@Value("${twilio.sid}")
	private String twilioSid;

	@Value("${twilio.key}")
	private String twilioKey;

	@Value("${twilio.phone.from}")
	private String twilioPhoneFrom;

	@Value("${twilio.phone.to}")
	private String twilioPhoneTo;

	public void sendSms(Long idSale) {

        Sale sale  = repository.findById(idSale).get();

        String date = sale.getDate().getMonthValue() + "/" + sale.getDate().getYear();
        
        String msg = "O Vendedor " + sale.getSeller_name() + " realizou uma venda no valor R$: " 
                                   + String.format("%.2f", sale.getAmount()) + " na data: " + date;
        

		Twilio.init(twilioSid, twilioKey);

		PhoneNumber to = new PhoneNumber(twilioPhoneTo);
		PhoneNumber from = new PhoneNumber(twilioPhoneFrom);

		Message message = Message.creator(to, from, msg).create();

		System.out.println(message.getSid());
	}
}
