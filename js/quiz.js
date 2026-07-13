let current=0;
let score=0;

loadQuestion();

function loadQuestion(){

let q=questions[current];

document.getElementById("question").innerHTML=q.question;

document.getElementById("a").innerHTML=q.options[0];
document.getElementById("b").innerHTML=q.options[1];
document.getElementById("c").innerHTML=q.options[2];
document.getElementById("d").innerHTML=q.options[3];

}

document.querySelectorAll("button").forEach((btn,index)=>{

btn.onclick=function(){

if(index==questions[current].answer){

score+=questions[current].points;

}

current++;

if(current<questions.length){

loadQuestion();

}else{

document.body.innerHTML="<h1>Your Score : "+score+"</h1>";

}

}

});
