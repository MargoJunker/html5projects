$(document).ready(function () {
    // Define Vars
    var canvas = $('#canvas')[0];
    var ctx = canvas.getContext("2d");
    var w = canvas.width;
    var h = canvas.height;
    var cw = 15;
    var d = "right";
    var food;
    var score;
    var speed = 130;

    // Snake Array
    var snake_array;

    // Initializer
    function init() {
        d="right";
        create_snake();
        createFood();
        score = 0;

        if (typeof game_loop != "undefined") clearInterval(game_loop);
        game_loop = setInterval(paint, speed);
    }
    
    init(); //Run Initializer

    // Create Snake
    function create_snake() {
        var length = 5;
        snake_array = [];
        for (var i = length - 1; i >= 0; i--) {
            snake_array.push({x: i, y: 0});
        }
    }
    
    // Create Food
    function createFood() {
        food = {
            x: Math.round(Math.random() * (w - cw) / cw),
            y: Math.round(Math.random() * (h - cw) / cw);
        }
    }
});