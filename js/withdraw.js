// set the function for inputvalue multi use;
function getinputfieldvalue(inputId){
    const inputfield=document.getElementById(inputId);
    const inputfieldvalueString=inputfield.value ;
    const inputfieldvalue=parseFloat(inputfieldvalueString);
    inputfield.value='';
    return inputfieldvalue;
}

// set the function to use inner value use

function innerelement(innerelements){
    const innervavalue=document.getElementById(innerelements);
    const innervalueamountstring=innervavalue.innerText
    const innervalueamount=parseFloat(innervalueamountstring);
    return innervalueamount

}

function setvalue(sohel,rana){
    const textelement=document.getElementById(sohel);
    textelement.innerText=rana
}



// final to click station
document.getElementById('btn-deposit').addEventListener('click',function(){
 const newdeposit=getinputfieldvalue('input-deposit');
 const previousdeposit= innerelement('total-deposit');

 const totaldepositAmount=newdeposit+previousdeposit;
 setvalue('total-deposit',totaldepositAmount);

 const newbalance=innerelement('total-balance');
  const newtotalbalance=totaldepositAmount+newbalance;

 
  setvalue('total-balance',newtotalbalance)

})

document.getElementById('btn-withdraw').addEventListener('click',function(){
    const newwithdraw=getinputfieldvalue('filed-withdraw');
    const previouswithdraw=innerelement('withdraw-amount');
    const newbalanceamount=innerelement('total-balance')
    
    if(newwithdraw>newbalanceamount){
        alert('sorry')
        return
    }
    const totalwithdraw=newwithdraw+previouswithdraw;
    setvalue('withdraw-amount',totalwithdraw);

    
   
    const newtotalbalance=newbalanceamount-newwithdraw;
    setvalue('total-balance',newtotalbalance);

})