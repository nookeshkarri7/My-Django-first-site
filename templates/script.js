let valuesEl=document.getElementById("values");
let answerEl=document.getElementById("answer");

//Arithmetic operations

//ROW --1
let clearBtnEl=document.getElementById("clearBtn");
let percentBtnEl=document.getElementById("percentBtn");
let rootBtnEl=document.getElementById("rootBtn");
let divideBtnEl=document.getElementById("divideBtn")

//ROW --2
let Btn7El=document.getElementById("Btn7");
let Btn8El=document.getElementById("Btn8")
let Btn9El=document.getElementById("Btn9");
let mulBtnEl=document.getElementById("mulBtn")

//ROW --3
let Btn4El=document.getElementById("Btn4");
let Btn5El=document.getElementById("Btn5")
let Btn6El=document.getElementById("Btn6");
let minusBtnEl=document.getElementById("minusBtn")

//ROW --4
let Btn1El=document.getElementById("Btn1");
let Btn2El=document.getElementById("Btn2")
let Btn3El=document.getElementById("Btn3");
let plusBtnEl=document.getElementById("plusBtn")

//ROW --5
let Btn00El=document.getElementById("Btn00");
let Btn0El=document.getElementById("Btn0")
let BtndotEl=document.getElementById("Btndot");
let equalBtnEl=document.getElementById("equalBtn")


let operations={
    first:"",
    operator:"",
    second:"" 
}
let givenOperations=""
let enteredValues=""

let slicedString={
    string:""
}
givenOperations=slicedString.string

clearBtnEl.onclick=function(){
    valuesEl.textContent=""
    answerEl.textContent="Answer : 0"
    operations.first=""
    givenOperations=""
    enteredValues=""
}

Btn7El.onclick=function(){
    enteredValues+="7"
    givenOperations+="7"
    valuesEl.textContent=givenOperations
}
Btn8El.onclick=function(){
    enteredValues+="8"
    givenOperations+="8"
    valuesEl.textContent=givenOperations
}
Btn9El.onclick=function(){
    enteredValues+="9"
    givenOperations+="9"
    valuesEl.textContent=givenOperations
}
Btn4El.onclick=function(){
    enteredValues+="4"
    givenOperations+="4"
    valuesEl.textContent=givenOperations
}

Btn5El.onclick=function(){
    enteredValues+="5"
    givenOperations+="5"
    valuesEl.textContent=givenOperations
}
Btn6El.onclick=function(){
    enteredValues+="6"
    givenOperations+="6"
    valuesEl.textContent=givenOperations
}
Btn1El.onclick=function(){
    enteredValues+="1"
    givenOperations+="1"
    valuesEl.textContent=givenOperations

}
Btn2El.onclick=function(){
    enteredValues+="2"
    givenOperations+="2"
    valuesEl.textContent=givenOperations

}

Btn3El.onclick=function(){
    enteredValues+="3"
    givenOperations+="3"
    valuesEl.textContent=givenOperations

}
Btn00El.onclick=function(){
    enteredValues+="00"
    givenOperations+="00"
    valuesEl.textContent=givenOperations

}
Btn0El.onclick=function(){
    enteredValues+="0"
    givenOperations+="0"
    valuesEl.textContent=givenOperations

}
BtndotEl.onclick=function(){
    enteredValues+="."
    givenOperations+="."
    valuesEl.textContent=givenOperations

}
//percent operation
percentBtnEl.onclick=function(){
    if (enteredValues!=""){
        operations.first=enteredValues
        enteredValues=""
        operations.operator="%"
        givenOperations+="%"
        valuesEl.textContent=givenOperations
    }
    else{
        answerEl.textContent="Please enter number first"
    }
}




//division operation
divideBtnEl.onclick=function(){
    if (enteredValues!=""){
        operations.first=enteredValues
        enteredValues=""
        operations.operator="divide"
        givenOperations+="/"
        valuesEl.textContent=givenOperations
    }
    else{
        answerEl.textContent="Please enter number first"
    }
}

//Multiplication operation
mulBtnEl.onclick=function(){
    if (enteredValues!=""){
        operations.first=enteredValues
        enteredValues=""
        operations.operator="mul"
        givenOperations+="*"
        valuesEl.textContent=givenOperations
    }
    else{
        answerEl.textContent="Please enter number first"
    }
}

//Substraction operation
minusBtnEl.onclick=function(){
    if (enteredValues!=""){
        operations.first=enteredValues
        enteredValues=""
        operations.operator="minus"
        givenOperations+="-"
        valuesEl.textContent=givenOperations
    }
    else{
        answerEl.textContent="Please enter number first"
    }
}

//Addition operation
plusBtnEl.onclick=function(){
    if (enteredValues!=""){
        operations.first=enteredValues
        enteredValues=""
        operations.operator="plus"
        givenOperations+="+"
        valuesEl.textContent=givenOperations
    }
    else{
        answerEl.textContent="Please enter number first"
    }
}


//Square Root operation
rootBtnEl.onclick=function(){
    if (enteredValues!=""){
        operations.first=enteredValues
        enteredValues=""
        operations.operator="root"
        givenOperations+="**(0.5)"
        valuesEl.textContent=givenOperations
    }
    else{
        answerEl.textContent="Please enter number first"
    }
}

equalBtnEl.onclick=function(){
    operations.second=enteredValues
    enteredValues=""
    if (operations.operator=="%"){
        answerEl.textContent=`${parseInt(operations.first)*parseInt(operations.second)/100}`
    }
    else if (operations.operator=="divide"){
        answerEl.textContent=`${parseInt(operations.first)/parseInt(operations.second)}`
    }
    else if (operations.operator=="mul"){
        answerEl.textContent=`${parseInt(operations.first)*parseInt(operations.second)}`
    }
    else if (operations.operator=="minus"){
        answerEl.textContent=`${parseInt(operations.first)-parseInt(operations.second)}`
    }
    else if (operations.operator=="plus"){
            answerEl.textContent=`${parseInt(operations.first)+parseInt(operations.second)}`
    }
    else if (operations.operator=="root"){
        answerEl.textContent=`${parseInt(operations.first)**0.5}`
    }
        
    givenOperations=""
    
    
}





