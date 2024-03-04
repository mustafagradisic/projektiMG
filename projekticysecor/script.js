let nekretnine = {

    stan: 9000,
    kuca: 80000,
    plac: 3000
    }

    racunanje_mjesecne_rate(6, 'kuca')


racunanje_mjesecne_rate(15, 'plac')

racunanje_mjesecne_rate(21, 'stan')
function racunanje_mjesecne_rate(godine, vrsta_nekretnine){
 let mjeseci = godine*12
 let rata= nekretnine[vrsta_nekretnine] / mjeseci
    rata= rata.toFixed(2)

    console.log('------------')
   
    console.log(`mjesecna rata za  ${vrsta_nekretnine} je ${rata} eura na ${godine} godina `)

 

}
