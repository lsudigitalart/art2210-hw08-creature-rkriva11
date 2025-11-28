// loads dragon image

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
                var imgHeight = 300;
                var x = p.width / 2 - imgWidth / 2;
                var y = p.height / 2 - imgHeight / 2;
                
                p.image(dragonImg, x, y, imgWidth, imgHeight);
            }
        };
    };

    new p5(sketch);
}

// Load the dragon image
function loadDragonForStage(p) {
    var imagePath = getDragonImagePath();
    
    p.loadImage(imagePath, function(img) {
        dragonImg = img;
    });
}

// Reload the image when the dragon evolves
function reloadDragonImage() {
    if (p5Instance) {
        loadDragonForStage(p5Instance);
    }
}
