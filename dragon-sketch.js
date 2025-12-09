

var dragonImg = null;
var p5Instance = null;

function setup() {
    var container = document.getElementById('p5-container');
    
    var sketch = function(p) {
        p.setup = function() {
            var width = container.offsetWidth;
            var height = 500;
            var canvas = p.createCanvas(width, height);
            canvas.parent('p5-container');
            
            p.background(245);
            p5Instance = p;
            
            loadDragonForStage(p);
        };

        p.draw = function() {
            p.background(245);
            
            if (dragonImg) {
               
                var imgWidth = 300;
                if (typeof currentStage !== 'undefined') {
                    if (currentStage == 'baby') imgWidth = 160;
                    else if (currentStage == 'teen') imgWidth = 260;
                    else if (currentStage == 'adult') imgWidth = 320;
                }

                
                var imgHeight = imgWidth;
                if (dragonImg && dragonImg.width) {
                    imgHeight = (dragonImg.height / dragonImg.width) * imgWidth;
                }
                var x = p.width / 2 - imgWidth / 2;
                var y = p.height / 2 - imgHeight / 2;
                
                p.image(dragonImg, x, y, imgWidth, imgHeight);
            }
        };
    };

    new p5(sketch);
}


function loadDragonForStage(p) {
    var imagePath = getDragonImagePath();
    
    p.loadImage(imagePath, function(img) {
        dragonImg = img;
    });
}


function reloadDragonImage() {
    if (p5Instance) {
        loadDragonForStage(p5Instance);
    }
}
