document.getElementById('add-money-btn')
    .addEventListener('click', function(event){
        event.preventDefault();

        const addAmount = document.getElementById('input-add-amount').value;
        const pinNumber = document.getElementById('pin-number').value;
        const presentBalance = document.getElementById('present-balance').innerText;
        console.log(addAmount, pinNumber, presentBalance)
        if(pinNumber === '1234'){
           const addAmountNumber = parseFloat(addAmount)
           const balanceNumber = parseFloat(presentBalance)
           const total = addAmountNumber + balanceNumber;
           document.getElementById('present-balance').innerText = total;
           document.getElementById('input-add-amount').value = '';
           document.getElementById('pin-number').value = '';
        }
        else{
            alert('Failed to add money, please ty again')
        }
    })