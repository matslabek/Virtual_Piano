function prepareEventListeners() {
    let keyboardKeys = ['A', 'S', 'D', 'F', 'G', 'H', 'J'];
    document.addEventListener("keydown", function(event) {
        //Remove the "Key" part
        let key = event.code.slice(3);
        if (keyboardKeys.includes(key)) {
                console.log("The '" + key + "'key is pressed.");
            }
        else {
            console.log("Warning! You pressed the wrong key!");
        }
        });
}

prepareEventListeners();