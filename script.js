var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href='tel:+917717457974'> <div class='socialItem' id='call'><img class='socialItemI' src='images/phone.svg'/><label class='number'>7717457974</label></div> </a> <a href='mailto:khushichoudhary1020@gmail.com'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com/khushichoudhary1020'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a> <a target='_blank' href='https://wa.me/917717457974'> <div class='socialItem'><img class='socialItemI' src='images/whatsapp.svg' alt=''></div> </a> <a target='_blank' href=''> <div class='socialItem'><img class='socialItemI' src='images/telegram.svg' alt=''></div> </a> <a target='_blank' href='https://instagram.com/kushimanent'> <div class='socialItem'><img class='socialItemI' src='images/instagram.svg' alt=''> </div> </a> <a href='https://www.linkedin.com/in/khushichoudhary1020/' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='images/linkedin.svg' alt=''></div> </a> </div>";
var resumeString = "<img src='images/resumeThumbnail.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>Khushi Resume.pdf</label></div><a href='assets/Khushi Choudhary&#39;s Resume.pdf' download='Khushi_Choudhary_Resume.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238.63833262443757!2d74.19014864534314!3d16.865338763272877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1a7dcf40f5dd7%3A0xd7b69fe1fcfa9877!2zMTbCsDUxJzU1LjQiTiA3NMKwMTEnMjUuMyJF!5e0!3m2!1sen!2sin!4v1645079906766!5m2!1sen!2sin' class='map'></iframe></div><label class='add'><address>Hoshiarpur Road<br>Jalandhar<br>Jalandhar City, Punjab, INDIA 144001</address>";
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
                sendTextMessage("Hello there 👋🏻,<br><br>My name is <span class='bold'><a class='alink'>Khushi Choudhary</a>.</span><br><br>I am an AI student at <span class='bold'>Kanya Maha Vidyalaya 👨🏻‍💻📚</span><br><br>I am eager to hear about potential career opportunities, so I would be pleased to chat about job openings in the software engineering sphere.<br><br>Send <span class='bold'>'help'</span> to know more about me.<br>");
            }, 2000);
            break;
        case "help":
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'address'</span> - to get my address<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br><span class='bold'>'about'</span> - to know about this site</span>");
            break;
        case "resume":
            sendTextMessage(resumeString);
            break;
        case "skills":
            sendTextMessage("<span class='sk'>I am currently pursuing Bachelors degree in Computer Science specialisation in Artificial Intelligence and Data Science.<br><br>I can comfortably write code in following languages :<br><span class='bold'>Python<br>R<br>PHP<br>Kotlin<br>Dart<br>CSS<br>HTML<br>JS</span><br><br><br><br>I can comfortably work with the following DBs :<br><span class='bold'>MySQL<br>MongoDB<br>Firebase</span><br><br>I've experience with following frameworks :<span class='bold'><br>Android<br>Flutter<br>ReactJs</span><br><br>Favourite IDE:VSCode</span>");
            break;

        case "education":
            sendTextMessage("I am currently pusuing B.Voc. in Computer Science specialisation in Artificial Intelligence and Data Science in Jalandhar, Punjab<br>Passing Year : 2024<br><br>I have completed my Post Matriculation from St. Soldiers Group of Institutions near NIT REC<br>Passing Year:2021<br>Result:86.06%<br><br>I have completed my Secondary school from local school known as SKVN<br>Passing Year:2019<br>Result:91.02%");
            break;

        case "address":
            sendTextMessage(addressString);
            break;
        case "clear":
            clearChat();
            break;
        case "about":
            sendTextMessage("🛠️💻 This portfolio website is built using HTML, CSS and JavaScript from SCRATCH!<br><br>👨🏻‍💻 Designed and Developed by <a class='alink' target='_blank' href='https:\/\/instagram.com/kushimanent/'><span class='bold'>Khushi Choudhary</a> with ❤️</span>");
            break;
            
        case "hi khushi":
            sendTextMessage("Hello");
            break;
        case "hi khushi choudhary":
            sendTextMessage("Hello");
            break;

        case "hi kushi":
            sendTextMessage("Hello");
            break;
            
        case "hello":
            sendTextMessage("Hi");
            break;
            
        case "hii":
            sendTextMessage("Hello");
            break;
    
        case "hey":
            sendTextMessage("Hi");
            break;
    
        case "how are you?":
            sendTextMessage("I am good. How about you?");
            break; 

        case "who are you":
            sendTextMessage("I am Khushi Choudhary's AI Bot");
            break;
                
        case "good":
            sendTextMessage("NICE, How can I assist you?");
            break;
            
        case "i am good":
            sendTextMessage("NICE, How can I assist you?");
            break;
              
        case "fine":
            sendTextMessage("NICE, How can I assist you?");
            break; 
    
        case "great":
            sendTextMessage("NICE, How can I assist you?");
            break;
                
        case "i am good":
            sendTextMessage("NICE, How can I assist you?");
            break;
    
        case "i am fine":
            sendTextMessage("NICE, How can I assist you?");
            break;

        case "where are you?":
            sendTextMessage(addressString);
            break;

        case "where are you":
            sendTextMessage(addressString);
            break;
        
        case "where are u":
            sendTextMessage(addressString);
                break;
    
        case "where is khushi?":
            sendTextMessage(addressString);
            break;
        
        case "where are u":
            sendTextMessage(addressString);
            break;
    
        case "who are you?":
            sendTextMessage("I am Khushi Chodhary's AI Bot.");
            break;
    
        case "what are you doing?":
            sendTextMessage("Talking to you.");
            break;
    
        case "what are you doing":
            sendTextMessage("Talking to you");
            break;
    
        case "who made you?":
            sendTextMessage("Khushi Choudhary made me.");
            break;
    
        case "why did she made you?":
            sendTextMessage("To talk to you.");
            break;
    
        case "why are you here?":
            sendTextMessage("To talk to you.");
            break;
    
        case "i love you":
            sendTextMessage("Thanks for showing your love! Lots of love from Khushi's AI Bot.");
            break;   
                
        case "i love u":
            sendTextMessage("Thanks for showing your love! Lots of love from Khushi's AI Bot.");
            break;
            
    
        case "i hate you":
            sendTextMessage("So sorry for the inconvenience you had. I'll try to improve myself.");
            break;
    
        case "i hate u":
            sendTextMessage("So sorry for the inconvenience you had. I'll try to improve myself.");
            break;
        
        case "i hate u?":
            sendTextMessage("So sorry for the inconvenience you had. I'll try to improve myself.");
            break;

        case "i hate you?":
            sendTextMessage("So sorry for the inconvenience you had. I'll try to improve myself.");
            break;

        case "contact":
            sendTextMessage(contactString);
            break;
        case "projects":
            sendTextMessage("You want to check my projects? Then just jump into my Github Account.<br><br><div class='social'><a target='_blank' href='https://github.com/khushichoudhary1020'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>");
            break;
        case "new":
            sendTextMessage(addressString);
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
