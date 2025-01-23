function updateDateTime() {
    const now = new Date();
    const datetimeElement = document.getElementById('datetime');

    // Format date and time
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = now.toLocaleDateString(undefined, options);

    // Time in 24-hour format
    const time = now.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', hourCycle: 'h23' });

    datetimeElement.textContent = `${date} | ${time}`;
}

// Update every second
setInterval(updateDateTime, 1000);
updateDateTime();

