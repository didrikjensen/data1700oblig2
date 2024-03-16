let filmInput;
let antallInput;
let fornavnInput;
let etternavnInput;
let telefonInput;
let emailInput;

const filmFeilmelding = $("#film-feilmelding");
const antallFeilmelding = $("#antall-feilmelding");
const fornavnFeilmelding = $("#fornavn-feilmelding");
const etternavnFeilmelding = $("#etternavn-feilmelding");
const telefonFeilmelding = $("#telefon-feilmelding");
const emailFeilmelding = $("#email-feilmelding");

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




function onChange1() {
    filmInput = $("#film-input").val()
    antallInput = $("#antall-input").val()
    console.log(filmInput + " " + antallInput)
}

