const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
  console.log("BUtton clicked")
  
  const icon = hamburger.querySelector('i');
  if (menu.classList.contains('active')) {
    icon.classList.replace('fa-bars', 'fa-times');
  } else {
    icon.classList.replace('fa-times', 'fa-bars');
  }
});

document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
    hamburger.querySelector('i').classList.replace('fa-times', 'fa-bars');
  });
});


function go(){
    document.getElementById("intro_text").style.display = "none";
    document.getElementById("userInput").style.display = "block";
}
function start(){
    var message = document.getElementById("message")
    message.innerHTML = ""
    var jambScore = document.getElementById("jamb").value;
    console.log(`Jamb Score = ${jambScore}`);
    var olevel1 = document.getElementById("olevel1").value;
    var olevel2 = document.getElementById("olevel2").value;
    var olevel3 = document.getElementById("olevel3").value;
    var olevel4 = document.getElementById("olevel4").value;
    
    try {
        if(isNaN(jambScore)) throw "'Jamb Score' is not a valid number"
        if(jambScore.trim() == "") throw "'Jamb Score' is empty";
        if(olevel1 == "") throw "No grade is selected for 'Subject 1' ";
        if(olevel2 == "")throw "No grade is selected for 'Subject 2'";
        if(olevel3 == "") throw "No grade is selected for 'Subject 3'";
        if (olevel4 == "") throw "No grade is selected for 'Subject 4'";
    } catch (error) {
        message.innerText = error
        message.style.color = "rgb(173, 6, 6)"
        console.log("error caught");
        return;
        
    }
    olevel1 = parseInt(olevel1);
    olevel2 = parseInt(olevel2);
    olevel3 = parseInt(olevel3);
    olevel4 = parseInt(olevel4);
    var olevel = olevel1+ olevel2 + olevel3 + olevel4;
    var sitting = document.getElementById("sitting").checked;
    if (sitting) {
        olevel += 40;
    }
    jambScore = 90*jambScore/100;
    olevel = 10*olevel/100;
    var aggregate = jambScore + olevel;
    message.innerText = `Your aggregate score is: ${aggregate}`
    message.style.color = "white";
}
