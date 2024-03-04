let nekretnine = {

    stan: 9000,
    kuca: 80000,
    plac: 3000
    }

    racunanje_mjesecne_rate(15, 'kuca')


racunanje_mjesecne_rate(20, 'plac')

racunanje_mjesecne_rate(20, 'stan')
function racunanje_mjesecne_rate(godine, vrsta_nekretnine){
 let mjeseci = godine*12
 let rata= nekretnine[vrsta_nekretnine] / mjeseci
    rata= rata.toFixed(2)

    console.log('------------')
    console.log(mjeseci + 'mjeseci')
    console.log(rata + 'eura')
    console.log(`mjesecna rata za  ${vrsta_nekretnine} je ${rata} eura na ${godine} godina `)



 console.log(rata)


}



/*
let nekretnine = {

stan: 9000,
kuca: 80000,
plac: 3000
}


let godine = 10
let mjeseci = godine *12
let rata = nekretnine.stan / mjeseci

rata = rata.toFixed(2)

console.log(mjeseci + 'mjeseci')

console.log(rata + 'eura')

console.log(`mjesecna rata za stan je ${rata} eura na ${godine} godina `)


//kuca
console.log('=========')

godine = 5
mjeseci = godine *12
rata = nekretnine.plac / mjeseci


console.log(mjeseci + 'mjeseci')
console.log(rata + 'eura')
console.log(`mjesecna rata za kucu je ${rata} eura na ${godine} godina `)

//plac
console.log('=========')

godine = 10
mjeseci = godine *12
rata = nekretnine.plac / mjeseci

console.log(mjeseci + 'mjeseci')
console.log(rata + 'eura')
console.log(`mjesecna rata za plac je ${rata} eura na ${godine} godina `)
*/