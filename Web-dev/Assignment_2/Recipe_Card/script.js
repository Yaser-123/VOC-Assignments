// JavaScript Code for Interactivity

// Select Elements
const ingredientsBtn = document.getElementById("toggle-ingredients");
const stepsBtn = document.getElementById("toggle-steps");
const ingredientsList = document.getElementById("ingredients-list");
const stepsList = document.getElementById("steps-list");
const startCookingBtn = document.getElementById("start-cooking");
const progressBar = document.getElementById("progress-bar");

// Toggle Visibility
ingredientsBtn.addEventListener("click", () => {
  ingredientsList.classList.toggle("hidden");
  ingredientsBtn.textContent = ingredientsList.classList.contains("hidden")
    ? "Show Ingredients"
    : "Hide Ingredients";
});

stepsBtn.addEventListener("click", () => {
  stepsList.classList.toggle("hidden");
  stepsBtn.textContent = stepsList.classList.contains("hidden")
    ? "Show Steps"
    : "Hide Steps";
});

// Start Cooking Logic
let currentStep = 0;
const steps = document.querySelectorAll("#steps-list li");

startCookingBtn.addEventListener("click", () => {
  if (currentStep < steps.length) {
    steps[currentStep].classList.add("highlight");
    progressBar.style.width = `${((currentStep + 1) / steps.length) * 100}%`;
    currentStep++;
  } else {
    alert("All steps completed!");
    currentStep = 0;
    steps.forEach((step) => step.classList.remove("highlight"));
    progressBar.style.width = "0";
  }
});

// Highlight CSS
document.styleSheets[0].insertRule(`
  .highlight {
    background: #04d9ff;
    color: #121212;
    padding: 5px;
    border-radius: 5px;
    animation: highlight-fade 0.5s ease;
  }
`, 0);

// Keyframes for Highlight Animation
document.styleSheets[0].insertRule(`
  @keyframes highlight-fade {
    from {
      background: #04d9ff;
    }
    to {
      background: transparent;
    }
  }
`, 1);
