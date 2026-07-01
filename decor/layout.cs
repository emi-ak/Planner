/* main header */
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  margin-bottom: 24px;
}

.hero {
  padding: 30px;
  border-radius: 34px;
  background: var(--hero-background);
  border: 1px solid var(--border);
  backdrop-filter: blur(22px);
  box-shadow: var(--shadow);
}

.hero-subtitle,
.hint {
  color: var(--muted);
  margin-bottom: 0;
  font-size: 20px;
}

.eyebrow {
  color: var(--pink-700);
  text-transform: uppercase;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.15em;
  margin: 0 0 8px;
}

/*------------------------------------------------------*/
/* Page Layout */
main {
  margin-left: 320px;
  padding: 34px;
  width: calc(100% - 320px);
}

.page {
  display: none;
  animation: pageIn 0.3s ease;
}

.page.active {
  display: block;
}

.two-col {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 20px;
}

.stack {
  display: grid;
  gap: 16px;
}

.grid-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.widget-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
  margin: 22px 0;
}

.activity-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.vision-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(210px, 1fr));
  gap: 18px;
  align-items: start;
}

.rings-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 18px;
}
