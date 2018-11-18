var grassArr = [];
var season = prompt("Write any season");
var seasonText = document.getElementById("season")
 var a=0;
 function framerate(){
    if(z >= 0 && z < 50){
        a=30;
    }
    else if(z >= 50 && z < 100){
        a=2;
    }
    else if(z >= 100 && z < 150){
        a=40;
    }
    else if(z >= 150 && z <= 200){
        a=1;
    }
    else{
        a=40;
    }
 }
season = season.toLocaleLowerCase()
var c = 0;
if(season=="spring"){
    z=0;
}
else if(season=="summer"){
    z=100;
}
else if(season=="winter"){
    z=150;
}
else if(season=="fall" || season=="autumn"){
    z=50;
}
else{
    z=0;
}
var side = 15;
var matrix = [
    // [1, 0, 1, 0, 1],
    // [1, 0, 0, 0, 0],
    // [0, 1, 0, 1, 0],
    // [0, 0, 4, 3, 0],
    // [1, 1, 0, 0, 0],
    // [1, 1, 0, 0, 2],
    // [1, 1, 0, 0, 0]
];
var gishatichner = [];
var xotakerner = [];
var vorsord = [];
var mahh = [];
function setup() {

   
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {

                grassArr.push(new Grass(x, y, 1));
            }
            else if (matrix[y][x] == 2) {
                xotakerner.push(new Xotaker(x, y, 2));
            }
            else if (matrix[y][x] == 3) {
                gishatichner.push(new Gishatich(x, y, 3)); 

            }
            else if (matrix[y][x] == 4) {
                vorsord.push(new Vorsord(x, y, 4));

            }
            else if (matrix[y][x] == 5) {
                mahh.push(new Mah(x, y, 5));

            }
        }
    }

}

function draw() {
    framerate();
    frameRate(a);
    
    z++;
    if (z >= 0 && z < 50) {
        season = "spring";
        seasonText.innerHTML = "Spring"
        
        /*if (season == "spring" && grassArr.length == 0) {
            var a = Math.floor(Math.random() * g);
            var b = Math.floor(Math.random() * h);
            var gr = new Grass(a, b, 1);
            grassArr.push(gr);
        }*/
    }
    else if (z >= 50 && z < 100) {
        season = "autumn"
        seasonText.innerHTML = "Fall"
    }
    else if (z >= 100 && z < 150) {
        season = "summer"
        seasonText.innerHTML = "Summer"
    }
    else if (z >= 150 && z <= 200) {
        season = "winter"
        seasonText.innerHTML = "Winter"
        if (z == 200) {
            z = 0
        }
        
    }
    

    if (season == "winter") {
       
        for (var y = 0; y < matrix.length; y++) {

            for (var x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 1) {
                    fill("white");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 0) {
                    fill("#acacac");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 2) {
                    fill("#ccff66");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 3) {
                    fill("#33cccc");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 4) {
                    fill("#999966");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 5) {
                    fill("black");
                    rect(x * side, y * side, side, side);
                }
            }
        }
     
    }
    else if (season == "spring" ) {
        
        for (var y = 0; y < matrix.length; y++) {

            for (var x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 1) {
                    fill("green");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 0) {
                    fill("#acacac");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 2) {
                    fill("yellow");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 3) {
                    fill("red");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 4) {
                    fill("brown");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 5) {
                    fill("black");
                    rect(x * side, y * side, side, side);
                }
            }
        }
    }
    else if (season == "summer") {
       
        for (var y = 0; y < matrix.length; y++) {

            for (var x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 1) {
                    fill("green");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 0) {
                    fill("#acacac");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 2) {
                    fill("yellow");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 3) {
                    fill("red");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 4) {
                    fill("brown");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 5) {
                    fill("black");
                    rect(x * side, y * side, side, side);
                }
            }
        }
    }
    else if (season == "autumn" || season == "fall") {
       
        for (var y = 0; y < matrix.length; y++) {

            for (var x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 1) {
                    fill("#ff9900");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 0) {
                    fill("#acacac");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 2) {
                    fill("yellow");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 3) {
                    fill("red");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 4) {
                    fill("brown");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 5) {
                    fill("black");
                    rect(x * side, y * side, side, side);
                }
            }
        }
    }
    else {
        for (var y = 0; y < matrix.length; y++) {

            for (var x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 1) {
                    fill("green");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 0) {
                    fill("#acacac");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 2) {
                    fill("yellow");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 3) {
                    fill("red");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 4) {
                    fill("brown");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 5) {
                    fill("black");
                    rect(x * side, y * side, side, side);
                }
            }
        }
    }
    for (var i in grassArr) {
        grassArr[i].bazmanal();
    }
    for (var i in vorsord) {
        vorsord[i].eat();
    }
    for (var i in vorsord) {
        if (vorsord[i].energy >= 18) {
            vorsord[i].bazmanal()
        }
        else if (vorsord[i].energy <= 0) {
            vorsord[i].mahanal(i)
        }
    }
    for (var i in gishatichner) {
        gishatichner[i].eat();
    }
    for (var i in gishatichner) {
        if (gishatichner[i].energy >= 18) {
            gishatichner[i].bazmanal()
        }
        else if (gishatichner[i].energy <= 0) {
            gishatichner[i].mahanal(i)
        }
    }
    for (var i in xotakerner) {
        xotakerner[i].eat();

    }
    for (var i in xotakerner) {
        if (xotakerner[i].energy >= 10) {
            xotakerner[i].bazmanal();
        }
        else if (xotakerner[i].energy <= 0) {

            xotakerner[i].mahanal(i);
        }
    }

    for (var i in mahh) {
        mahh[i].eat();
    }
    for (var i in mahh) {
        if (mahh[i].energy >= 18) {
            mahh[i].bazmanal()
        }
        else if (mahh[i].energy <= 0) {
            mahh[i].mahanal(i)
        }
    }
}
var g = 50;

for (var y = 0; y < g; y++) {
    matrix.push([])
    for (var x = 0; x < g; x++) {
        matrix[y].push(0)
    }
}


for (var i = 0; i < 250; i++) {
    var a = Math.floor(Math.random() * g)
    var b = Math.floor(Math.random() * g)
    matrix[a][b] = 1
}

for (var i = 0; i < 40; i++) {
    var a = Math.floor(Math.random() * g)
    var b = Math.floor(Math.random() * g)
    matrix[a][b] = 2
}
for (var i = 0; i < 30; i++) {
    var a = Math.floor(Math.random() * g)
    var b = Math.floor(Math.random() * g)
    matrix[a][b] = 3
}
for (var i = 0; i < 30; i++) {
    var a = Math.floor(Math.random() * g)
    var b = Math.floor(Math.random() * g)
    matrix[a][b] = 4
}
for (var i = 0; i < 30; i++) {
    var a = Math.floor(Math.random() * g)
    var b = Math.floor(Math.random() * g)
    matrix[a][b] = 5
}
/*for (var y = 0; y < matrix.length; y++) {

        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("brown");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
        }
    } */