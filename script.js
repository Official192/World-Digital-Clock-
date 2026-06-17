const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", 
"November", "December"];

      setInterval(() => {
            const aewr = document.getElementById("ea");

            const rawSeconds = new Date().getSeconds();
            const rawHour = new Date().getHours();
            const rawMinutes = new Date().getMinutes();

            const day = new Date().getUTCDate();
            const monthIndex = new Date().getUTCMonth(); // 0-11 (Do NOT add +1 for names)
            const year = new Date().getUTCFullYear();

            const monthName = months[monthIndex];

            // Function to add leading zero (9 -> "09")
            const pad = (num) => num.toString().padStart(2, '0');

            // Use classes to style Date and Time separately
            aewr.innerHTML = `
                <div class="date-part">
                    ${monthName} ${day}, ${year}
                </div>
                <div class="time-part">
                    ${pad(rawHour)}:${pad(rawMinutes)}<span style="font-size:0.5em">:${pad(rawSeconds)}</span>
                </div>
            `;
        }, 1000);