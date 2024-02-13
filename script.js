window.onload=function(){
    var i = 0;
    var txt = 'You are the most beautiful thing that ever happened to me in my whole life, and from the first week after I met you four years and five months ago until this moment you were the closest person to me, and you will remain so. Throughout my life, I have never seen a woman more beautiful than you, nor kinder than you, nor smarter than you. We were friends, lovers, brothers, and everything one could wish for, so when I tell you that you are my life, my heart, or my soul, I mean it every time I say it. I want you only for me and I do not want anyone else. I want to grow old with you, build a family together, build our empire together, and do whatever we want with our lives. I want to travel with you and live my whole life next to you. Regardless of our recent problems and the difficulties of your life and mine, I am very serious about our relationship and I hope that we stay together and I be your lover, I be your husband, and you be my wife.'; /* The text */
    var speed = 60; /* The speed/duration of the effect in milliseconds */
    
    document.getElementById("mybutton").addEventListener("click", typeWriter);
    document.getElementById("mybutton").addEventListener("click", changeButtonText);
    function changeButtonText (){
        document.getElementById("mybutton").textContent = "Ali is typing ..."; 
    }
    async function typeWriter() {
      if (i < txt.length) {
        if (txt[i] === '.') {
          document.getElementById("demo").innerHTML += txt.charAt(i);
          i++;
          await delay(1000); // Wait for 1 second
          setTimeout(typeWriter, speed);
        } else if (txt[i] === ',') {
          document.getElementById("demo").innerHTML += txt.charAt(i);
          i++;
          await delay(400);
          setTimeout(typeWriter, speed);
        } else {
          document.getElementById("demo").innerHTML += txt.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
        }
      }
    }
    
    function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    const yesBtn = document.getElementById("yes");
    
    const noBtn = document.getElementById("no");
    
    const yayText = document.getElementById("yay")
    
    const yayText1 = document.getElementById("yay1");
    const noText = document.getElementById("notext");
    const no1 = document.getElementById("no1");
    
    const can1 = document.getElementById("can1")
    
    const can = document.getElementById("can")
    
    document.getElementById("no").addEventListener("click", () => {
    
      noBtn.style.display = "none";
      noText.style.display = "block";
    
      no1.style.display = "block";
    
      can.style.display = "none";
    
      can1.style.display = "none";
    
    });
    
    yesBtn.addEventListener("click", () => {
    
      yayText.style.display = "block";
    
      yayText1.style.display = "block";
    
      can.style.display = "none";
    
      can1.style.display = "none";

      noBtn.style.display = "none";
      yesBtn.style.display = "none";

      noText.style.display = "none";
    
      no1.style.display = "none";
    
    });
  }

