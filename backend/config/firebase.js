const { initializeApp, cert } = require('firebase-admin/app');
const { getStorage } = require('firebase-admin/storage');
// const admin = require('firebase-admin')

const serviceAccount = require('../serviceAccountKey.json');

initializeApp({
  credential: cert(serviceAccount),
  storageBucket: 'karsongarcade.appspot.com'
});
// const FirebaseApp = admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     storageBucket: "karsongarcade.appspot.com"
// })

const bucket = getStorage().bucket();
// const storage = FirebaseApp.storage()
// const bucket = storage.bucket()

module.exports = {
    bucket
}