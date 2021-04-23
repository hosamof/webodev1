// main variables
var time, timer, m_color, SIZE = 9, SCORE = 0, H_SCORE = 0;
var correct = new Audio('assets/correct.wav'),
    wrong = new Audio('assets/wrong.wav'),
    game_over = new Audio('assets/game_over.wav'),
    clock = new Audio('assets/clock.wav');

$(function () {
    // hide game page 
    // $('#intro').hide();
    $('#game-box').hide();
    $('#game-over').hide();

    //when click type btn
    $('.type-btn').click(function (e) {
        // set game size 
        SIZE = $(this).attr('size');

        // hide intro page    
        $('#intro').hide();

        // show game page
        $('#game-box').show();

        // start game
        startGame();
    });

    // setup game over page buttons
    $('.home-btn').click(() => {
        // show intro page and hide game
        $('#intro').show();
        $('#game-over').hide();
        $('#game-box').hide();

        // stop the game
        stopGame();
    });
    $('#play-again-btn').click(() => {
        // show game box section in game page and hide game over
        $('#game-box').show();
        $('#game-over').hide();

        // start game
        startGame();
    });
});

// Game Begin Func
startGame = () => {
    // reset counters
    SCORE = 0;

    // setup boxes and its style
    setupBoxes();

    // set colors
    setColors();

    // set game boxes click listeners
    setGameBoxes();

    // start counter 
    startCounter();
}

// setup boxes Func
setupBoxes = () => {
    $('.game-frame').html('');
    for (let i = 0; i < SIZE; i++) {
        $('.game-frame').append('<div class="item"></div>');
    }
    if (SIZE == 25) {
        $('.game-frame').css('grid-template-columns', 'auto auto auto auto auto');
    } else if (SIZE == 16) {
        $('.game-frame').css('grid-template-columns', 'auto auto auto auto');
    } else {
        $('.game-frame').css('grid-template-columns', 'auto auto auto');
    }
}

// Colors Function
setColors = () => {
    // set main color index (with random index)      
    let m_index = Math.floor(Math.random() * SIZE);

    // set boxes colors    
    $('.game-frame .item').each(function (index) {
        // get random color
        let r = Math.floor(Math.random() * CSS_COLOR_NAMES.length);
        let c = CSS_COLOR_NAMES[r];
        // if the correct or main color => save it        
        if (index === m_index) {
            m_color = c;
            $('#color-box').css('background-color', c);
            $('#color-box').attr('game-color', c);
        }
        $(this).css('background-color', c);
        $(this).attr('game-color', c);
    });
}

// game boxes
setGameBoxes = () => {
    $('.game-frame .item').click(function (e) {
        // check if correct
        if ($(this).attr('game-color') == m_color) {
            // load right sound
            correct.currentTime = 0;
            correct.play();
            // increse score
            IncScore();
        } else {
            // load wrong sound
            wrong.currentTime = 0;
            wrong.play();

            // @TODO: Decrease score when wrong answer
        }

        // reset colors
        setColors();
    });
};
IncScore = () => {
    SCORE++;
    $('.time').html(`time: ${time}  -  score: ${SCORE}`);
}
// Timer Function
startCounter = () => {
    time = 60;
    clock.loop = true;
    clock.volume = 0.5;
    clock.play();
    $('.time').html(`time: ${time}  -  score: ${SCORE}`);
    timer = setInterval(() => {
        time--;
        $('.time').html(`time: ${time}  -  score: ${SCORE}`);
        if (time <= 0) {
            // stop the game
            stopGame(true);

            // setup score
            $('#score').html(SCORE);
            $('#high-score').html(`High Score is: ${H_SCORE}`);

        }
    }, 1000);
}

// game stop FUNC
stopGame = (withSound = false) => {
    // save score
    if (H_SCORE < SCORE) H_SCORE = SCORE;

    // stop timer
    clearInterval(timer);
    clock.pause();

    // stop game
    $('#game-box').hide();

    // load game over sound
    if (withSound) {
        game_over.currentTime = 0;
        game_over.play();
        $('#game-over').show();
    }
}

// ### CONSTANTS ###
// https://gist.github.com/bobspace/2712980
const CSS_COLOR_NAMES = [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGray",
    "DarkGrey",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "DarkOrange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkSlateGrey",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DimGray",
    "DimGrey",
    "DodgerBlue",
    "FireBrick",
    "FloralWhite",
    "ForestGreen",
    "Fuchsia",
    "Gainsboro",
    "GhostWhite",
    "Gold",
    "GoldenRod",
    "Gray",
    "Grey",
    "Green",
    "GreenYellow",
    "HoneyDew",
    "HotPink",
    "IndianRed",
    "Indigo",
    "Ivory",
    "Khaki",
    "Lavender",
    "LavenderBlush",
    "LawnGreen",
    "LemonChiffon",
    "LightBlue",
    "LightCoral",
    "LightCyan",
    "LightGoldenRodYellow",
    "LightGray",
    "LightGrey",
    "LightGreen",
    "LightPink",
    "LightSalmon",
    "LightSeaGreen",
    "LightSkyBlue",
    "LightSlateGray",
    "LightSlateGrey",
    "LightSteelBlue",
    "LightYellow",
    "Lime",
    "LimeGreen",
    "Linen",
    "Magenta",
    "Maroon",
    "MediumAquaMarine",
    "MediumBlue",
    "MediumOrchid",
    "MediumPurple",
    "MediumSeaGreen",
    "MediumSlateBlue",
    "MediumSpringGreen",
    "MediumTurquoise",
    "MediumVioletRed",
    "MidnightBlue",
    "MintCream",
    "MistyRose",
    "Moccasin",
    "NavajoWhite",
    "Navy",
    "OldLace",
    "Olive",
    "OliveDrab",
    "Orange",
    "OrangeRed",
    "Orchid",
    "PaleGoldenRod",
    "PaleGreen",
    "PaleTurquoise",
    "PaleVioletRed",
    "PapayaWhip",
    "PeachPuff",
    "Peru",
    "Pink",
    "Plum",
    "PowderBlue",
    "Purple",
    "RebeccaPurple",
    "Red",
    "RosyBrown",
    "RoyalBlue",
    "SaddleBrown",
    "Salmon",
    "SandyBrown",
    "SeaGreen",
    "SeaShell",
    "Sienna",
    "Silver",
    "SkyBlue",
    "SlateBlue",
    "SlateGray",
    "SlateGrey",
    "Snow",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "Wheat",
    "White",
    "WhiteSmoke",
    "Yellow",
    "YellowGreen",
];