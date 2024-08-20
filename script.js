document.getElementById('nameForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nameInput = document.getElementById('nameInput').value;

    // Check if the browser supports notifications
    if (!("Notification" in window)) {
        alert("This browser does not support desktop notifications.");
        return;
    }

    // Request permission to show notifications
    if (Notification.permission === "granted") {
        showNotification(nameInput);
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                showNotification(nameInput);
            }
        });
    }
});

function showNotification(name) {
    const options = {
        body: 'This is your notification message!',
        icon: 'https://via.placeholder.com/150' // You can use a custom icon here
    };
    new Notification(`Hello, ${name}!`, options);
}
