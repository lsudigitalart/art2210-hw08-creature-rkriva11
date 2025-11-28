//dragon evolution system

//dragon stages
var babyImage = 'Dragons/BabyMardi.png';
var teenImage = 'Dragons/TeenMardi.png';
var adultImage = 'Dragons/adultMardi.png';


var currentStage = 'baby';

//move to the next stage
function evolveDragon() {
    if (currentStage == 'baby') {
        currentStage = 'teen';
    }
    else if (currentStage == 'teen') {
        currentStage = 'adult';
    }
    else if (currentStage == 'adult') {
        currentStage = 'baby';
    }
    
    updateDisplay();
    reloadDragonImage();
}

//display update
function updateDisplay() {
    var stageDiv = document.getElementById('evolution-stage');
    var textDiv = document.getElementById('stage-text');
    
    if (currentStage == 'baby') {
        stageDiv.textContent = 'Stage: Baby Dragon';
        textDiv.textContent = 'Your dragon is still a baby!';
    }
    else if (currentStage == 'teen') {
        stageDiv.textContent = 'Stage: Teen Dragon';
        textDiv.textContent = 'Your dragon is growing up!';
    }
    else if (currentStage == 'adult') {
        stageDiv.textContent = 'Stage: Adult Dragon';
        textDiv.textContent = 'Your dragon has reached its full potential!';
    }
}

// gets image
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
    var evolveBtn = document.getElementById('evolveBtn');
    
    evolveBtn.addEventListener('click', evolveDragon);
    
    updateDisplay();
});
