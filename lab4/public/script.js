document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#feedback form");
  const formStatus = document.querySelector("#form-status");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    formStatus.textContent = `Thank you, ${data.get("name")}. Your feedback about ${data.get("topic")} is ready.`;
    form.reset();
  });
});