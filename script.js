// Selecting elements to output data
const result = document.getElementsByClassName("quote-container")[0];
const quoteButton = document.getElementsByClassName("btn")[0];

// Adding an event listener to the button
quoteButton.addEventListener("click", getData);
result.innerHTML = "Quotes for the Soul";  //default text for any DOM event

// main function to fetch data and subsequently publish it on the screen
async function getData(){
    try {
        const result1 = await fetch("https://api.quotable.io/random");
        const jsonResult = await result1.json();
        ;
        //publishing the fetched data to the appropriate tags
        result.innerHTML = `
        <p>${jsonResult.content}</p>
        <p><sub>-${jsonResult.author}</sub></p>
        `;
        ;  
    } catch (error) {
        console.log("Error in loading data...");
    }
};