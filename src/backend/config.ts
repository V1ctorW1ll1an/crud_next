import { FirebaseApp, getApps, initializeApp } from "firebase/app"

let app: FirebaseApp

if (!getApps.length) {
    app = initializeApp({
        // Your web app's Firebase configuration
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    })
}

export { app }
