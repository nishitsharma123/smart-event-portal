// ================================
// Load Events from Backend API
// ================================

async function loadEvents() {

    try {

        const response = await fetch("/api/events");

        const events = await response.json();

        const eventContainer = document.getElementById("event-container");

        eventContainer.innerHTML = "";

        events.forEach(event => {

            eventContainer.innerHTML += createEventCard(event);

        });

    }

    catch (error) {

        console.error(error);

        document.getElementById("event-container").innerHTML = `

            <h2 style="text-align:center;color:red;">
                Failed to load events.
            </h2>

        `;

    }

}



// ===================================
// Create Event Card
// ===================================

function createEventCard(event) {

    let badge = "tech";

    if (event.name.toLowerCase().includes("music"))
        badge = "music";

    else if (event.name.toLowerCase().includes("workshop"))
        badge = "workshop";

    else if (event.name.toLowerCase().includes("business"))
        badge = "business";

    return `

    <div class="event-card">

        <img src="https://picsum.photos/500/300?random=${event.id}" alt="Event">

        <div class="event-content">

            <span class="badge ${badge}">
                ${event.location}
            </span>

            <h3>${event.name}</h3>

            <p>
                📅 <strong>Date:</strong> ${event.date}
            </p>

            <p>
                📍 <strong>Location:</strong> ${event.location}
            </p>

            <p class="price">
                ₹${event.price}
            </p>

            <button
                class="book-btn"
                onclick="bookEvent('${event.name}')">

                Book Now

            </button>

        </div>

    </div>

    `;

}



// ===================================
// Book Event
// ===================================

function bookEvent(eventName){

    alert(

        "Booking Confirmed!\n\n" +

        "Event : " + eventName +

        "\n\nThank you for choosing Smart Event Portal."

    );

}



// ===================================
// Scroll Button
// ===================================

function scrollToEvents(){

    document.getElementById("events").scrollIntoView({

        behavior:"smooth"

    });

}



// ===================================
// Navbar Highlight
// ===================================

document.querySelectorAll("nav a").forEach(link=>{

    link.addEventListener("click",function(){

        document.querySelectorAll("nav a").forEach(a=>{

            a.classList.remove("active");

        });

        this.classList.add("active");

    });

});



// ===================================
// Load Page
// ===================================

window.onload = ()=>{

    loadEvents();

};