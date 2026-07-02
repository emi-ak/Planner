import { startAuth } from "./auth.js";
import { setCurrentUser, loadPlanner } from "./database.js";
import { defaultData } from "./data.js";

import "./navigation.js";
import "./theme.js";
import "./forms.js";
import "./dashboard.js";
import "./activities.js";
import "./coursework.js";
import "./timeline.js";
import "./vision.js";
import "./affirmation.js";
import "./resources.js";
import "./todo.js";

let data = null;
let classificationVisible = false;

document.querySelectorAll(".form-toggle").forEach(button => {
  button.addEventListener("click", () => {
    const form = document.getElementById(button.dataset.target);
    form.classList.toggle("open");

    const isOpen = form.classList.contains("open");
    const label = button.textContent.replace("+ ", "").replace("− ", "").trim();

    button.textContent = isOpen ? `− ${label}` : `+ ${label}`;
  });
});

startAuth(async (user) => {
  console.log("Signed in as:", user.email);

  setCurrentUser(user);
  data = await loadPlanner(defaultData);

  data.modules = (data.modules || []).map(module => ({
    ...module,
    year: module.year || "Year 1"
  }));

  renderAll();
  openPage(localStorage.getItem("emsPlannerCurrentPage") || "dashboard");
});

window.toggleEdit = toggleEdit;
window.removeById = removeById;
window.updateActivity = updateActivity;
window.updateCategory = updateCategory;
window.deleteCategory = deleteCategory;
window.deleteActivity = deleteActivity;
window.updateTimeline = updateTimeline;
window.updateModule = updateModule;
window.updateAssignment = updateAssignment;
window.deleteAssignment = deleteAssignment;
window.updateAffirmation = updateAffirmation;
window.updateResource = updateResource;
window.updateGoal = updateGoal;
window.toggleGoal = toggleGoal;
