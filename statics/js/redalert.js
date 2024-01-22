document.getElementById("declare-red-alert").addEventListener("click", function() {
    // Send signal to the server to trigger the alert for the specific user
    fetch("/trigger_red_alert/{{ user_id }}") // Replace with your actual URL and user ID
      .then(response => response.json())
      .then(data => {
        // Handle any server-side response, if needed
      });
  });
  