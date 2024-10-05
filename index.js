import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
    databaseURL: "https://teacherabyte-default-rtdb.asia-southeast1.firebasedatabase.app"
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
// Reference to the "cart" in your Firebase database




// Function to handle submission
// ... other code ...

// Function to handle submission
const handleSubmit = () => {
    // Get the values from the input fields
    const username = document.getElementById('username').value;
    const message = document.getElementById('message').value;
    const selectedTeacher = document.getElementById('selectedTeacher').value;
    if(username.trim() === "" || message.trim() === "") {
        alert("Please fill in both fields."); 
        return;
    }
    // Log the values to console
    console.log("Submitted:", { username, message, selectedTeacher });
    
    // Create a reference to the database location based on the selected teacher
    const cartInDB = ref(database, selectedTeacher);

    // Create an object to push to Firebase
    const dataToPush = {
        username: username,
        message: message,
        teacher: selectedTeacher,
    };

    

    // Push the data to Firebase (corrected line)
    push(cartInDB, dataToPush) // Use the imported push function
        .then(() => {
            console.log("Data added to database");
            // Clear the input fields after submission
            document.getElementById('username').value = '';
            document.getElementById('message').value = '';
            document.getElementById('selectedTeacher').value = 'Maam Angel'; // Reset to default
            alert("Added"); 
        
        })
        .catch((error) => {
            alert("Error adding data to database:", error);
        });
};

// Attach event listener to the submit button
document.getElementById('submitButton').addEventListener('click', handleSubmit);


// Attach event listener to the submit button
document.getElementById('submitButton').addEventListener('click', handleSubmit);
