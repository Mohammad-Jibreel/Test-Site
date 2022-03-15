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
               var n2q1=Math.floor(Math.random()*10 +2);
               var n3q1=Math.floor(Math.random()*10 +3);

               var n1q2=Math.floor(Math.random()*10 +3);
               var n2q2=Math.floor(Math.random()*10 +4);
               var n3q2=Math.floor(Math.random()*10 +5);

               var n1q3=Math.floor(Math.random()*10 +15);
               var n2q3=Math.floor(Math.random()*10 +16);
               var n3q3=Math.floor(Math.random()*10 +16);

               var n1q4=Math.floor(Math.random()*10 +4);
               var n2q4=Math.floor(Math.random()*10 +3);
               var n3q4=Math.floor(Math.random()*10 +3);

               var n1q5=Math.floor(Math.random()*10 +5);
               var n2q5=Math.floor(Math.random()*10 +3);
               var n3q5=Math.floor(Math.random()*10 +7);

               var n1q6=Math.floor(Math.random()*10 +12);
               var n2q6=Math.floor(Math.random()*10 +34);
               var n3q6=Math.floor(Math.random()*10 +5);


               var n1q7=Math.floor(Math.random()*10 +7);
               var n2q7=Math.floor(Math.random()*10 +5);
               var n3q7=Math.floor(Math.random()*10 +1);

               var n1q8=Math.floor(Math.random()*10 +9);
               var n2q8=Math.floor(Math.random()*10 +4);
               var n3q8=Math.floor(Math.random()*10 +7);


               var n1q9=Math.floor(Math.random()*10 +14);
               var n2q9=Math.floor(Math.random()*10 +4);
               var n3q9=Math.floor(Math.random()*10 +1);

               var n1q10=Math.floor(Math.random()*10 +7);
               var n2q10=Math.floor(Math.random()*10 +3);
               var n3q10=Math.floor(Math.random()*10 +2);
 let questions=[
{
 question:"(" + n1q1+" + "+n2q1+ ")" + "+" +n3q1,

 choiceA:n1q1+n2q1+n3q1+7,
 choiceB:n1q1+n2q1+n3q1,
 choiceC:n1q1+n2q1+n3q1+6,
 choiceD:n1q1+n1q1+n3q1+4,
 correct:"B",
},
{
 question:"(" +  (n1q2+"*"+n2q2 ) +  ")"  + "*" +  n3q2,

 choiceA:n1q2*n2q2*n3q2*2,
 choiceB:n1q2*n2q2*n3q2*3,
 choiceC:n1q2*n2q2*n3q2*1.5,
 choiceD:(n1q2*n2q2)*n3q2,
 correct:"D",
},
{
 question:"(" +  (n1q3+"-"+n2q3 ) +  ")"  + "+" +  n3q3,

 choiceA:(n1q3-n2q3+n3q3)+1,
 choiceB:(n1q3-n2q3+n3q3),
 choiceC:(n1q3-n2q3+n3q3)*5,
 choiceD:(n1q3-n2q3)+10,
 correct:"B",
},
{
 question:"(" + (n1q4+ "/ " +n2q4) +  ")"  + "*" +  n3q4,

 choiceA:(n1q4*2.5/n2q4)* n3q4 + 5,
 choiceB:(n1q4/n2q4) *n3q4,
 choiceC:(n1q4*3/n2q4)*n3q4+2,
 choiceD:(n1q4*15/n2q4)*n3q4,
 correct:"B",
},
{
 question:"(" + (n1q5 + "%"+ n2q5)  + ")"   +" + " +n3q5,

 choiceA:(n1q5%n2q5)+n3q5,
 choiceB:n1q5*5%n2q5+5,
 choiceC:n1q5*9%n2q5+92,
 choiceD:n1q5*5%n2q5+4,
 correct:"A",
},
{
 question: "(" +  (n1q6+" + "+n2q6 ) + ")"+ "-" + n3q6,

 choiceA:n1q6+n2q6-n3q6-2,
 choiceB:n1q6+n2q6-n3q6-7,
 choiceC:n1q6+n2q6-n3q6-10,
 choiceD:(n1q6+n2q6)-n3q6,
 correct:"D",
},
{
  question:"(" +(n1q7+" + "+n2q7) + ")" + "*" + n3q7,

 choiceA:n1q7+n2q7*n3q7*4,
 choiceB:n1q7+n2q7*n3q7-5,
 choiceC:(n1q7+n2q7)*n3q7,
 choiceD:n1q7+n2q7*n3q7*10,
 correct:"C",
},
{
  question:"(" +(n1q8+" + "+n2q8 ) + ")"+ "/" + n3q8,

 choiceA:n1q8+n2q8/n3q8*1.5,
 choiceB:n1q8+n2q8/n3q8*2,
 choiceC:(n1q8+n2q8)/n3q8,
 choiceD:(n1q8+n2q8)/n3q8*3,
 correct:"C",
},
{
 question:"(" + (n1q9+" + "+n2q9) + ")" + "%"  + n3q9,

 choiceA:(n1q9+n2q9)%n3q9,
 choiceB:n1q9+n2q9%n3q9+10,
 choiceC:n1q9+n2q9%n3q9+6,
 choiceD:n1q9+n2q9%n3q9+2,
 correct:"A",
},
{
 question:"(" + (n1q10+" + "+n2q10 ) + ")"+ "+" +n3q10,

 choiceA:n1q10+n2q10+n3q10+6,
 choiceB:n1q10+n2q10+n3q10+4,
 choiceC:n1q10+n2q10+n3q10*3,
 choiceD:(n1q10+n2q10)+n3q10,
 correct:"D",
},

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
 option5.innerHTML=q.choiceD;
//  option6.innerHTML=q.choiceD;
//  option7.innerHTML=q.choiceD;
//  option8.innerHTML=q.choiceD;
//  option9.innerHTML=q.choiceD;
//  option10.innerHTML=q.choiceD;


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
 if(score1>15) {
  document.getElementById('showScore').innerHTML="Your Score " + score1  + " from 20";
 var audio=new Audio('../sound/SOUND.mp3');
 audio.play();

 var w=document.createElement('img');
 w.src="../images/congratulatedSuccess.jpg";
 document.getElementById('finalResult').appendChild(w);

 }
 else if(score1<15) {
   document.getElementById('showScore').innerHTML="Your Score " + score1  + " from 20";
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
