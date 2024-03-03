let nekretnine = {

stan: 7000,
kuca: 80000,
plac: 3000
}

let godine = 15
let mjeseci = godine *12
let rata = nekretnine.stan / mjeseci

rata = rata.toFixed(2)

console.log(mjeseci)

console.log(rata)

console.log(`mjesecna rata za stan je ${rata} eura.
mjesecna rata za kucu ${nekretnine.kuca / mjeseci} eura
mjesecna rata za plac ${nekretnine.plac / mjeseci} eura`)

