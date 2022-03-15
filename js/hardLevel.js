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


               var n1q11=Math.floor(Math.random()*10 +7);
               var n2q11=Math.floor(Math.random()*10 +3);
               var n3q11=Math.floor(Math.random()*10 +2);

               var n1q12=Math.floor(Math.random()*10 +7);
               var n2q12=Math.floor(Math.random()*10 +3);
               var n3q12=Math.floor(Math.random()*10 +2);

               var n1q13=Math.floor(Math.random()*10 +7);
               var n2q13=Math.floor(Math.random()*10 +3);
               var n3q13=Math.floor(Math.random()*10 +2);

               var n1q14=Math.floor(Math.random()*10 +7);
               var n2q14=Math.floor(Math.random()*10 +3);
               var n3q14=Math.floor(Math.random()*10 +2);


               var n1q15=Math.floor(Math.random()*10 +7);
               var n2q15=Math.floor(Math.random()*10 +3);
               var n3q15=Math.floor(Math.random()*10 +2);

               var n1q16=Math.floor(Math.random()*10 +7);
               var n2q16=Math.floor(Math.random()*10 +3);
               var n3q16=Math.floor(Math.random()*10 +2);


               var n1q17=Math.floor(Math.random()*10 +7);
               var n2q17=Math.floor(Math.random()*10 +3);
               var n3q17=Math.floor(Math.random()*10 +2);


               var n1q18=Math.floor(Math.random()*10 +7);
               var n2q18=Math.floor(Math.random()*10 +3);
               var n3q18=Math.floor(Math.random()*10 +2);

               var n1q19=Math.floor(Math.random()*10 +7);
               var n2q19=Math.floor(Math.random()*10 +3);
               var n3q19=Math.floor(Math.random()*10 +2);

               var n1q20=Math.floor(Math.random()*10 +7);
               var n2q20=Math.floor(Math.random()*10 +3);
               var n3q20=Math.floor(Math.random()*10 +2);

               var n1q21=Math.floor(Math.random()*10 +7);
               var n2q21=Math.floor(Math.random()*10 +3);
               var n3q21=Math.floor(Math.random()*10 +2);

               var n1q22=Math.floor(Math.random()*10 +7);
               var n2q22=Math.floor(Math.random()*10 +3);
               var n3q22=Math.floor(Math.random()*10 +2);

               var n1q23=Math.floor(Math.random()*10 +7);
               var n2q23=Math.floor(Math.random()*10 +3);
               var n3q23=Math.floor(Math.random()*10 +2);

               var n1q24=Math.floor(Math.random()*10 +7);
               var n2q24=Math.floor(Math.random()*10 +3);
               var n3q24=Math.floor(Math.random()*10 +2);
               

               var n1q25=Math.floor(Math.random()*10 +7);
               var n2q25=Math.floor(Math.random()*10 +3);
               var n3q25=Math.floor(Math.random()*10 +2);















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

{
 question:"(" + n1q11+" + "+n2q11+ ")" + "+" +n3q11,

 choiceA:n1q11+n2q11+n3q11+7,
 choiceB:n1q11+n2q11+n3q11,
 choiceC:n1q11+n2q11+n3q11+6,
 choiceD:n1q11+n2q1+n3q11+4,
 correct:"B",
},
{
 question:"(" +  (n1q12+"*"+n2q12 ) +  ")"  + "*" +  n3q12,

 choiceA:n1q12*n2q12*n3q12*2,
 choiceB:n1q12*n2q12*n3q12*3,
 choiceC:n1q12*n2q12*n3q12*1.5,
 choiceD:(n1q12*n2q12)*n3q12,
 correct:"D",
},
{
 question:"(" +  (n1q13+"-"+n2q13 ) +  ")"  + "+" +  n3q13,

 choiceA:(n1q13-n2q13+n3q13)+1,
 choiceB:(n1q13-n2q13+n3q13),
 choiceC:(n1q13-n2q13+n3q13)*5,
 choiceD:(n1q13-n2q13)+10,
 correct:"B",
},
{
 question:"(" + (n1q14+ "/ " +n2q14) +  ")"  + "*" +  n3q14,

 choiceA:(n1q14*2.5/n2q14)* n3q14 + 5,
 choiceB:(n1q14/n2q14) *n3q14,
 choiceC:(n1q14*3/n2q14)*n3q14+2,
 choiceD:(n1q14*15/n2q14)*n3q14,
 correct:"B",
},
{
 question:"(" + (n1q15 + "%"+ n2q15)  + ")"   +" + " +n3q15,

 choiceA:(n1q15%n2q15)+n3q15,
 choiceB:n1q15*5%n2q15+5,
 choiceC:n1q15*9%n2q15+92,
 choiceD:n1q15*5%n2q15+4,
 correct:"A",
},
{
 question: "(" +  (n1q16+" + "+n2q16 ) + ")"+ "-" + n3q16,

 choiceA:n1q16+n2q16-n3q16-2,
 choiceB:n1q16+n2q16-n3q16-7,
 choiceC:n1q16+n2q16-n3q16-10,
 choiceD:(n1q16+n2q16)-n3q16,
 correct:"D",
},
{
  question:"(" +(n1q17+" + "+n2q17) + ")" + "*" + n3q17,

 choiceA:n1q17+n2q17*n3q17*4,
 choiceB:n1q17+n2q17*n3q17-5,
 choiceC:(n1q17+n2q17)*n3q17,
 choiceD:n1q17+n2q17*n3q17*10,
 correct:"C",
},
{
  question:"(" +(n1q18+" + "+n2q18 ) + ")"+ "/" + n3q18,

 choiceA:n1q18+n2q18/n3q18*1.5,
 choiceB:n1q18+n2q18/n3q18*2,
 choiceC:(n1q18+n2q18)/n3q18,
 choiceD:(n1q18+n2q18)/n3q18*3,
 correct:"C",
},
{
 question:"(" + (n1q19+" + "+n2q19) + ")" + "%"  + n3q19,

 choiceA:(n1q19+n2q19)%n3q19,
 choiceB:n1q19+n2q19%n3q19+10,
 choiceC:n1q19+n2q19%n3q19+6,
 choiceD:n1q19+n2q19%n3q19+2,
 correct:"A",
},
{
 question:"(" + (n1q20+" + "+n2q10 ) + ")"+ "+" +n3q20,

 choiceA:n1q20+n2q10+n3q20+6,
 choiceB:n1q20+n2q10+n3q20+4,
 choiceC:n1q20+n2q10+n3q20*3,
 choiceD:(n1q20+n2q10)+n3q20,
 correct:"D",
},



{
  question:"(" +(n1q21+" + "+n2q21) + ")" + "*" + n3q21,

 choiceA:n1q21+n2q21*n3q21*4,
 choiceB:n1q21+n2q21*n3q21-5,
 choiceC:(n1q21+n2q21)*n3q21,
 choiceD:n1q21+n2q21*n3q21*10,
 correct:"C",
},
{
  question:"(" +(n1q22+" + "+n2q22 ) + ")"+ "/" + n3q22,

 choiceA:n1q22+n2q22/n3q22*1.5,
 choiceB:n1q22+n2q22/n3q22*2,
 choiceC:(n1q22+n2q22)/n3q22,
 choiceD:(n1q22+n2q22)/n3q22*3,
 correct:"C",
},
{
 question:"(" + (n1q23+" + "+n2q23) + ")" + "%"  + n3q23,

 choiceA:(n1q23+n2q23)%n3q23,
 choiceB:n1q23+n2q23%n3q23+10,
 choiceC:n1q23+n2q23%n3q23+6,
 choiceD:n1q23+n2q23%n3q23+2,
 correct:"A",
},
{
 question:"(" + (n1q24+" + "+n2q24 ) + ")"+ "+" +n3q24,

 choiceA:n1q24+n2q24+n3q24+6,
 choiceB:n1q24+n2q24+n3q24+4,
 choiceC:n1q24+n2q24+n3q24*3,
 choiceD:(n1q24+n2q24)+n3q24,
 correct:"D",
},
{
 question:"(" + (n1q25+" + "+n2q25 ) + ")"+ "+" +n3q25,

 choiceA:n1q25+n2q25+n3q25+6,
 choiceB:n1q25+n2q25+n3q25+4,
 choiceC:n1q25+n2q25+n3q25*3,
 choiceD:(n1q25+n2q25)+n3q25,
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
 option6.innerHTML=q.choiceD;
 option7.innerHTML=q.choiceD;
 option8.innerHTML=q.choiceD;
 option9.innerHTML=q.choiceD;
 option11.innerHTML=q.choiceD;
 option12.innerHTML=q.choiceA;
 option13.innerHTML=q.choiceB;
 option14.innerHTML=q.choiceC;
 option15.innerHTML=q.choiceD;
 option16.innerHTML=q.choiceD;
 option17.innerHTML=q.choiceD;
 option18.innerHTML=q.choiceD;
 option19.innerHTML=q.choiceD;
 option20.innerHTML=q.choiceD;
 option21.innerHTML=q.choiceD;
 option22.innerHTML=q.choiceB;
 option23.innerHTML=q.choiceC;
 option24.innerHTML=q.choiceD;
 option25.innerHTML=q.choiceD;


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
 if(score1>45) {
  document.getElementById('showScore').innerHTML="Your Score " + score1  + " from 50";
 var audio=new Audio('../sound/SOUND.mp3');
 audio.play();

 var w=document.createElement('img');

 w.src="../images/fireworks.gif";
w.setAttribute("width","600px");
w.setAttribute("height","400px");
w.setAttribute('class','animation')

 document.getElementById('finalResult').appendChild(w);

 }
 else if(score1<45) {
   document.getElementById('showScore').innerHTML="Your Score " + score1  + " from 50";
 showScore.innerHTML="Score : "+((totalScore)*2)+"%";
 var audio=new Audio('../sound/sad.mp3');
 audio.play();
 var w=document.createElement('img');
 w.src="../images/LOSS.gif";
 w.setAttribute('class','failed');
 document.getElementById('finalResult').appendChild(w);


 }
 }
 

}
function count(){
current.innerHTML=++counts;


}
