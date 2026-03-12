function showRoute(){

const source = document.getElementById("source").value
const destination = document.getElementById("destination").value

if(source === "" || destination === ""){
alert("Please enter source and destination")
return
}

document.getElementById("result").innerHTML =
"Best Route from " + source + " to " + destination + " : 20 minutes (Less Traffic)"

}

function submitReport(){

const location = document.getElementById("location").value
const type = document.getElementById("type").value

if(location === ""){
alert("Enter location")
return
}

document.getElementById("msg").innerHTML =
"Incident reported at " + location + " (" + type + ")"

}
