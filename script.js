var audio = new Audio('assets/sentmessage.mp3');
function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Welcome to,<br><br><span class='bold'><a class='alink'>TEAM UNITY</a></span><br><br><span class='bold'>where collaboration sparks excellence!</span><br><br>As part of the Sparkle Placement and Training Program, we unite diverse talents to achieve our shared goals with synergy and determination.<br><br><span class='bold'><a class='alink'>UNITED WE CAN!</a></span><br><br>Send <span class='bold'>'help'</span> to know more about us.<br>");
            }, 2000);
            break;
        case "help":
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about us...<br>e.g<br><span class='bold'>'members'</span> -to get our team members details <br><span class='bold'>'score'</span> - to get our team score in sparkle program<br><span class='bold'>'moto'</span> - to get our team moto<br><span class='bold'>'anthem'</span> - to get our team anthem<br><span class='bold'>'clear'</span> - to clear conversation<br><span class='bold'>'about'</span> - to know about this site</span>");
            break;
        case "score":
            sendTextMessage("<span class='sk'>As of Sparkle placement and training program DAY 1 TEAM UNITY's score is <br><span class='bold'>1161</span>");
            break;
        case "moto":
            sendTextMessage("<span class='sk'>TEAM UNITY's moto is <br><br><span class='bold'>UNITED WE CAN!</span>");
            break;
        case "anthem":
            sendTextMessage("<span class='sk'>TEAM UNITY's anthem is <br><br><span class='bold'>In the heart of Unity Hub, where dreams ignite,Guiding paths with purpose, our future in sight.Addressing challenges with a sparkle so bright,Together we stand, our unity takes flight.</span>");
            break;
        case "members":
            sendTextMessage("<span class='sk'>TEAM UNITY's members are <br><br><span class='bold'>Sneha Shaji (C)</span> <br><span class='bold'>Sanisha (WC)</span> <br><span class='bold'>Abhinav Madhusoodanan</span> <br><span class='bold'>Smithin K</span> <br><span class='bold'>Nethran ES</span> <br><span class='bold'>Aishwarya CS</span> <br><span class='bold'>Abhinaya</span></span>");
            break;
        case "clear":
            clearChat();
            break;
        case "about":
            sendTextMessage("<span class='sk'>This web app was created with the contribution of every team member! <br><br><span class='bold'>UNITED WE CAN!</span>");
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Hey I couldn't catch you...😢<br>Send 'help' to know more about usage.");
            }, 2000);
            break;
    }



}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
