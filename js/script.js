var time = document.getElementById("Time_int").innerHTML;
var socre = document.getElementById("socre_no").innerHTML = 0;
var question =document.getElementById("question");
var ul =document.getElementById("ul");
var ques_no =document.getElementById("ques_no");
var op1 =document.getElementById("op1");
var op2 =document.getElementById("op2");
var op3 =document.getElementById("op3");
var op4 =document.getElementById("op4");
var index = 0;
var app;

var step =ques_no.innerHTML = index+1;
var stoptime = setInterval(clock, 1000);
start(index);



function clock(){
    time = parseInt(time + 1);
    document.getElementById("Time_int").innerHTML= time+" Sec / 30 Sec";
    if(document.getElementById("Time_int").innerHTML == "31 Sec / 30 Sec"){
        clearInterval(stoptime);
        alert("time out");
        window.location.replace("../Quiz-game/index.html");   
    }

}


function op(){
app={
    questions:[
        {
            q:'1. HTML stands for?',
        options:[
            'Hyper Text Markup Language','High Text Markup Language','Hyper Tabular Markup Language','None of these'
        ],
        ans:1
    },
    {
            q:'2. Why so JavaScript and Java have similar name?',
        options:[
            'JavaScript is a stripped-down version of Java','JavaScript\'s syntax is loosely based on Java\'s','They both originated on the island of Java','None of the above'
        ],
        ans:2
    },
    {
            q:'3. When a user views a page containing a JavaScript program, which machine actually executes the script?',
        options:[
            'The User\'s machine running a Web browser',' The Web server',' A central machine deep within Netscape\'s corporate offices','None of the above'
        ],
        ans:1
    },
    {
           q:'4. ______ JavaScript is also called client-side JavaScript.',
       options:[
         'Microsoft','Navigator','LiveWire','Native'
        ],
        ans:2
    },
    {
            q:'5. __________ JavaScript is also called server-side JavaScript.',
        options:[
            'Microsoft','Navigator','LiveWire','Native'
        ],
        ans:3
        },
        {
            q:'6. What are variables used for in JavaScript Programs?',
        options:[
        'Storing numbers, dates, or other values','Varying randomly',' Causing high-school algebra flashbacks',' None of the above'
        ],
        ans:1
        },
        {
            q:'7.  _____ JavaScript statements embedded in an HTML page can respond to user events ',
        options:[
        'Native','Local','Server-side',' Client-side'
        ],
        ans:4
        },
        {
            q:'8. Which of the following can\'t be done with client-side JavaScript?',
        options:[
        ' Validating a form','Sending a form\'s contents by email',' Storing the form\'s contents to a database file on the server',' None of the above'
        ],
        ans:3
        },
        {
            q:'9. Which of the following are capabilities of functions in JavaScript?',
        options:[
        'Return a value','Accept parameters and Return a value',' Accept parameters','None of the above'
        ],
        ans:3
        },
        {
            q:'10. Which of the following is not a valid JavaScript variable name?',
        options:[
        '2names',' _first_and_last_names','FirstAndLast','None of the above'
        ],
        ans:1
        },
    ],
        

}
}
function start(index){
    var obj = new op();
    var a = app.questions.length;

    for(i=0;i<=a;i++){
        if( i == parseInt(ques_no.innerHTML)){
            document.getElementById("submit").style.display ="none";
            console.log(i);
        }
        else
        {
            document.getElementById("submit").style.display ="block";
        }

        
    }

    question.innerHTML = app.questions[index].q;
    op1.innerHTML = app.questions[index].options[0];
    op2.innerHTML = app.questions[index].options[1];
    op3.innerHTML = app.questions[index].options[2];
    op4.innerHTML = app.questions[index].options[3];

}

function button(a){
    var obj = new op();
    var score_board = document.getElementById("socre_no");
    var no =ques_no.innerHTML= parseInt(ques_no.innerHTML);   
    var b = no-1;
    var id = a.id.split('');
    var ch = id[2];

    if( app.questions[b].ans == ch ){
        a.innerHTML = "Correct";
        a.className = "Correct";
        a.style.background="green";
        document.getElementById("socre_no").innerHTML = parseInt(document.getElementById("socre_no").innerHTML)+1;
        // document.getElementById("socre_no") = ;
        console.log(app.questions[index]);

    }
    else
    {
        a.innerHTML = "Worng";
        a.style.background="red";
        console.log("FALSE");
        a.className = "Wrong";
         
    }
    for(i=0;i<ul.children.length;i++){
            ul.children[i].style.pointerEvents = "none";
        }
}

function next(){
    var a =ques_no.innerHTML= parseInt(ques_no.innerHTML)+1;   
    
    var b = a-1;
    start(b);
    
    for(i=0;i<ul.children.length;i++){
        ul.children[i].style.pointerEvents = "auto";
        ul.children[i].style.background ="aquamarine";
    }
    
}
