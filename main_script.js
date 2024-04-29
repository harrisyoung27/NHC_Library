function goBack() {
    window.history.back();
  }

  function checkCredentials() {
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;
            var secretDiv = document.getElementById("secretDiv");

            // Check if the email and password are correct for either account
            if ((email === "user@example.com" && password === "Admin1234") ||
                (email === "anotheruser@example.com" && password === "AnotherPassword") ||
                (email === "allysajoymelanez" && password === "calliemiller") ||
                (email === "136799120242" && password === "idomypromises27")) {
                alert("Authentication successful!");
                location.href="homepage.html"
            } else {
                alert("Incorrect email or password. Try again.");
            }
        }

        document.getElementById("password").addEventListener("keyup", function(event) {
            if (event.keyCode === 13) {
                checkCredentials();
            }
        });
