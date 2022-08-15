var firebaseConfig = {
  apiKey: "AIzaSyDMUKjZ0K-q4Da3xF7hI9BvUvu1YcACq_g",
  authDomain: "let-s-chat-e45e3.firebaseapp.com",
  databaseURL: "https://let-s-chat-e45e3-default-rtdb.firebaseio.com",
  projectId: "let-s-chat-e45e3",
  storageBucket: "let-s-chat-e45e3.appspot.com",
  messagingSenderId: "366541036870",
  appId: "1:366541036870:web:b250b3267b437f3bf1d947"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  function add_Room() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({

      purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);
    window.location = "chat_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name-" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +" </div> <hr>"
      document.getElementById(output).innerHTML += row;
      //End code
      });});}

getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "chat_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "chat.html";
}