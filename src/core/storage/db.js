const DB_NAME = 'nobody_tracker_db';
const DB_VERSION = 1;
const WORKOUTS_STORE = 'workouts';

let dbPromise;

export function initDB() {
  if (dbPromise) {
    return dbPromise;
  }

  dbPromise = new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;

      if (!db.objectStoreNames.contains(WORKOUTS_STORE)) {
        db.createObjectStore(WORKOUTS_STORE, { keyPath: 'id', autoIncrement: true });
      }
    };

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = () => {
      dbPromise = undefined;
      reject(request.error);
    };
  });

  return dbPromise;
}

export async function saveWorkout(workoutData) {
  const db = await initDB();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(WORKOUTS_STORE, 'readwrite');
    const store = transaction.objectStore(WORKOUTS_STORE);
    const request = store.add(workoutData);

    transaction.oncomplete = () => {
      resolve(request.result);
    };

    transaction.onerror = () => {
      reject(transaction.error ?? request.error);
    };

    transaction.onabort = () => {
      reject(transaction.error ?? request.error);
    };
  });
}
