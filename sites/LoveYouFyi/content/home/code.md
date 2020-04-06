+++
widget = "blank"
headless = true  # This file represents a page section.
active = false  # Activate this widget? true/false
weight = 20  # Order that this section will appear in.

title = "Code"
# ... Put Your Section Options Here (title etc.) ...

[design]
  # Choose how many columns the section has. Valid values: 1 or 2.
  columns = "1"
+++
```javascript
// Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');
// Firebase Admin SDK to access the Firebase/Firestore Realtime Database.
const admin = require('firebase-admin');
/** [START] DATABASE CREDENTIALS ****/
const serviceAccount = require('./service-account.json'); // download from firebase console
admin.initializeApp({ // initialize firebase admin with credentials
  credential: admin.credential.cert(serviceAccount), // So functions can connect to database
  databaseURL: 'https://loveyou-forms.firebaseio.com' // Needed if using FireBase database (not FireStore)
});
/** [END] DATABASE CREDENTIALS ****/
const db = admin.firestore(); // FireStore database reference
// Timestamps: required for adding server-timestamps to any database docs
const FieldValue = require('firebase-admin').firestore.FieldValue; // Timestamp here
const timestampSettings = { timestampsInSnapshots: true}; // Define timestamp settings
db.settings(timestampSettings); // Apply timestamp settings to database settingsA
/** [IMPORTANT] If not sending data to Google Sheets, omit remaining requirements */
/** [START] firestoreToSheets Function Support ****/
const moment = require('moment-timezone'); // Timestamp formats and timezones
const { google } = require('googleapis');
const sheets = google.sheets('v4'); // Google Sheets
const jwtClient = new google.auth.JWT({ // JWT Authentication (for google sheets)
  email: serviceAccount.client_email, // [**** CREDENTIALS ****]
  key: serviceAccount.private_key, // [**** CREDENTIALS ****]
  scopes: ['https://www.googleapis.com/auth/spreadsheets'] // read and write sheets
});
/** [END] firestoreToSheets Function Support ****/
```

```python
# Example of code highlighting
input_string_var = input("Enter some data: ")
print("You entered: {}".format(input_string_var))
```

```javascript
function writeNewPost(uid, username, picture, title, body) {
  // A post entry.
  var postData = {
    author: username,
    uid: uid,
    body: body,
    title: title,
    starCount: 0,
    authorPic: picture
  };

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('posts').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/posts/' + newPostKey] = postData;
  updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);
}
```

