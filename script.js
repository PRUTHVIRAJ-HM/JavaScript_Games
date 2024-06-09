function gamestart(){
var randm = Math.floor(Math.random()*2);
console.log(randm);

    switch(randm){
        case 0:
            document.querySelector("img").setAttribute("src","./assets/Group 1.png");
            const var1=document.getElementsByClassName("ans");
            var1[0].textContent = "Tails";
            break;
        case 1:
            document.querySelector("img").setAttribute("src","./assets/Group 2.png");
            const var2=document.getElementsByClassName("ans");
            var2[0].textContent = "Heads";
            break;

       
    }

}
