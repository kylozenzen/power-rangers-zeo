import './style.css';
import { setupFormLogic } from './logic.js';

export function init(container) {
  container.innerHTML = `
    <main class="build-shell" aria-labelledby="build-title">
      <form class="workout-form" data-workout-form>
        <h1 id="build-title" class="workout-form__title">Log an Exercise</h1>

        <div class="workout-field">
          <label for="exercise-name">Exercise Name</label>
          <input id="exercise-name" name="exerciseName" type="text" placeholder="Back Squat" required />
        </div>

        <div class="workout-field">
          <label for="exercise-weight">Weight (lbs)</label>
          <input id="exercise-weight" name="weight" type="number" min="0" step="0.5" placeholder="225" required />
        </div>

        <div class="workout-field">
          <label for="exercise-sets">Sets</label>
          <input id="exercise-sets" name="sets" type="number" min="1" step="1" placeholder="5" required />
        </div>

        <div class="workout-field">
          <label for="exercise-reps">Reps</label>
          <input id="exercise-reps" name="reps" type="number" min="1" step="1" placeholder="5" required />
        </div>

        <button class="save-btn" type="submit">SAVE TO LOCAL STORAGE</button>
      </form>
    </main>
  `;

  setupFormLogic(container);
}
