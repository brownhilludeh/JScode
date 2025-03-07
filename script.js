document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("submitBtn").addEventListener("click", processOrder);
    document.getElementById("resetBtn").addEventListener("click", resetForm);

    // const orderForm = document.getElementById("orderForm");
    // const submitBtn = document.getElementById("submitBtn");
    // const resetBtn = document.getElementById("resetBtn");


    function processOrder() {
        let firstName = document.getElementById("firstName").value.trim() || "N/A";
        let lastName = document.getElementById("lastName").value.trim() || "N/A";
        let email = document.getElementById("email").value.trim() || "N/A";
        let package = document.getElementById("package").value || "N/A";
        let dayTime = document.getElementById("dayTime").value.toLowerCase() || "N/A";
        let comments = document.getElementById("comments").value || "N/A";



        // let addOns = 2;

        // let guests = document.querySelector('input[name="guests"]:checked').value || "N/A";
        // let payment = document.querySelector('input[name="payment"]:checked').value || "N/A";

        // Guest and payment radio buttons
        // let guests = document.querySelector('input[name="guests"]:checked').value || "N/A";
        // let payment = document.querySelector('input[name="payment"]:checked').value || "N/A";

        //     // Checkbox Handling (Add-ons)
        // const addOns = document.querySelectorAll('input[name="addOns"]:checked');
        // let addOnsList = [];
        // addOns.forEach(addOn => addOnsList.push(document.getElementById(addOn.id).nextElementSibling.textContent));
        // const addOnsOutput = addOnsList.length > 0 ? addOnsList.join(', ') : "N/A";

        // // Radio Button Handling (Guests)
        // let guests = document.querySelector('input[name="guests"]:checked');
        // guests = guests ? guests.nextElementSibling.textContent : "N/A";

        // // Radio Button Handling (Payment)
        // let payment = document.querySelector('input[name="payment"]:checked');
        // payment = payment ? payment.nextElementSibling.textContent : "N/A";

        function calculate(package) {
            let basePrice = 0;
            let packageToLower = package.toLowerCase();

            switch (packageToLower) {
                case "basic":
                    basePrice = 10;
                    break;
                case "premium":
                    basePrice = 15;
                    break;
                case "deluxe":
                    basePrice = 20;
                    break;
                case "vip":
                    basePrice = 30;
                    break;
                case "exclusive":
                    basePrice = 50;
                    break;
                default:
                    basePrice = 0;
                    break;
            }

            return basePrice;
        }

        const total = calculate(package);

        // total = bas;

        const outputDiv = document.getElementById("outputDiv");
        outputDiv.innerHTML = `
                <p><strong>First Name:</strong> ${firstName}</p>
                <p><strong>Last Name:</strong> ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Package:</strong> ${package}</p>
                <p><strong>Birthday Time:</strong> ${dayTime}</p>
                <p><strong>Comments:</strong> ${comments}</p>
                <p><strong>Total:</strong> $${total}</p>
                `;
        outputDiv.style.display = "block";
    }

    function resetForm() {
        document.getElementById("orderForm").reset();
        document.getElementById("outputDiv").style.display = "none";
    }

    // <p><strong>Add-ons:</strong> ${addOns}</p>
    // <p><strong>Estimated Guests:</strong> ${guests}</p>
    // <p><strong>Payment Method:</strong> ${payment}</p>
});