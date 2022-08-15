document.getElementById('withdraw-button').addEventListener('click', function () {

    // step-1: code for withdraw input field
    const withdrawInputField = document.getElementById('withdraw-input-field');
    const getValueOfWithdrawInputField = withdrawInputField.value;

    //step-7 remove the withdraw amount form the withdraw input field
    withdrawInputField.value = '';

    if(isNaN(parseFloat(getValueOfWithdrawInputField))){

        alert('Please Enter a Valid Withdraw Amount');
        return;

    }

    if(parseFloat(getValueOfWithdrawInputField) <= 0){

        alert("You Cant't Withdraw $0 or Less Than $0 ....");
        return;

    }
    
    //step-2 code for withdraw div
    const withdrawDiv = document.getElementById('withdraw-amount');
    const getWithdrawDivValue = withdrawDiv.innerText;

    

    //step-5 get the total balance div so that we can deduct the withdraw balance form total balance
    const totalBalanceDiv = document.getElementById('total-amount');
    const getTotalBalanceDivValue = totalBalanceDiv.innerText;

    if(parseFloat(getValueOfWithdrawInputField) > parseFloat(getTotalBalanceDivValue)){

        alert("You Can't Withdraw " + "$" + parseFloat(getValueOfWithdrawInputField) + " Because You Have " + "$" + parseFloat(getTotalBalanceDivValue) + " in Our Bank");
        return;

    }

    //step-3 show the withdraw balance on the withdraw div
     withdrawDiv.innerText = getValueOfWithdrawInputField;

    //step 4 show the total withdraw amount on the withdraw amount div
     const totalWithdrawBalance = parseFloat(getValueOfWithdrawInputField) + parseFloat(getWithdrawDivValue);
     withdrawDiv.innerText = totalWithdrawBalance;

    //step-6 deducting the withdraw amount from main balance..
    const totalBalance = parseFloat(getTotalBalanceDivValue) - parseFloat(getValueOfWithdrawInputField);
    totalBalanceDiv.innerText = totalBalance.toFixed(2);

    





})