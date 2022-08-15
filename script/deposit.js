// step-1: add event handler for the deposit button
document.getElementById('deposit-button').addEventListener('click', function(event){
    
    //step-2 : get the deposite amount value from the deposite input field
    const depositField = document.getElementById('deposit-input-field');
    const newDepositAmountByUser = depositField.value;

    //clearing the deposit field value entered by user
    depositField.value = '';

    if(isNaN(parseFloat(newDepositAmountByUser))){

        alert('Please Enter a Valid Deposit Amount');
        return;

    }

    if(parseFloat(newDepositAmountByUser) <= 0){

        alert("You Cant't Deposite $0  or Less Than $0 ....");
        return;

    }

    //step-3: get the current deposit amount
    const depositTotalElement =  document.getElementById('deposit-amount');
    const previousDepositeMoney = depositTotalElement.innerText;

     const currentDepositTotal = parseFloat(previousDepositeMoney) + parseFloat(newDepositAmountByUser);
     // jehetu previousDepositeMoney and newDepositAmountByUser er input value ta string taai ami string theke number e convert kore nilam uaing parseFloat
     depositTotalElement.innerText =  currentDepositTotal;

    //Code For Total Balace Update
    const totalBalance = document.getElementById('total-amount');
    const getTotalAmountValue = totalBalance.innerText;

    const updatedTotalBalance = parseFloat(getTotalAmountValue) + parseFloat(newDepositAmountByUser);
    totalBalance.innerText = updatedTotalBalance;

    

})