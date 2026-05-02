

// Pega o horário atual
const now = moment()
let previousDate = moment("1965-11-15")




// Seleciona os elementos do HTML
let pageYear = document.querySelector(".pageYear")
let pageMonth = document.querySelector(".pageMonth")
let pageDay = document.querySelector(".pageDay")
const currentYear = new Date().getFullYear()
document.querySelector("#inputYear").max = currentYear





console.log(currentYear)

function execute (){
   
   document.querySelector(".result").classList.remove('animate__bounceInUp')

    const now = moment()
    // Inputs do form
    let selectYear = document.querySelector("#inputYear").value
    let selectMonth = document.querySelector("#inputMonth").value
    let selectDay = document.querySelector("#inputDay").value

    // Monta a data inserida padrão do Time.JS
    let previousDate = moment(
        `${selectYear}-${selectMonth}-${selectDay}`,
        "YYYY-MM-DD"
    )
    // Verifica se a data é válida
    // ! troca a inverte o valor lógico, ou seja se a data não for válida, o código abaixo será executado
    if (!previousDate.isValid() || currentYear < document.querySelector("#inputYear").value) {
        console.log(previousDate)
        alert("Data inválida")
        return
    }

      // Exibe elementos ocultos após apertar o botão
   

    // Realiza a comparação entre dia, mês e ano com a data atual
    let years = now.diff(previousDate, "years")
    previousDate.add(years, "years")

    let months = now.diff(previousDate, "months")
    previousDate.add(months, "months")

    let days = now.diff(previousDate, "days")

    // Modifica o HTML
    pageYear.innerHTML = years 
    pageMonth.innerHTML = months
    pageDay.innerHTML = days

    // Exibe animação com CSS
     document.querySelector(".result").classList.add("show")
     document.querySelector(".result").classList.add('animate__bounceInUp')

  
    //  Resetando as animações
     setTimeout(() => {
 
        
     document.querySelector(".result").classList.remove('animate__bounceInUp')
        
}, 3000);
      
}

document.querySelector("#formDate").addEventListener("submit", function(e){
    e.preventDefault()
    // clearAnimation()
    execute()


    
})

