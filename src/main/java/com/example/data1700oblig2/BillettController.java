package com.example.data1700oblig2;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class BillettController {
    public final List<Billett> billettListe = new ArrayList<>();;

    @PostMapping("/slett")
    public void slettArray(){
        billettListe.clear();
    }

    @PostMapping("/lagre")
    public void save(Billett innbillett) {
        billettListe.add(innbillett);
    }
    @GetMapping("/hentBilletter")
    public List<Billett> getBillettListe() {
        return billettListe;
    }


}