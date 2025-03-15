document.addEventListener("DOMContentLoaded", function () {
    const coin = document.getElementById("coin");
    const flipBtn = document.getElementById("flipBtn");
    const resultText = document.getElementById("result");
    
    let forceHeads = false;
    let forceTails = false;
    let rotation = 0;

    // Hidden buttons for forcing the result
    document.getElementById("headsBtn").addEventListener("click", () => {
        forceHeads = true;
        forceTails = false;
    });

    document.getElementById("tailsBtn").addEventListener("click", () => {
        forceHeads = false;
        forceTails = true;
    });

    flipBtn.addEventListener("click", function () {
        let result;

        // Determine the result based on hidden button
        if (forceHeads) {
            result = "Heads";
            rotation += 720; // Even number of spins (Heads)
        } else if (forceTails) {
            result = "Tails";
            rotation += 810; // Odd number of spins (Tails)
        } else {
            let randomFlip = Math.random() < 0.5;
            result = randomFlip ? "Heads" : "Tails";
            rotation += randomFlip ? 720 : 810;
        }

        // Reset hidden button state
        forceHeads = false;
        forceTails = false;

        // Apply animation
        coin.style.transform = `rotateX(${rotation}deg)`;

        // Show result after animation ends
        setTimeout(() => {
            resultText.textContent = `Result: ${result}`;
        }, 1000);
    });
});
