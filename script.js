document.addEventListener("DOMContentLoaded", function () {

    //prevent form from submitting
    document.getElementById("orderForm").addEventListener("submit", function (event) {
        event.preventDefault();
    });

    /**
     * Handles the submission of the order form, extracts the data from the form elements and
     * displays the information in the outputDiv element.
     * @function
     * 
     * @returns {void}
     * 
     * @author Brownhill Udeh
     * @date March 4, 2025
     * @version 3
     * 
     */
    function processOrder() {
        let firstName = document.getElementById("firstName").value.trim() || "N/A";
        let lastName = document.getElementById("lastName").value.trim() || "N/A";
        let email = document.getElementById("email").value.trim() || "N/A";
        let package = document.getElementById("package").value || "N/A";
        let dayTime = document.getElementById("dayTime").value.toLowerCase() || "N/A";
        let comments = document.getElementById("comments").value || "N/A";

        // Radio Button Handling (Guests)
        let guests = document.querySelector('input[name="guests"]:checked');
        guests = guests ? guests.value : "N/A";

        // Radio Button Handling (Payment)
        let payment = document.querySelector('input[name="payment"]:checked');
        payment = payment ? payment.value : "N/A";

        // Select all checked checkboxes with the name "addOns"
        const addOns = document.querySelectorAll('input[name="addOns"]:checked');

        // Get the number of checked checkboxes (add-ons)
        const addonCount = addOns.length;

        // Define the cost per add-on
        const costPerAddon = 10.75;

        // Calculate the total add-on cost
        let totalAddonCost = addonCount * costPerAddon;


        /**
         * Calculates the base price for a given birthday package.
         *
         * @param {string} package - The name of the package to calculate the base price for.
         * @returns {number} The base price of the specified package.
         *
         * @example
         * // returns 15
         * calculate("Premium");
         *
         * @author Brownhill Udeh
         * @date March 4, 2025
         * @version 3
         */
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

        const total = (calculate(package) + totalAddonCost).toFixed(2);

        //output
        const outputDiv = document.getElementById("outputDiv");
        outputDiv.innerHTML = `
                <p><strong>First Name:</strong> ${firstName}</p>
                <p><strong>Last Name:</strong> ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Package:</strong> ${package}</p>
                <p><strong>Birthday Time:</strong> ${dayTime}</p>
                <p><strong>Add-ons:</strong> ${addonCount}</p>
                <p><strong>Estimated Guests:</strong> ${guests}</p>
                <p><strong>Payment Method:</strong> ${payment}</p>
                <p><strong>Comments:</strong> ${comments}</p>
                <p><strong>Total:</strong> $${total}</p>
                `;
        outputDiv.style.display = "block";
    }

    /**
    * Resets the form by calling the reset() method and hiding the output div.
    * 
    * @author Brownhill Udeh
    * @date March 4, 2025
    * @version 3
     */
    function resetForm() {
        document.getElementById("orderForm").reset();
        document.getElementById("outputDiv").style.display = "none";
    }

    document.getElementById("submitBtn").addEventListener("click", processOrder);
    document.getElementById("resetBtn").addEventListener("click", resetForm);

});