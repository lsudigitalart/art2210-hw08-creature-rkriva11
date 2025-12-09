//dragon evolution system


var babyImage = 'Images/BabyMardi.png';
var teenImage = 'Images/TeenMardi.png';
var adultImage = 'Images/adultMardi.png';

var currentStage = 'baby';
var tomatoesNeeded = 3; // tomatoes needed to evolve
var tomatoesFed = 0; // tomatoes fed so far


function playEatingSound() {
    var sound = document.getElementById('eatSound');
    if (sound) {
        sound.currentTime = 0;
        sound.playbackRate = 1.5; 
        sound.play();
    }
}

//explosion effect
function showExplosion() {
    var explosion = document.getElementById('explosionEffect');
    if (explosion) {
        explosion.style.display = 'block';
        
        setTimeout(function() {
            explosion.style.display = 'none';
        }, 1000);
    }
}

//feeding progress bar
function updateFeedingBar() {
    var bar = document.getElementById('feedingProgress');
    var count = document.getElementById('feedingCount');
    var percent = (tomatoesFed / tomatoesNeeded) * 100;
    
    if (bar) bar.style.width = percent + '%';
    if (count) count.textContent = 'Tomatoes: ' + tomatoesFed + '/' + tomatoesNeeded;
}

//next stage
function evolveDragon() {
    tomatoesFed++;
    playEatingSound();
    
    if (tomatoesFed < tomatoesNeeded) {
        
        updateFeedingBar();
        return;
    }
    
    // evolve
    tomatoesFed = 0; 
    showExplosion();
    
    if (currentStage == 'baby') {
        currentStage = 'teen';
    }
    else if (currentStage == 'teen') {
        currentStage = 'adult';
    }
    else if (currentStage == 'adult') {
        
        alert('Dragon is fully grown!');
        return;
    }
    
    updateDisplay();
    updateFeedingBar();
    reloadDragonImage();
}

//display update
function updateDisplay() {
    var stageDiv = document.getElementById('evolution-stage');

    if (!stageDiv) return;

    if (currentStage == 'baby') {
        stageDiv.textContent = 'Stage: Baby Dragon';
    }
    else if (currentStage == 'teen') {
        stageDiv.textContent = 'Stage: Teen Dragon';
    }
    else if (currentStage == 'adult') {
        stageDiv.textContent = 'Stage: Adult Dragon';
    }
}


function getDragonImagePath() {
    if (currentStage == 'baby') {
        return babyImage;
    }
    else if (currentStage == 'teen') {
        return teenImage;
    }
    else if (currentStage == 'adult') {
        return adultImage;
    }
}


document.addEventListener('DOMContentLoaded', function() {
    
    updateDisplay();
    updateFeedingBar();
    
    // drag and drop feeding
    var tomato = document.getElementById('tomato');
    var p5container = document.getElementById('p5-container');

    if (tomato) {
        tomato.addEventListener('dragstart', function(e) {
            e.dataTransfer.setData('text/plain', 'tomato');
        });
    }

    if (p5container) {
        p5container.addEventListener('dragover', function(e) {
            e.preventDefault();
        });

        p5container.addEventListener('drop', function(e) {
            e.preventDefault();
            var data = e.dataTransfer.getData('text/plain');
            if (data === 'tomato') {
                
                evolveDragon();
            }
        });
    }
});
