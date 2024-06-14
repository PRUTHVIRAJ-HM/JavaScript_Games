function dieroll(){
var rand1 = Math.floor(Math.random()*6)+1;
console.log(rand1);
var rand2 = Math.floor(Math.random()*6)+1;
console.log(rand2);


switch(rand1){
    case 0:
        document.querySelector(".img1").setAttribute("src","./images/dice1.png");
        break;
    case 1:
        document.querySelector(".img1").setAttribute("src","./images/dice2.png");
        break;
    case 2:
        document.querySelector(".img1").setAttribute("src","./images/dice3.png");
        break;
    case 3:
        document.querySelector(".img1").setAttribute("src","./images/dice4.png");
        break;
    case 4:
        document.querySelector(".img1").setAttribute("src","./images/dice5.png");
        break;
    case 5:
        document.querySelector(".img1").setAttribute("src","./images/dice6.png");
        break;
}

switch(rand2){
    case 0:
        document.querySelector(".img2").setAttribute("src","./images/dice1.png");
        break;
    case 1:
        document.querySelector(".img2").setAttribute("src","./images/dice2.png");
        break;
    case 2:
        document.querySelector(".img2").setAttribute("src","./images/dice3.png");
        break;
    case 3:
        document.querySelector(".img2").setAttribute("src","./images/dice4.png");
        break;
    case 4:
        document.querySelector(".img2").setAttribute("src","./images/dice5.png");
        break;
    case 5:
        document.querySelector(".img2").setAttribute("src","./images/dice6.png");
        break;
}


if(rand1<rand2){
    const var1 = document.getElementsByClassName("p1");
    var1[0].textContent = "You Loose";

    const var2 =document.getElementsByClassName("p2");
    var2[0].textContent = "You Won";

}
else if(rand1>rand2){
    const var3 = document.getElementsByClassName("p1");
    var3[0].textContent = "You Won";

    const var4 =document.getElementsByClassName("p2");
    var4[0].textContent = "You Loose";
}
else if(rand1==rand2){
    const var5 = document.getElementsByClassName("p1");
    var5[0].textContent = "Draw";

    const var6 =document.getElementsByClassName("p2");
    var6[0].textContent="Draw";
}
}

