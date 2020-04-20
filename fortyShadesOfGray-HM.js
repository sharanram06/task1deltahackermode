
var num1=document.querySelectorAll(".num1");
var num2=document.querySelectorAll(".num2");
var num3=document.querySelectorAll(".num3");
var easy=document.querySelector(".easy");
var normal=document.querySelector(".normal");
var hard=document.querySelector(".hard");
var mess=document.querySelectorAll(".message");
var result=document.querySelectorAll(".result");
var tshow=document.getElementById("display-area");
var newgame=document.getElementById("newgame");
var restart=document.querySelectorAll(".restart");
var starter=document.querySelectorAll(".start");
var cd=document.querySelectorAll(".count");
var ta=document.querySelector("#ta");
var record=document.querySelector("#record");
var drop=document.querySelectorAll(".drop");
var mode=document.querySelectorAll(".mode");
var desc=document.getElementById("desc");
var note=document.getElementById("note");
var dropdown=document.querySelector(".dropdown")
var del=document.getElementById("del");
var ls1=[];
var ls2=[];
var ls3=[];
var p;
var modeenh;
var numgrids;
var ri = new Audio();
ri.src="button.mp3";
var win=new Audio();
win.src="win.wav";

for(var i=1;i<=5;i++)
{
    if(!window.localStorage.hasOwnProperty(String(i)+"e")||window.localStorage.getItem(String(i)+"e")==undefined)
    {
        window.localStorage.setItem(String(i)+"e","0")
    }
}
for(var i=1;i<=5;i++)
{
    if(!window.localStorage.hasOwnProperty(String(i)+"n")||window.localStorage.getItem(String(i)+"n")==undefined)
    {
        window.localStorage.setItem(String(i)+"n","0")
    }
}
for(var i=1;i<=5;i++)
{
    if(!window.localStorage.hasOwnProperty(String(i)+"h")||window.localStorage.getItem(String(i)+"h")==undefined)
    {
        window.localStorage.setItem(String(i)+"h","0")
    }
}




for(var i = 0; i < 3; i++){
    mode[i].addEventListener("click", function(){
        mode[0].classList.remove("modeprop");
        mode[1].classList.remove("modeprop");
        mode[2].classList.remove("modeprop") ;       
        this.classList.add("modeprop");
            if(this.textContent === "EASY")
            {note.style.display="none";
            p=0;
            numgrids=20;
            modeenh="e";
            dropdown.style.visibility="visible";
            starter[0].style.display="block";
            easy.style.display="block";
            normal.style.display="none";   
            hard.style.display="none";
            shuffleArray();
            reckeep()

            }
           else if(this.textContent === "NORMAL")
            {note.style.display="none";
            p=1;
            numgrids=30;
            modeenh="n" ;  
            starter[1].style.display="block";
            dropdown.style.visibility="visible";
            easy.style.display="none";
            normal.style.display="block";   
            hard.style.display="none"; 
            shuffleArray();
            reckeep()
            }
            else{note.style.display="none";
                p=2;
                numgrids=40;
                modeenh="h";
                dropdown.style.visibility="visible";
                starter[2].style.display="block";        
                easy.style.display="none";
                normal.style.display="none";   
                hard.style.display="block"; 
                shuffleArray();
                reckeep(); }
        });
}  

del.addEventListener("click",function(){
    if(modeenh=="e")
    {    record.textContent="0";
         for(i=1;i<=10;i++)
        {
            window.localStorage.setItem(String(i)+"e","0");
            ls1[i]=0;
            if(i<6)
            drop[i-1].textContent="0";
        }
    }
    else if(modeenh=="n")
    {   record.textContent="0";
        for(i=1;i<=10;i++)
        {
            window.localStorage.setItem(String(i)+"n","0");
            ls2[i]=0;
            if(i<6)
            drop[i-1].textContent="0";
        }
    }
    else
    {    record.textContent="0";
        for(i=1;i<=10;i++)
        {
            window.localStorage.setItem(String(i)+"h","0");
            ls3[i]=0;
            if(i<6)
            drop[i-1].textContent="0";
        }
    }
})

//color generator

    var ecol=new Object();
    var ncol=new Object();
    var hcol=new Object();
    var x1,y1,z1;
    x1=219;y1=255;z1=200;
    for (i=1;i<=40;i++)
    {  if (i<=20)
        {  ecol["e"+String(i)]="rgb("+ x1 + ", " + y1 + ", " + z1 + ")";
            x1-=8;z1-=9;}
        else{ ecol["e"+String(i)]="rgb("+ x1 + ", " + y1 + ", " + z1 + ")";
           x1-=3;y1-=11;}}
    var x2,y2,z2;
    x2=250;y2=240;z2=255;
    for (i=1;i<=60;i++)
    {  if (i<=30)
        {  ncol["n"+String(i)]="rgb("+ x2 + ", " + y2 + ", " + z2 + ")";
            x2-=5;y2-=7;}

        else{ ncol["n"+String(i)]="rgb("+ x2 + ", " + y2 + ", " + z2 + ")";
           x2-=3;z2-=6;}
    }
    var x3,y3,z3;
    x3=240;y3=255;z3=250;
    for (i=1;i<=80;i++)
    {  if (i<=40)
        {  hcol["h"+String(i)]="rgb("+ x3 + ", " + y3 + ", " + z3 + ")";
            x3-=6;z3-=1;}

        else{ hcol["h"+String(i)]="rgb("+ x3 + ", " + y3 + ", " + z3 + ")";
           y3-=5;z3-=4;}
    }
    
 


//shuffling the array
function shuffleArray() {
    var numlist=[];
    for(var i=0;i<numgrids;i++)
        { numlist[i]=i+1;}
    
    for (var i = numlist.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = numlist[i];
        numlist[i] = numlist[j];
        numlist[j] = temp;
        
    }
    console.log(numlist);
    

    if(numgrids==20)
    {for(var i=0;i<numgrids;i++)
    {
        num1[i].textContent=numlist[i];
        num1[i].style.backgroundColor=ecol["e"+String(numlist[i])];
    }}
    else if(numgrids==30)
    {for(var i=0;i<numgrids;i++)
    {
        num2[i].textContent=numlist[i];
        num2[i].style.backgroundColor=ncol["n"+String(numlist[i])];
    }}
    else
    {for(var i=0;i<numgrids;i++)
    {
        num3[i].textContent=numlist[i];
        num3[i].style.backgroundColor=hcol["h"+String(numlist[i])];
    }} 
}


function showit()
{
    if(modeenh==="e")
    for(i=0;i<numgrids;i++)
     num1[i].style.display="block";
    else if (modeenh==="n")
    for(i=0;i<numgrids;i++)
     num2[i].style.display="block"; 
    else
    for(i=0;i<numgrids;i++)
      num3[i].style.display="block";
}
function hideit()
{
    if(modeenh==="e")
    for(i=0;i<numgrids;i++)
     num1[i].style.display="none";
    else if (modeenh==="n")
    for(i=0;i<numgrids;i++)
     num2[i].style.display="none"; 
    else
    for(i=0;i<numgrids;i++)
      num3[i].style.display="none";
}
  



for(i=0;i<=2;i++)
{
 starter[i].addEventListener("click",gstart);
 function gstart()
  {   
    starter[p].style.display="none";
    cd[p].style.display="block";
    for(i=0;i<=2;i++)
    {
        mode[i].style.display="none";
    }
      desc.style.display="inline-block";
    setTimeout(function(){ cd[p].textContent = "2" }, 1000);
    setTimeout(function(){ cd[p].textContent = "1" }, 2000);
    setTimeout(function(){ cd[p].style.display="none";
    showit();
    newgame.style.visibility="visible";
    dropdown.style.visibility="hidden";
    cd[p].textContent="3";
    reckeep();
    startit();
    onclick();
        }, 3000);
  };

}

    //onclick
    function onclick(){
        var count=1;
        var count2=numgrids+1;
        var num;
        if(modeenh==="e")
         num=num1;
         else if (modeenh==="n")
         num=num2;
         else
         num=num3;
         console.log(num);
         console.log(modeenh)
       
        for(var i=0;i<numgrids;i++)
        {
            num[i].addEventListener("click",function(){
                if(Number(this.textContent)===count)
                { 
                    this.textContent=count2;
                    if(modeenh=="e")
                    { this.style.backgroundColor=ecol["e"+String(count2)];}
                   else if(modeenh=="n")
                    { this.style.backgroundColor=ncol["n"+String(count2)];
                    }
                    else{
                        this.style.backgroundColor=hcol["h"+String(count2)];
                    }
                    ri.play();
                    count++;
                    count2++;
                    if(count>(numgrids*2))
                    {   win.play()
                         hideit();
                        mess[p].style.display="block";
                        stop();
                         var r=tshow.innerHTML;
                         var R=Number(r[0]+r[1]+r[3]+r[4]+r[6]+r[7]+r[8])
                         recordmaker(r,R);
                        result[p].innerHTML= "YOUR TIME "+r;
                        newgame.style.visibility="hidden";
                        dropdown.style.visibility="visible";    
                    }
                   else if(count>(numgrids+1))
                    {
                        this.textContent="";
                        this.style.backgroundColor="wheat";
                    }}})}}  ;  


    
function recordmaker(r,R)
{   
    if(modeenh==="e")
   { for(i=1;i<=5;i++)
    {    var k=i;
        if(Number(ls1[i+5])<R && Number(ls1[i+5])!=0)
        continue;
        else
        { window.localStorage.setItem(String(i)+"e",r)  ;
            var j=i+1;
            for(i=j;i<=5;i++)
            { window.localStorage.setItem(String(i)+"e",ls1[i-1])  ; }
            window.localStorage.setItem(String(k+5)+"e",R)
            j=k+6;
            for(k=j;k<=10;k++)
            {window.localStorage.setItem(String(k)+"e",ls1[k-1])  ;}} }
    for(var i=0;i<5;i++)
        {drop[i].textContent=window.localStorage.getItem(String(i+1)+"e");}
        record.textContent=window.localStorage.getItem("1e");}
      
   else if(modeenh==="n")
       {  for(i=1;i<=5;i++)
    {    var k=i;
        if(Number(ls2[i+5])<R && Number(ls2[i+5])!=0)
        continue;
        else
        { window.localStorage.setItem(String(i)+"n",r)  ;
            var j=i+1;
            for(i=j;i<=5;i++)
            { window.localStorage.setItem(String(i)+"n",ls2[i-1])  ; }
            window.localStorage.setItem(String(k+5)+"n",R)
            j=k+6;
            for(k=j;k<=10;k++)
            {window.localStorage.setItem(String(k)+"n",ls2[k-1])  ;}} }
    for(var i=0;i<5;i++)
        {drop[i].textContent=window.localStorage.getItem(String(i+1)+"n");}
        record.textContent=window.localStorage.getItem("1n");}
 
   else
       {  for(i=1;i<=5;i++)
    {    var k=i;
        if(Number(ls3[i+5])<R && Number(ls3[i+5])!=0)
        continue;
        else
        { window.localStorage.setItem(String(i)+"h",r)  ;
            var j=i+1;
            for(i=j;i<=5;i++)
            { window.localStorage.setItem(String(i)+"h",ls3[i-1])  ; }
            window.localStorage.setItem(String(k+5)+"h",R)
            j=k+6;
            for(k=j;k<=10;k++)
            {window.localStorage.setItem(String(k)+"h",ls3[k-1])  ;}} }
    for(var i=0;i<5;i++)
        {drop[i].textContent=window.localStorage.getItem(String(i+1)+"h");}
        record.textContent=window.localStorage.getItem("1h");} 
 }        


 newgame.addEventListener("click",loop)
 for(i=0;i<3;i++)
 {
     restart[i].addEventListener("click",loop);
 }
 function loop()
 {
     if (modeenh==="e")
     {
         hideit();
         newgame.style.visibility="hidden";
         dropdown.style.visibility="visible";
         mess[0].style.display="none";
         for(i=0;i<=2;i++)
        {
            mode[i].style.display="inline-block";
        }
        desc.style.display="none";
         stop();
         reset();
         starter[0].style.display="block";
         easy.style.display="block";
         normal.style.display="none";   
         hard.style.display="none";
         shuffleArray();
         reckeep();
       
     }
     else if(modeenh==="n")
     {
        hideit();
        newgame.style.visibility="hidden";
        dropdown.style.visibility="visible";
        mess[1].style.display="none";
        for(i=0;i<=2;i++)
       {
           mode[i].style.display="inline-block";
       }
       desc.style.display="none";
        stop();
        reset();
        starter[1].style.display="block";
        easy.style.display="none";
        normal.style.display="block";   
        hard.style.display="none";
        shuffleArray();
        reckeep();
     }
     else
     {
        hideit();
        newgame.style.visibility="hidden";
        dropdown.style.visibility="visible";
        mess[2].style.display="none";
        for(i=0;i<=2;i++)
       {
           mode[i].style.display="inline-block";
       }
       desc.style.display="none";
        stop();
        reset();
        starter[2].style.display="block";
        easy.style.display="none";
        normal.style.display="none";   
        hard.style.display="block";
        shuffleArray();
        reckeep();
     }
 }



 

    //Record storage
    function reckeep(){
        if(modeenh=="e")
        {for(var i=1;i<=10;i++)
        {
            ls1[i]=window.localStorage.getItem(String(i)+"e");
        }
    for(var i=0;i<5;i++)
        {
            drop[i].textContent=window.localStorage.getItem(String(i+1)+"e")
        }
        record.textContent=window.localStorage.getItem("1e");}
        else if(modeenh=="n")
        
            {for(var i=1;i<=10;i++)
                {
                    ls2[i]=window.localStorage.getItem(String(i)+"n");
                }
            for(var i=0;i<5;i++)
                {
                    drop[i].textContent=window.localStorage.getItem(String(i+1)+"n")
                }
                record.textContent=window.localStorage.getItem("1n");}
        
        else
            {for(var i=1;i<=10;i++)
                {
                    ls3[i]=window.localStorage.getItem(String(i)+"h");
                }
            for(var i=0;i<5;i++)
                {
                    drop[i].textContent=window.localStorage.getItem(String(i+1)+"h")
                }
                record.textContent=window.localStorage.getItem("1h");}
        
  
    }


//timer

var timeBegan = null;
var timeStopped = null;
var stoppedDuration = 0;
var started = null;


function startit() {
    if (timeBegan === null) {
        timeBegan = new Date();
    }

    if (timeStopped !== null) {
        stoppedDuration += (new Date() - timeStopped);
    }

    started = setInterval(clockRunning, 10);	
}

function stop() {
    timeStopped = new Date();
    clearInterval(started);
}

function reset() {
    clearInterval(started);
    stoppedDuration = 0;
    timeBegan = null;
    timeStopped = null;
    tshow.innerHTML = "00:00.000";
}

function clockRunning(){
    var  currentTime = new Date()
    var  timeElapsed = new Date(currentTime - timeBegan - stoppedDuration)
    var  min = timeElapsed.getUTCMinutes();
    var  sec = timeElapsed.getUTCSeconds();
    var  ms = timeElapsed.getUTCMilliseconds();

    tshow.innerHTML = 
        (min > 9 ? min : "0" + min) + ":" + 
        (sec > 9 ? sec : "0" + sec) + "." + 
        (ms > 99 ? ms : ms > 9 ? "0" + ms : "00" + ms);
        
} 
