// Import the functions you need from the SDKs you need
import { initializeApp, } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import config from "../config.json"

// TODO: Add SDKs for Firebase products that you want to use

// Initialize Firebase

async function getBusses(db) {
  const busCol = collection(db, "Buses");
  const busSnapshot = await getDocs(busCol);
  let cityList = busSnapshot.docs.map((doc) => { return { ...doc.data(), id: doc.id } });
  cityList = cityList.map((c) => {
    const object = {
      name: c.name,
      description: "some desc",
      geometry: [c.geometry._lat, c.geometry._long],
      number: c.number,
      id: c.id,
      route: c.route
    };
    return object;
  });
  return cityList;
}

async function getHistory(db) {
  const history = collection(db, "History");
  const historySnapshot = await getDocs(history);
  let historyList = historySnapshot.docs.map((doc) => { return { ...doc.data(), id: doc.id } });
  return historyList;
}

function getDB() {
  const firebaseConfig = config;

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  return db;
}

export async function getBussesData() {
  return getBusses(getDB());
}
export async function getHistoryData() {
  return getHistory(getDB())
}


