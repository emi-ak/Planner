import { getData } from "./state.js";

import { renderDashboard } from "./dashboard.js";
import { renderActivities } from "./activities.js";
import { renderTimeline } from "./timeline.js";
import { renderModules } from "./coursework.js";
import { renderVision } from "./vision.js";
import { renderAffirmations } from "./affirmation.js";
import { renderResources } from "./resources.js";
import { renderGoals } from "./todo.js";

export function renderAll() {
  const data = getData();
  if (!data) return;

  renderDashboard();
  renderActivities();
  renderTimeline();
  renderModules();
  renderVision();
  renderAffirmations();
  renderResources();
  renderGoals();
}
