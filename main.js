let area=document.querySelector('.col-md-6')
let ball=document.querySelector('.ball')

let ballX=0;
let ballY=0;
window.addEventListener('keyup',function(el){
    ballX+=10;
    ballY+=10;
    if(el.key=='ArrowUp'){
        ball.style.bottom=ballY+"px"
    }
    if(el.key=='ArrowDown'){
        ball.style.top=ballY+"px"
    }
    if(el.key=='ArrowLeft'){
        ball.style.right=ballX+"px"
        ball.style.left=ballX-"px"
    }
    if(el.key=='ArrowRight'){
        ball.style.left=ballX+"px"
        ball.style.right=ballX-"px"
    }
})