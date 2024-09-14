function navigateToPlan() {
    window.location.href = "plan.html";
}

function navigateToInfo() {
    window.location.href = "multistepform.html";
}
function navigateToAddons() {
    window.location.href = "addons.html";
}
function navigateToSummary() {
    window.location.href = "summary.html";
}
function navigateToThankyou() {
    window.location.href = "thankyou.html";
}




document.getElementById('billing-atoggle').addEventListener('change', function () {
    if (this.checked) {
        console.log('Yearly billing selected');
        // Change to yearly pricing
    } else {
        console.log('Monthly billing selected');
        // Change to monthly pricing
    }
});


  

    function toggleBilling() {
        const toggle = document.getElementById('billing-atoggle');
        document.body.classList.add('fade-out');

        setTimeout(function() {
            if (toggle.checked) {
                window.location.href = "plan-yearly.html";
            } else {
                window.location.href = "plan.html";
            }
        }, 500);  // Time matches the CSS transition duration
    }
 
   
    
    function toggleBilling2() {
        const toggle = document.getElementById('billing-atoggle');
        document.body.classList.add('fade-out');

        setTimeout(function() {
            if (toggle.checked) {
                window.location.href = "plan.html";
            } else {
                window.location.href = "plan-yearly.html";
            }
        }, 500);  // Time matches the CSS transition duration
    }






