import { initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { connectStorageEmulator, getStorage } from "firebase/storage";
import { connectFunctionsEmulator, getFunctions } from "firebase/functions";

import { modo,configuracao } from "./ambiente.js";
const local = modo === "local";
if (local && !["localhost","127.0.0.1"].includes(location.hostname)) throw new Error("Abra este exercício pelo endereço local do emulador.");

export const app = initializeApp(configuracao);
export const auth = getAuth(app);
export const banco = getFirestore(app);
export const armazenamento = getStorage(app);
export const funcoes = getFunctions(app, "us-central1");
if (local) {
connectAuthEmulator(auth, "http://127.0.0.1:9099", { disableWarnings: true });
connectFirestoreEmulator(banco, "127.0.0.1", 8080);
connectStorageEmulator(armazenamento, "127.0.0.1", 9199);
connectFunctionsEmulator(funcoes, "127.0.0.1", 5001);
}
