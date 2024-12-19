const anoElement2 = document.querySelector("[data-ano2]")
const mesesElement2 = document.querySelector("[data-meses2]")
const diasElement2 = document.querySelector("[data-dias2]")
const horasElement2 = document.querySelector("[data-horas2]")
const minutosElement2 = document.querySelector("[data-minutos2]")
const segundosElement2 = document.querySelector("[data-segundos2]")

const render2 = (ano2, meses2, dias2, horas2, minutos2, segundos2)=>{
    anoElement2.innerHTML = ano2
    mesesElement2.innerHTML = meses2
    diasElement2.innerHTML = dias2
    horasElement2.innerHTML = horas2
    minutosElement2.innerHTML = minutos2
    segundosElement2.innerHTML = segundos2
}

const countdown = ()=>{
    const now2 = new Date(2023, 7, 15)
    const anoCerto2 = now2.getFullYear() + 2
    const targetDate2 = new Date()

    const timeLeft2 = targetDate2 - now2

    const ano2 = Math.floor(timeLeft2 / (1000 * 60 * 60 * 24 * 365));

    // Cálculo de meses
    const restoAno2 = timeLeft2 % (1000 * 60 * 60 * 24 * 365);
    const meses2 = Math.floor(restoAno2 / (1000 * 60 * 60 * 24 * 30));

    // Cálculo de dias
    const restoMes2 = restoAno2 % (1000 * 60 * 60 * 24 * 30);
    const dias2 = Math.floor(restoMes2 / (1000 * 60 * 60 * 24));

    // Cálculo de horas
    const restoDia2 = restoMes2 % (1000 * 60 * 60 * 24);
    const horas2 = Math.floor(restoDia2 / (1000 * 60 * 60));

    // Cálculo de minutos
    const restoHora2 = restoDia2 % (1000 * 60 * 60);
    const minutos2 = Math.floor(restoHora2 / (1000 * 60));

    // Cálculo de segundos
    const restoMinuto2 = restoHora2 % (1000 * 60);
    const segundos2 = Math.floor(restoMinuto2 / 1000);

    render2(ano2, meses2, dias2, horas2, minutos2, segundos2)
}

setInterval(countdown, 1000)