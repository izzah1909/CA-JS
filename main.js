let doorIsOpen = true

function toggleDoor() {
    const door = document.getElementById('door');

    if (doorIsOpen) {
        door.src = "img/close.jpg";
        doorIsOpen = false;
    } else {
        door.src = "img/open.png";
        doorIsOpen = true;
    }
}
