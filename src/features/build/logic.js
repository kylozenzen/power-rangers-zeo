import { saveWorkout } from '../../core/storage/db.js';

const SAVED_MESSAGE_DURATION_MS = 1200;

export function setupFormLogic(container) {
  const form = container.querySelector('[data-workout-form]');

  if (!form) {
    return;
  }

  const saveButton = form.querySelector('.save-btn');
  const defaultButtonText = saveButton?.textContent ?? 'SAVE TO LOCAL STORAGE';

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const workout = {
      exerciseName: formData.get('exerciseName')?.toString().trim() ?? '',
      weight: Number(formData.get('weight')),
      sets: Number(formData.get('sets')),
      reps: Number(formData.get('reps')),
      timestamp: new Date().toISOString(),
    };

    await saveWorkout(workout);

    form.reset();

    if (saveButton) {
      saveButton.textContent = 'SAVED!';
      window.setTimeout(() => {
        saveButton.textContent = defaultButtonText;
      }, SAVED_MESSAGE_DURATION_MS);
    }
  });
}
