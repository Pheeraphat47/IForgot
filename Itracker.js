var firebaseConfig = {
    apiKey: "AIzaSyD1MQEHvhhAt6pA4gI5zVreh0IXn3-gsic",
    authDomain: "itrackerfb.firebaseapp.com",
    databaseURL: "https://itrackerfb-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "itrackerfb",
    storageBucket: "itrackerfb.appspot.com",
    messagingSenderId: "22907326385",
    appId: "1:22907326385:web:db2374c7f97cf411d37790",
    measurementId: "G-CVYP2XVC0M"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

$(document).ready(function(){
    var database = firebase.database();
	var Led1Status;

	database.ref().on("value", function(snap){
		Led1Status = snap.val().Led1Status;
		if(Led1Status == "1"){    // check from the firebase
			//$(".Light1Status").text("The light is off");
			document.getElementById("unact").style.display = "none";
			document.getElementById("act").style.display = "block";
		} else {
			//$(".Light1Status").text("The light is on");
			document.getElementById("unact").style.display = "block";
			document.getElementById("act").style.display = "none";
		}
	});

    $(".toggle-btn").click(function(){
		var firebaseRef = firebase.database().ref().child("Led1Status");

		if(Led1Status == "1"){    // post to firebase
			firebaseRef.set("0");
			Led1Status = "0";
		} else {
			firebaseRef.set("1");
			Led1Status = "1";
		}
	})
});