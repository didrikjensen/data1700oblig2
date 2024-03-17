let filmInput;
let antallInput;
let fornavnInput;
let etternavnInput;
let telefonInput;
let emailInput;

let filmInputValidert;
let antallInputValidert;
let fornavnInputValidert;
let etternavnInputValidert;
let telefonInputValidert;
let emailInputValidert;

const antallRegEx = /^[1-9][0-9]?$|^100$/;
const navnRegEx = /^([a-zA-Z-]{1,20})/;
const telefonRegEx = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/;
const emailRegEx = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})([a-z]{2,8})?$/;

let output;

const filmFeilmelding = $("#film-feilmelding");
const antallFeilmelding = $("#antall-feilmelding");
const fornavnFeilmelding = $("#fornavn-feilmelding");
const etternavnFeilmelding = $("#etternavn-feilmelding");
const telefonFeilmelding = $("#telefon-feilmelding");
const emailFeilmelding = $("#email-feilmelding");
const outputDiv = $("#output");

let filmInputGyldig = false;
let antallInputGyldig = false;
let fornavnInputGyldig = false;
let etternavnInputGyldig = false;
let telefonInputGyldig = false;
let emailInputGyldig = false;

function feilmelding() {
    filmFeilmeldingSjekk();
    antallFeilmeldingSjekk();
    fornavnFeilmeldingSjekk();
    etternavnFeilmeldingSjekk();
    telefonFeilmeldingSjekk();
    emailFeilmeldingSjekk();
}

function filmFeilmeldingSjekk() {
    (filmInputGyldig) ? $(filmFeilmelding).show() : $(filmFeilmelding).hide();
}

function antallFeilmeldingSjekk() {
    (antallInputGyldig) ? $(antallFeilmelding).show() : $(antallFeilmelding).hide();
}

function fornavnFeilmeldingSjekk() {
    (fornavnInputGyldig) ? $(fornavnFeilmelding).show() : $(fornavnFeilmelding).hide();
}

function etternavnFeilmeldingSjekk() {
    (etternavnInputGyldig) ? $(etternavnFeilmelding).show() : $(etternavnFeilmelding).hide();
}

function telefonFeilmeldingSjekk() {
    (telefonInputGyldig) ? $(telefonFeilmelding).show() : $(telefonFeilmelding).hide();
}

function emailFeilmeldingSjekk() {
    (emailInputGyldig) ? $(emailFeilmelding).show() : $(emailFeilmelding).hide();
}

function innhentingAvBillett(){
    filmInput = $("#film-input").val();
    antallInput = $("#antall-input").val();
    fornavnInput = $("#fornavn-input").val();
    etternavnInput = $("#etternavn-input").val();
    telefonInput = $("#telefon-input").val();
    emailInput = $("#email-input").val();

    validering(filmInput,antallInput,fornavnInput,etternavnInput,telefonInput, emailInput);
}

function validering(film, antall, fornavn, etternavn, telefon, email){

    if (film === 1){
        filmInputGyldig = false;
        filmFeilmeldingSjekk();
    } else {
        filmInputGyldig = true;
        filmFeilmeldingSjekk();
    }

    if (antallRegEx.test(antall)){
        antallInputGyldig = true;
        antallFeilmeldingSjekk();
    } else {
        antallInputGyldig = false;
        antallFeilmeldingSjekk();
    }

    if (navnRegEx.test(fornavn)){
        fornavnInputGyldig = true;
        fornavnFeilmeldingSjekk()
    } else {
        fornavnInputGyldig = false;
        fornavnFeilmeldingSjekk();
    }
    if (navnRegEx.test(etternavn)){
        etternavnInputGyldig = true;
        etternavnFeilmeldingSjekk()
    } else {
        etternavnInputGyldig = false;
        etternavnFeilmeldingSjekk();
    }
    if (telefonRegEx.test(telefon)){
        telefonInputGyldig = true;
        telefonFeilmeldingSjekk()
    } else {
        telefonInputGyldig = false;
        telefonFeilmeldingSjekk();
    }
    if (emailRegEx.test(email)){
        emailInputGyldig = true;
        emailFeilmeldingSjekk()
    } else {
        emailInputGyldig = false;
        emailFeilmeldingSjekk();
    }

    if(filmInputGyldig && antallInputGyldig && fornavnInputGyldig && etternavnInputGyldig && telefonInputGyldig && emailInputGyldig){
        opprettBillett()
    }
}
function opprettBillett(){
    const billett ={
        film : filmInputValidert,
        antall : antallInputValidert,
        fornavn : fornavnInputValidert,
        etternavn : etternavnInputValidert,
        telefon : telefonInputValidert,
        email : emailInputValidert
    }

        $.get("/lagre", billett, function(data) {
            hentBillett()
        });
}

function hentBillett(){
    $.get("/hentBilletter", function (vis){
        formaterBillett(vis)
    });
}

function formaterBillett(vis){
    output += "<table><tr>"
    for (let billett of vis){
        output += "<td>Film: " + billett.film + "</td> <td>Antall: " + billett.antall + " </td><td> fornavn: " + billett.fornavn + "</td><td> etternavn: " + billett.etternavn + "</td><td> Telefon: " + billett.telefonNr + "</td><td> Epost: " + billett.epost + "</td>";
    }
    output += "</tr></table>";
    outputDiv.html(output);
}


