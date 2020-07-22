window.addEventListener("load", function(){
    
    //constants
    var GAME_WIDTH = 640;
    var GAME_HEIGHT = 360;

    //Keep the game going
    var gameLive = true;

    //current level
    var level = 1;
    var life = 5;

    //random color
    var color = "#" + ((1 << 24) * Math.random() | 0).toString(16);

    //enemies
    var enemies = [{
        x: 100, //x coordinate
        y: 100, //y coordinate
        speedY: 2, //speed in Y
        w: 40, //width
        h: 40, //height
    },
    {
        x: 200,
        y: 0, 
        speedY: 2,
        w: 40, 
        h: 40,  
    },
    {
        x: 330,
        y: 100, 
        speedY: 3,
        w: 40, 
        h: 40,  
    },
    {
        x: 450,
        y: 100, 
        speedY: -3,
        w: 40, 
        h: 40,  
    }];
    
    //the player object
    var player = {
        x: 10,
        y: 160,
    }
})