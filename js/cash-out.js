document.getElementById('cash-out-btn').addEventListener('click', function (event) {
   event.preventDefault();
   const presentBalance = document.getElementById('present-balance').innerText;
   const cashOutAmount = document.getElementById('input-cash-out').value;
   const pinNumber = document.getElementById('cas-out-pin').value;
   if (pinNumber === '1234') {
      const Balance = parseFloat(presentBalance);
      const amount = parseFloat(cashOutAmount);
      const newBalance = Balance - amount;
      document.getElementById('present-balance').innerText = newBalance;
      document.getElementById('input-cash-out').value = ''
      document.getElementById('cas-out-pin').value = ''
   }
   else {
      alert('Failed to cash out money, please ty again')
      
   }
})