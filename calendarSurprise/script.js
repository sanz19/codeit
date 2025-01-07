const calendarButton = document.querySelector(".btn-start");
const calendarContainer = document.querySelector(".container");

const days = 30;

const openDoor = (path, event) => {
    event.target.parentNode.style.backgroundImage = `url(${path})`;
    event.target.style.opacity = "0";
    event.target.style.backgroundColor = "#441752";
    event.target.style.border = "none";
}

const createCalendar = () => {
    for (let i = 0; i < days; i++) {
        const calendarDoor = document.createElement("div");
        const calendarDoorText = document.createElement("div");
    
        calendarDoor.classList.add("image");
        calendarDoor.style.gridArea = "door" + (i + 1);  
        calendarContainer.appendChild(calendarDoor);
    
        calendarDoorText.classList.add("text");
        calendarDoorText.innerHTML = i + 1;
        calendarDoor.appendChild(calendarDoorText);
    
        imageNumber = i + 1;
        // let imagePath = `C:\Users\rasanz\Documents\codeit\lads\SDAL_2.jpeg`;
        let imagePath = `../lads/SDAL_${imageNumber}.jpeg`;
        console.log(`Image Path: ${imagePath}`);
        calendarDoorText.addEventListener("click", openDoor.bind(null, imagePath));
    }    
}

calendarButton.addEventListener("click", createCalendar);