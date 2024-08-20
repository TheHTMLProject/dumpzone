document.getElementById('nameForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nameInput = document.getElementById('nameInput').value;
    const notificationHeader = document.getElementById('notificationHeader');
    const notification = document.getElementById('notification');
    
    notificationHeader.textContent = `Hello, ${nameInput}!`;
    notification.classList.remove('hidden');
});
