var canvas = document.getElementById("canvas");
var processing = new Processing(canvas, function(processing) {
    processing.size(400, 400);
    processing.background(0xFFF);
    var mouseIsPressed = false;
    processing.mousePressed = function () {
        mouseIsPressed = true;
    };
    processing.mouseReleased = function () {
        mouseIsPressed = false;
    };
    var keyIsPressed = false;
    processing.keyPressed = function () {
        keyIsPressed = true;
    };
    processing.keyReleased = function () {
        keyIsPressed = false;
    };
    function getImage(s) {
        var url = "https://www.kasandbox.org/stylesheets/"
          + "scratchpads-exec-package/images/" + s + ".png";
        processing.externals.sketch.imageCache.add(url);
        return processing.loadImage(url);
    }
    with (processing) {

        // INSERT YOUR CODE HERE

        var Obstnum = 100;
        var Artnum = 3;
        var Traveler = { a: 0, b: 0 };
        var Astat = { xmin: 1000, xmax: -1000, ymin: -1000, ymax: 1000, hmin: 200, hmax: 300, vmin: 10, vmax: 400, cmin: 10, cmax: 300 };
        var Ostat = { xmin: 1000, xmax: -1000, ymin: -1000, ymax: 1000, hmin: 200, hmax: 300, vmin: 10, vmax: 400, cmin: 10, cmax: 300 };
        var Araobst = [];
        var Artplace = [];
        var Art = function (x, y, width, height, col) {
            this.x = x;
            this.y = y;
            this.col = col;
        };
        var Obst = function (x, y, width, height, col) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.col = col;
        };
        for (var i = 0; i < Artnum; i += 1) {
            Artplace[i] = new Art(random(Astat.xmin, Astat.xmax), random(Astat.ymin, Astat.ymax), random(Astat.cmin, Astat.cmax));
        }
        for (var i = 0; i < Obstnum; i += 1) {
            Araobst[i] = new Obst(random(Ostat.xmin, Ostat.xmax), random(Ostat.ymin, Ostat.ymax), random(Ostat.hmin, Ostat.hmax), random(Ostat.vmin, Ostat.vmax), random(Ostat.cmin, Ostat.cmax));
        }
        var Bob = new Obst(random(Ostat.xmin, Ostat.xmax), random(Ostat.ymin, Ostat.ymax), random(Ostat.hmin, Ostat.hmax), random(Ostat.vmin, Ostat.vmax), random(Ostat.cmin, Ostat.cmax));
        Art.prototype.draw = function () {
            fill(235, 131, 12);
            ellipse(this.x + Traveler.a, this.y + Traveler.b, 20, 20);
        };
        Obst.prototype.draw = function () {
            fill(100, this.col, 0);
            rect(this.x + Traveler.a, this.y + Traveler.b, this.width, this.height);
            if (this.x + Traveler.a + this.width > 175 && this.x + Traveler.a < 225 && this.y + Traveler.b + this.height > 175 && this.y + Traveler.b < 225) {
                fill(255, 0, 0);
                text("obama", 300, 200);
                if (keyCode === 39) {
                    Traveler.a = Traveler.a + 1;
                }
                if (keyCode === 37) {
                    Traveler.a = Traveler.a - 1;
                }
                if (keyCode === 40) {
                    Traveler.b = Traveler.b + 1;
                }
                if (keyCode === 38) {
                    Traveler.b = Traveler.b - 1;
                }
            }
        };
        var draw = function () {
            background(42, 0, 69);
            fill(9, 0, 255);
            rect(175, 175, 50, 50);
            Bob.draw();
            for (var i = 0; i < Obstnum; i += 1) {
                Araobst[i].draw();
            }
            for (var i = 0; i < Artnum; i += 1) {
                Artplace[i].draw();
            }
            if (keyIsPressed) {
                fill(255, 0, 0);
                text(keyCode, 200, 200);
                if (keyCode === 39) {
                    Traveler.a = Traveler.a - 1;
                }
                if (keyCode === 37) {
                    Traveler.a = Traveler.a + 1;
                }
                if (keyCode === 40) {
                    Traveler.b = Traveler.b - 1;
                }
                if (keyCode === 38) {
                    Traveler.b = Traveler.b + 1;
                }
            }
        };

        // END OF YOUR CODE HERE
    }
    if (typeof draw !== 'undefined') processing.draw = draw;
});
