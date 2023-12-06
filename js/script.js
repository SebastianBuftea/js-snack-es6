//SNACK 1

//creo l'array di oggetti
let bici=[
    {
        nome:"Atala",
        peso: 6.8

    },
    {
        nome:"Bianchi",
        peso: 8.1

    },
    {
        nome:"Carrera",
        peso: 5.2

    },
    {
        nome:"Cinelli",
        peso: 5

    },
    {
        nome:"Legnano",
        peso: 8.5

    }
]

//creao le variabili contenente la bici dipartenza ed una varibaile con il peso più piccolo riscontrato
// in questo caso la prima
let pesoMin= bici[0].peso;
let { nome, peso }=bici[0]

//eseguo un ciclo per tutte gli oggetti del array e se il peso della bici in questione è più piccolo di quello
//precedentemente riscontarto come più piccolo sostituisco il nome della bici e il suo peso
bici.forEach((elem) => {
    if(elem.peso<pesoMin){
       nome=elem.nome;
       peso=elem.peso;

    }   
});

//stampo il nome e il peso della bici con minor peso 
console.log(`${nome} ${peso}`)


//SNACK 2

// creo l' array di squadre
let squadre=[
    {
        nome:"Juventus",
        puntifatti:0, 
        fallisubiti:0
    },
    {
        nome:"Milan",
        puntifatti:0, 
        fallisubiti:0
    },
    {
        nome:"Inter",
        puntifatti:0, 
        fallisubiti:0
    },
    {
        nome:"Roma",
        puntifatti:0, 
        fallisubiti:0
    },
    {
        nome:"Napoli",
        puntifatti:0, 
        fallisubiti:0
    }

]

// creo una funzione che mi generi numeri random

function randomNumber(){
    let numerorandom= Math.floor(Math.random()*100 + 1)
return numerorandom;
}
let newArray=[]
//creo un ciclo al quale interno sostituiro alle chiavi punti fatti e falli subiri un numero random
 squadre.forEach((elem, index, array)=>{
console.log(elem)
   elem.puntifatti=randomNumber();
   elem.fallisubiti=randomNumber();
// grazie alla destrutturazione pushamo nel arrai la squadra coni relativi falli subiti
   let {nome, fallisubiti}= elem;

   //mi creo il nuovo oggetto contenente i soli due valori richiesti e li pusho in un array
   let obj={
    nome,
    fallisubiti
   }
   newArray.push(obj);    
})

console.log(newArray)

