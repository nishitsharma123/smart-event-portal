// ==========================================
// Smart Event Portal Admin Dashboard
// ==========================================

async function loadEvents() {

    try {

        const response = await fetch("/api/events");

        const events = await response.json();

        renderTable(events);

    }

    catch (error) {

        console.error(error);

        alert("Unable to load events.");

    }

}

function renderTable(events){

    const body = document.getElementById("adminTableBody");

    body.innerHTML = "";

    events.forEach((event,index)=>{

        body.innerHTML += `

        <tr>

            <td>${event.name}</td>

            <td>${event.date}</td>

            <td>${event.location}</td>

            <td>₹${event.price}</td>

            <td>

                <button
                    class="edit-btn"
                    onclick="editEvent(${index},'${event.name}')">

                    Edit

                </button>

                <button
                    class="delete-btn"
                    onclick="deleteEvent(${index},'${event.name}')">

                    Delete

                </button>

            </td>

        </tr>

        `;

    });

}



function addEvent(){

    alert(

`Demo Application

In a production application this button would:

✔ Open Add Event Form

✔ Save Event to Database

✔ Refresh Event List`

);

}



function editEvent(index,name){

    alert(

`Editing Event

${name}

(Backend API will be implemented later.)`

);

}



function deleteEvent(index,name){

    if(confirm(`Delete "${name}" ?`)){

        alert(

`${name}

deleted successfully.

(Database integration will be added later.)`

        );

    }

}



window.onload = ()=>{

    loadEvents();

};