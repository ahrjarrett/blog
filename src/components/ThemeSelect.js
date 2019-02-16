import React from "react"

const ThemeSelect = ({ theme, handleThemeToggle }) => (
  <div className="theme-select">
    <form>
      <label>
        <input
          type="radio"
          name="theme-radio"
          id="night-mode"
          value="night"
          className="toggle-control"
          checked={theme === "night"}
          onChange={handleThemeToggle}
        />
        Night
      </label>
      <label>
        <input
          type="radio"
          name="theme-radio"
          id="day-mode"
          value="day"
          className="toggle-control"
          checked={theme === "day"}
          onChange={handleThemeToggle}
        />
        Day
      </label>
      <label>
        <input
          type="radio"
          name="theme-radio"
          id="comic-mode"
          value="comic"
          className="toggle-control"
          checked={theme === "comic"}
          onChange={handleThemeToggle}
        />
        Comic
      </label>
      <label>
        <input
          type="radio"
          name="theme-radio"
          id="retro-mode"
          value="retro"
          className="toggle-control"
          checked={theme === "retro"}
          onChange={handleThemeToggle}
        />
        Retro
      </label>
      <label>
        <input
          type="radio"
          name="theme-radio"
          id="yale-mode"
          value="yale"
          className="toggle-control"
          checked={theme === "yale"}
          onChange={handleThemeToggle}
        />
        Yale
      </label>
    </form>
  </div>
)

export default ThemeSelect
