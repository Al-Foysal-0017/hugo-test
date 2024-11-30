document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("myForm");
    const submitBtn = document.getElementById("submitBtn");
    const output = document.getElementById("output");

    submitBtn.addEventListener("click", () => {
        const formData = {};
        
        // Get all input fields in the form
        const inputs = form.querySelectorAll(".custom-input-field");
        
        // Collect input values
        inputs.forEach(input => {
            formData[input.id] = input.value;
        });

        // Print object to console
        console.log(formData);

        // Display object in the browser
        output.innerHTML = `<pre>${JSON.stringify(formData, null, 2)}</pre>`;
    });
});


// fetch('/submit', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(formData),
// })
// .then(response => response.json())
// .then(data => console.log('Success:', data))
// .catch(error => console.error('Error:', error));
