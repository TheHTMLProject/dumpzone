document.getElementById('nameForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nameInput = document.getElementById('nameInput').value;

    // Check if the browser supports notifications
    if (!("Notification" in window)) {
        alert("This browser does not support desktop notifications.");
        return;
    }

    // Log current notification permission status
    console.log("Notification permission status:", Notification.permission);

    // Request permission to show notifications
    if (Notification.permission === "granted") {
        showNotification(nameInput);
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
            console.log("User's decision on notification permission:", permission);
            if (permission === "granted") {
                showNotification(nameInput);
            } else {
                alert("Notification permission was denied.");
            }
        }).catch(error => {
            console.error("Error requesting notification permission:", error);
        });
    }
});

function showNotification(message) {
    const options = {
        body: message, // The content of the text box will be shown as the message
        icon: 'https://via.placeholder.com/150', // You can use a custom icon here
        badge: 'https://via.placeholder.com/100', // Smaller icon for notification badge on Chrome OS
        requireInteraction: false // Automatically closes the notification after a while
    };

    try {
        new Notification('Notification', options);
        console.log("Notification sent successfully.");
    } catch (error) {
        console.error("Error displaying notification:", error);
    }
}
