document.querySelector("button").addEventListener("click",clickDance);


function clickDance(){
    var num1=Math.floor(Math.random()*6)+1;
    var image1="dice"+num1+".png";
    var image1source=image1;
    document.querySelectorAll("img")[0].setAttribute("src",image1source);

    var num2=Math.floor(Math.random()*6)+1;
    var image2="dice"+num2+".png";
    var image2source=image2;
    document.querySelectorAll("img")[1].setAttribute("src",image2source);

    if(num1>num2){
        document.querySelector(".dice").innerHTML="Player 1 won 🦾👸✌️";
    }
    else if(num2>num1){
        document.querySelector(".dice").innerHTML="Player 2 won 🦾👸✌️";
    }
    else{
        document.querySelector(".dice").innerHTML="DRAW!!!😒";
    }
}