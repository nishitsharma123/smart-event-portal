async function loadEvents() {

    const response = await fetch("/api/events");

    const events = await response.json();

    let html = "";

    events.forEach(event => {

        html += `
            <div>
                <h3>${event.name}</h3>
                <p>Date : ${event.date}</p>
                <p>Location : ${event.location}</p>
                <p>₹ ${event.price}</p>
                <hr>
            </div>
        `;

    });

    document.getElementById("events").innerHTML = html;

}