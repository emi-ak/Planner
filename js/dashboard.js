function renderDashboard() {
  const completedHours = data.categories.reduce((sum, c) => sum + totalHours(c), 0);
  const goalHours = data.categories.reduce((sum, c) => sum + Number(c.goal || 0), 0);
  const moduleAverage = averageOfModuleTotals();

  dashTotalHours.textContent = completedHours;
  dashActivityProgress.textContent = `${percent(completedHours, goalHours)}%`;
  dashModules.textContent = data.modules.length;
  
  const classification = moduleAverage ? classifyUK(Number(moduleAverage)) : "—";
  
  dashClassification.textContent =
    classificationVisible ? classification : "";

  dashboardRings.innerHTML = data.categories.map(c => ringHTML(c.name, totalHours(c), c.goal)).join("");

  const upcoming = [...data.timeline].sort((a, b) => new Date(a.date) - new Date(b.date)).slice(0, 5);
  dashboardTimeline.innerHTML = upcoming.map((t, index) => `
    <div class="item">
      <span class="badge">#${index + 1} · ${t.type}</span>
      <h4>${t.title}</h4>
      <p>${t.date}</p>
    </div>
  `).join("");
}

function renderActivities() {
  activityCategory.innerHTML = data.categories.map(c => `<option value="${c.id}">${c.name}</option>`).join("");

  activityList.innerHTML = data.categories.map(c => {
    const done = totalHours(c);
    return `
      <div class="category-card">
        <div class="item-header">
          <div>
            <h3>${c.name}</h3>
            <p>${done} / ${c.goal} hours completed</p>
          </div>
          <div class="action-row">
            <button class="soft-btn" onclick="toggleEdit('edit-category-${c.id}')">Edit Goal</button>
            <button class="delete" onclick="deleteCategory('${c.id}')">Delete</button>
          </div>
        </div>
        <div id="edit-category-${c.id}" class="edit-panel">
          <input id="category-name-${c.id}" value="${escapeHTML(c.name)}">
          <input id="category-goal-${c.id}" type="number" min="1" step="1" value="${c.goal}">
          <button onclick="updateCategory('${c.id}')">Save Category</button>
        </div>
        ${ringHTML(c.name, done, c.goal)}
        <div class="activity-sublist">
          ${(c.activities || []).map(a => `
            <div class="activity-pill">
              <div class="item-header">
                <div>
                  <strong>${a.name}</strong>
                  <p>${a.date || "No date"} · ${a.hours} hours</p>
                  <p>${a.notes || ""}</p>
                </div>
                <div class="action-row">
                  <button class="soft-btn" onclick="toggleEdit('edit-activity-${a.id}')">Edit</button>
                  <button class="delete" onclick="deleteActivity('${c.id}', '${a.id}')">Delete</button>
                </div>
              </div>
              <div id="edit-activity-${a.id}" class="edit-panel">
                <input id="activity-name-${a.id}" value="${escapeHTML(a.name)}">
                <input id="activity-date-${a.id}" type="date" value="${a.date || ""}">
                <input id="activity-hours-${a.id}" type="number" min="0" step="0.5" value="${a.hours}">
                <textarea id="activity-notes-${a.id}">${escapeHTML(a.notes || "")}</textarea>
                <button onclick="updateActivity('${c.id}', '${a.id}')">Save Activity</button>
              </div>
            </div>
          `).join("") || "<p>No activities yet.</p>"}
        </div>
      </div>
    `;
  }).join("");
}
