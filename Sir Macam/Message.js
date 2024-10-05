import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// Firebase app configuration
const appSettings = {
    databaseURL: "https://teacherabyte-default-rtdb.asia-southeast1.firebasedatabase.app"
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const cartInDB = ref(database, "Sir Macam");

// Reference to the display div in your HTML
const displayDiv = document.getElementById("displayData");


    onValue(cartInDB, function(snapshot) {
        const data = snapshot.val(); // Get the data

        if (data) {
            // Clear the display div first
            displayDiv.innerHTML = "";

            // Get all the keys (unique identifiers) for each entry
            const keys = Object.keys(data);

            // Loop through the keys to get specific values (username, message, teacher)
            keys.forEach((key) => {
                const entry = data[key]; // Get the individual entry
                const username = entry.username; // Access the username
                const message = entry.message;   // Access the messag

                // Display the data in the div
                displayDiv.innerHTML += `
                    <div class='HeadDiv'>
                        <p class="userName">${username}</p>
                        <p class="message"> "${message}"</p>
                        <hr width="300px"/><br/>
                    </div>
                `;
            });
        } else {
            displayDiv.innerHTML = "<p>No data available.</p>";
        }
    });

