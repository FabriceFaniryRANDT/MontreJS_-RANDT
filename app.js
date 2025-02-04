heures = 0
minute = 0
seconde = 0
millisec = 0

let i=0

setInterval(()=>{
  let temps = new Date()
  
  heures = temps.getHours()
  minute = temps.getMinutes()
  millisec = temps.getMilliseconds()
  seconde = temps.getSeconds()
  
  let text = document.querySelector('.centre')
    
  let fig_seconde = document.querySelector('.seconde')
  let fig_minute = document.querySelector('.minute')
  let fig_heure = document.querySelector('.heure')
  let numeric = document.querySelector('.numeric')
  posSecond = (seconde*360)/60
  posMinute = (minute*360)/60
  posHeure = (heures*360)/12
  
  numeric.innerHTML= `${heures} : ${minute}`
  text.innerHTML= `${seconde}`
  
  fig_seconde.style.rotate=`${posSecond}deg`
  fig_minute.style.rotate=`${posMinute}deg`
  fig_heure.style.rotate=`${posHeure}deg`
},100)
