document.getElementById('deposite-button').addEventListener('click', function(){
    // after click get the input from the input field
    const depositeInputField = document.getElementById('deposite-input');
    const depositeInputText = depositeInputField.value
    
    if(parseFloat(depositeInputText) <= 0){
        return alert('please provide more than zero')
    }

    // get the previous deposite and ubdate deposite total 
    const previousDipositeTotal = document.getElementById('deposite-total')
    const depositeText = previousDipositeTotal.innerText


    const totalDeposit = parseFloat(depositeInputText)+ parseFloat(depositeText)
    previousDipositeTotal.innerText = totalDeposit;

    // balance ubdate
    const previousBalance = document.getElementById('balance-total');
    const previousBalanceText = previousBalance.innerText;
    const newBalance = parseFloat(previousBalanceText) + parseFloat(depositeInputText);
    previousBalance.innerText = newBalance

    // clear the input value 
    depositeInputField.value = '';
})




// Enter Press the button will be work 


document.getElementById("deposite-input").addEventListener('keypress', function(event){
    if(event.key ==="Enter"){
        event.preventDefault();
        document.getElementById('deposite-button').click();
    }
})



document.getElementById('widthrow-button').addEventListener('click', function(){
   const withdrawInputField = document.getElementById('widthrow-input');
   const withdrawInputText = withdrawInputField.value;
   const widthrowInputNumber = parseFloat(withdrawInputText)
   if(widthrowInputNumber <= 0){
    return alert('please provide more than zero')
   }



   const previousWithdrawTotal = document.getElementById('widthrow-total');
   const previousWithdrawTotalText = previousWithdrawTotal.innerText;
   const previousWithdrawTotalNumber = parseFloat(previousWithdrawTotalText);

   const newWithdrawTotal =  widthrowInputNumber + previousWithdrawTotalNumber;
   previousWithdrawTotal.innerText = newWithdrawTotal

   const previousBalance = document.getElementById('balance-total') ;
   const previousBalanceText = previousBalance.innerText;
   const previousBalanceNumber = parseFloat(previousBalanceText)
   const newBalance = previousBalanceNumber -  widthrowInputNumber;
   previousBalance.innerText = newBalance


   withdrawInputField.value = '';
})

document.getElementById('widthrow-input').addEventListener('keypress', function(event){
if(event.key ==="Enter"){
    event.preventDefault();
    document.getElementById('widthrow-button').click();
}
})