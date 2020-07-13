var cognomi = ['Rossi','Bianchi','Verdi','Azzurri'];
var cognomeUtente = prompt('Inserisci il tuo cognome'); //Chiedo all'utente il suo cognome
var cognomeFormat = cognomeUtente.charAt(0).toUpperCase() + cognomeUtente.slice(1);  // lo formatto 

cognomi.push(cognomeFormat);   //Lo pusho nell'array
cognomi.sort();   //Ordino l-array in ordine alafabetico

var index = cognomi.indexOf(cognomeFormat) + 1;  //assegno la posizione all-interno dell-array

for (var i=0;i<cognomi.length;i++) {
    document.getElementById('lista').innerHTML  += '<li>'+cognomi[i]+'</li>'
}

document.getElementById('posizione').innerHTML = 'La tua posizione nella lista e\':' + index;








