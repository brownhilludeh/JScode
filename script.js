document.addEventListener("DOMContentLoaded", function () {
    const orderForm = document.getElementById("orderForm");
    const submitBtn = document.getElementById("submitBtn");
    const resetBtn = document.getElementById("resetBtn");

    document.getElementById("submitBtn").addEventListener("click", processOrder);

    function processOrder() {
        let firstName = document.getElementById("firstName").value.trim() || "N/A";
        let lastName = document.getElementById("lastName").value.trim() || "N/A";
        let email = document.getElementById("email").value.trim() || "N/A";
        let package = document.getElementById("package").value || "N/A";
        let dayTime = document.getElementById("dayTime").value || "N/A";
        let comments = document.getElementById("comments").value || "N/A";

        function calculate(packageType) {
            
        }
    }


    const outputDiv = document.getElementById("outputDiv");
    outputDiv.innerHTML = `
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Package:</strong> ${package}</p>
            <p><strong>Birthday Time:</strong> ${dayTime}</p>
            <p><strong>Comments:</strong> ${comments}</p>
            `;
    outputDiv.style.display = "block";


    // 
    //         
    //         <p><strong>Add-ons:</strong> ${addOns}</p>
    //         <p><strong>Estimated Guests:</strong> ${guests}</p>
    //         <p><strong>Payment Method:</strong> ${payment}</p>
    //         
});