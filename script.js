document.getElementById('sheetForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.innerText = "SENDING...";
    submitBtn.disabled = true;

    // PASTE YOUR NEW GOOGLE WEB APP URL HERE
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwzEmS8_d75-uYwkIRBUCY0Kx0SkU0YowNYQguxBpkAVnfQh5MdY1mytrGhhkJ4ODSr/exec'; 

    fetch(scriptURL, { 
        method: 'POST', 
        body: new FormData(this)
    })
    .then(response => {
        submitBtn.innerText = "SUBMITTED!";
        document.getElementById('sheetForm').reset();
    })
    .catch(error => {
        submitBtn.innerText = "ERROR. TRY AGAIN.";
        submitBtn.disabled = false;
    });
});