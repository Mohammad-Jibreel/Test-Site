var divs=document.getElementsByClassName('divs');
var showScore=document.getElementById('showScore');
var scoreView=document.getElementById('score');
var current=document.getElementById('current');
var currentTotal=document.getElementById('currentTotal');
var selectVal=document.getElementById("option1").value;
var selectVa2=document.getElementById("option2").value;
var selectVa3=document.getElementById("option3").value;
var selectVa4=document.getElementById("option4").value;
var quest=document.getElementById('quest');
var option1=document.getElementById('option1');
 var option2=document.getElementById('option2');
 var option3=document.getElementById('option3');
 var option4=document.getElementById('option4');
 var button1=document.getElementById('btn1');
 var section1=document.getElementById('start');
 var section2=document.getElementById('questions');
 button1.onclick=function(){
 section1.style.display="none";
 section2.style.display="block";
 renderQuestion();
 }
 
 var n1q1=Math.floor(Math.random()*10 +1);
               var n2q1=Math.floor(Math.random()*10 +1);
               var n1q2=Math.floor(Math.random()*10 +1);
               var n2q2=Math.floor(Math.random()*10 +1);
               var n1q3=Math.floor(Math.random()*10 +1);
               var n2q3=Math.floor(Math.random()*10 +1);
               var n1q4=Math.floor(Math.random()*10) +1;
               var n2q4=Math.floor(Math.random()*10) +1;
               var n1q5=Math.floor(Math.random()*10) +1;
               var n2q5=Math.floor(Math.random()*10) +1;
 let questions=[
{
 question:n1q1+" + "+n2q1,

 choiceA:n1q1+n2q1+4,
 choiceB:n1q1+n2q1,
 choiceC:n1q1+n2q1+3,
 choiceD:n1q1+n1q1+7,
 correct:"B",
},
{
 question:n1q2+ "*" + n2q2,

 choiceA:n1q2*n2q2*2,
 choiceB:n1q2*n2q2*3,
 choiceC:n1q2*n2q2*1.5,
 choiceD:n1q2*n2q2,
 correct:"D",
},
{
 question:n1q3+"-"+n2q3,

 choiceA:n1q3-n2q3+1,
 choiceB:n1q3-n2q3*10,
 choiceC:n1q3-n2q3*5,
 choiceD:n1q3-n2q3,
 correct:"D",
},
{
 question:n1q4+ "/ " +n2q4,

 choiceA:n1q4*2.5/n2q4*3+5,
 choiceB:n1q4/n2q4,
 choiceC:n1q4*3/n2q4*2+1,
 choiceD:n1q4*15/n2q4+3,
 correct:"B",
},
{
 question:n1q5 + "%"+ n2q5,

 choiceA:n1q5%n2q5,
 choiceB:n1q5*5%n2q5+5,
 choiceC:n1q5*9%n2q5+92,
 choiceD:n1q5*5%n2q5+4,
 correct:"A",
}

] 
    var counts=1;
    var totalScore=0;
    var runningQuestion=0;
 
 function renderQuestion(){
   let q=questions[runningQuestion];
 quest.innerHTML=q.question;
 option1.innerHTML=q.choiceA;
 option2.innerHTML=q.choiceB;
 option3.innerHTML=q.choiceC;
 option4.innerHTML=q.choiceD;
   
 }
 var buttons=document.getElementsByClassName('options');
 for(i=0;i<buttons.length;i++){
 buttons[i].onclick=function(){
       let q=questions[runningQuestion];
    if(this.innerHTML===q.correct){
    divs[runningQuestion].style.background="green";
    runningQuestion++;
    totalScore++;
    count();
  if(runningQuestion<questions.length)
  
   {
   renderQuestion();
   console.log(counts);
   console.log(questions.length);
    
   }
  else{
      showScore();
  
  }
    }
    else{
          divs[runningQuestion].style.background="red";    
   runningQuestion++;
    count();
    console.log(counts);
    console.log(questions.length);
  if(runningQuestion<questions.length)
   {
    
    renderQuestion();
   }
  else{
   showScore();
    }
 
 
 }
 
 
 }
 function showScore(){
 section2.style.display="none";
 scoreView.style.display="block";
 var  score1=((totalScore*2));
 if(score1>7) {
  document.getElementById('showScore').innerHTML="Your Score " + score1 + " from 10";
 var audio=new Audio('../sound/SOUND.mp3');
 audio.play();

 var w=document.createElement('img');
 w.src="../images/congratulatedSuccess.jpg";
 document.getElementById('finalResult').appendChild(w);

 }
 else if(score1<7) {
   document.getElementById('showScore').innerHTML="Your Score " + score1+" from 10";
 showScore.innerHTML="Score : "+((totalScore*2))+"%";
 var audio=new Audio('../sound/sad.mp3');
 audio.play();
 var w=document.createElement('img');
 w.src="../images/LOSS.gif";
 document.getElementById('finalResult').appendChild(w);


 }
 }
 

}
function count(){
current.innerHTML=++counts;


}

