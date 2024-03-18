package com.example.data1700oblig2;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class BillettController {
    //oppretter en arraylist for billettene
    public final List<Billett> billettListe = new ArrayList<>();;

    //Tømmer arraylisten
    @PostMapping("/slett")
    public void slettArray(){
        billettListe.clear();
    }

    // Henter inn billetten og legger den til i arraylisten
    @PostMapping("/lagre")
    public void save(Billett innbillett) {
        billettListe.add(innbillett);
    }

    //Returnerer arraylisten til frontend
    @GetMapping("/hentBilletter")
    public List<Billett> getBillettListe() {
        return billettListe;
    }


}