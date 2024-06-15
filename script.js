console.log("Welcome to the game");
let Audioturn = new Audio("./assets/ting.mp3");
let gameover = new Audio("./assets/gameover.mp3");
let turn = "X";
let isgameover=false;

const changeTurn =()=>{
    return turn === "X"?"O":"X"
}

const checkWin=()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,8,5],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText=boxtext[e[0]].innerText+" Won The Match";
            isgameover=true;
            gameover.play();
            const var1 = document.getElementsByClassName("titleout");
            var1[0].textContent="Game Over !"
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px";

        }
        
    })
}



let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText=turn;
            turn=changeTurn();
            Audioturn.play();
            checkWin();
            if(!isgameover){
            document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
            }

        }
    })
})


//button action

reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText=""
    });
    turn="X";
    isgameover=false;
    document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px";
    const var1 = document.getElementsByClassName("titleout");
    var1[0].textContent="Lets Begin !";
    

        
})