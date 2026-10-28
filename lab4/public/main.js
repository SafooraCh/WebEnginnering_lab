import { delay, makeCounter } from "./utils.js";

const status = document.querySelector("#status");
const tbody = document.querySelector("#schedule tbody");
const nextBooking = makeCounter();

tbody.addEventListener("click", async (event) => {
  const button = event.target.closest("button[data-day]");
  if (!button) return;

  const day = button.dataset.day;
  const row = button.closest("tr");

  if (row.classList.contains("selected")) {
    row.classList.remove("selected");
    button.textContent = "Select";
    const count = document.querySelectorAll("#schedule tr.selected").length;
    status.textContent = `Booking cancelled for ${day}. ${count} slot(s) currently booked.`;
    return;
  }

  status.textContent = `Updating ${day}…`;
  button.disabled = true;
  await delay(1000);
  row.classList.toggle("selected");
  button.textContent = "Booked";
  button.disabled = false;

  const count = document.querySelectorAll("#schedule tr.selected").length;
  status.textContent = `Booking #${nextBooking()} confirmed for ${day}. ${count} slot(s) booked.`;
});