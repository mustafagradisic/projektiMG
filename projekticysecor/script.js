function inflationCalculator()
{

    let inflationRate= document.querySelector('#inflationRate')
    let money = document.querySelector( '#money' )
     

inflationRate= parseFloat(inflationRate.value)
money=parseFloat(money.value)


 let years = document.querySelector("#years") 
 years=parseFloat(years.value)


let worth = money + (money*(inflationRate / 100)  )



for(let i=1;i<years;i++)
{worth+= worth* (inflationRate / 100)

}
worth= worth.toFixed(2)


let newElement = document.createElement('div')

newElement.className= 'new-value'
newElement.innerText = `Danasnjih ${money}e vrijedi isto kao ${worth}e za  ${years} godina.`
document.querySelector('.container').appendChild(newElement)
}
