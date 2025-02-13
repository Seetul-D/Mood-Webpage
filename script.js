    function changeMood() {
    let mood = document.getElementById("moodSelector").value;
            let body = document.body;
            let audio = document.getElementById("bgMusic");
        
    let moodSettings = {
        neutral: { color: "#ffffff", music: "" },
        happy: { color: "#ffeb3b", music: "happy.mp3" },
        sad: { color: "#90caf9", music: "sad.mp3" },
        energetic: { color: "#ff5722", music: "energetic.mp3" },
        sleepy: { color: "#673ab7", music: "sleepy.mp3" }
        };
            
        body.style.backgroundColor = moodSettings[mood].color;
        if (audio) {
            audio.src = moodSettings[mood].music;
            audio.play();
        }
        }
