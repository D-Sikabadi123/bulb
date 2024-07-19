const button = document.querySelector('.button')
const image = document.querySelector('.off')
button.addEventListener('click',function(){
    if(image.src.match('off')){
      image.src = './pic_bulbon.gif'
      button.innerHTML="TURN OFF"
    }
    else{
        image.src = './pic_bulboff.gif'
        button.innerHTML="TURN ON"
    }
})



