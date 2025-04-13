document.addEventListener('DOMContentLoaded', function() {
        const timeDisplay = document.getElementById('current-time');

            function updateTime() {
                        fetch('https://worldtimeapi.org/api/ip') // A public API to get current time based on IP
                                    .then(response => response.json())
                                                .then(data => {
                                                                    const datetime = new Date(data.datetime);
                                                                                    const hours = datetime.getHours().toString().padStart(2, '0');
                                                                                                    const minutes = datetime.getMinutes().toString().padStart(2, '0');
                                                                                                                    const seconds = datetime.getSeconds().toString().padStart(2, '0');
                                                                                                                                    timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
                                                })
                                                            .catch(error => {
                                                                                console.error('Error fetching time:', error);
                                                                                                timeDisplay.textContent = 'Failed to load time.';
                                                            });
            }

                // Update the time initially and then every second
                    updateTime();
                        setInterval(updateTime, 1000);
});