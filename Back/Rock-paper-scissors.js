const choices = ["rock", "paper", "scissors"];
    const buttons = document.querySelectorAll(".choice");
    const resultDiv = document.getElementById("result");

    const layoutsResult = {
      rock: "ROCK",
      paper: "PAPER",
      scissors: "SCISSORS"
    };

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const player = btn.dataset.choice;
        const computer = choices[Math.floor(Math.random() * choices.length)];

        let resultText = "";
        if (player === computer) {
          resultText = "It's a draw!";
        } else if (
          (player === "rock" && computer === "scissors") ||
          (player === "paper" && computer === "rock") ||
          (player === "scissors" && computer === "paper")
        ) {
          resultText = "You win!";
        } else {
          resultText = "Computer wins!";
        }

        resultDiv.innerHTML = `
            <p>You chose ${layoutsResult[player]} &nbsp; | &nbsp; Computer chose ${layoutsResult[computer]}</p>
            <p class="mb-5">${resultText}</p>
        `;

        // small animation of apparition
        resultDiv.classList.add("scale-125");
        setTimeout(() => resultDiv.classList.remove("scale-125"), 300);

        // Reset button logic
        const resetBtn = document.getElementById("resetBtn");

        resetBtn.addEventListener("click", () => {
            resultDiv.innerHTML = "";
            resultDiv.classList.add("opacity-50");
            setTimeout(() => resultDiv.classList.remove("opacity-50"), 200);
        });

    });
});