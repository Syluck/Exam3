document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("#calculator button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.textContent;

            if (value === "Clear") {
                display.value = "";
            } 
            else if (value === "=") {
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = "Error";
                }
            } 
            else {
                display.value += value;
            }

            const sound = document.getElementById("clickSound");
            if (sound) {
                sound.currentTime = 0;
                sound.play();
            }
        });
    });
});
