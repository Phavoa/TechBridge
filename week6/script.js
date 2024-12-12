const button = document.getElementById("getFactButton");
const factContainer = document.getElementById("factContainer");

button.addEventListener("click", async () => {
  factContainer.textContent = "Fetching a purr-fect fact...";
  factContainer.classList.add("loading");
  button.disabled = true;

  try {
    const response = await fetch("https://catfact.ninja/fact");
    if (!response.ok) throw new Error("Failed to fetch cat facts");

    const data = await response.json();
    factContainer.textContent = data.fact;
    factContainer.classList.remove("loading");
  } catch (error) {
    factContainer.textContent = "Oops! Something went wrong. Please try again later.";
    factContainer.classList.remove("loading");
  } finally {
    button.disabled = false;
  }
});