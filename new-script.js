$(function() {
    var charScore = [
        { "char": "A", "value": 100 }, { "char": "B", "value": 300 }, { "char": "C", "value": 300 },
        { "char": "D", "value": 200 }, { "char": "E", "value": 100 }, { "char": "F", "value": 400 },
        { "char": "G", "value": 200 }, { "char": "H", "value": 400 }, { "char": "I", "value": 100 },
        { "char": "J", "value": 800 }, { "char": "K", "value": 500 }, { "char": "L", "value": 100 },
        { "char": "M", "value": 300 }, { "char": "N", "value": 100 }, { "char": "O", "value": 100 },
        { "char": "P", "value": 300 }, { "char": "Q", "value": 1000 }, { "char": "R", "value": 100 },
        { "char": "S", "value": 100 }, { "char": "T", "value": 100 }, { "char": "U", "value": 100 },
        { "char": "V", "value": 400 }, { "char": "W", "value": 400 }, { "char": "X", "value": 800 },
        { "char": "Y", "value": 400 }, { "char": "Z", "value": 1000 }
    ];

    var chars = [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
        "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "E", "I", "O", "U", "Y", "R", "L", "S", "T", "N",
        "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "A", "A", "A", "A", "A", "A", "A",
        "A", "A", "I", "I", "I", "I", "I", "I", "I", "I", "I", "O", "O", "O", "O", "O", "O", "O", "O", "N",
        "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "R", "T", "T", "T", "T", "T", "T", "L", "L", "L",
        "L", "S", "S", "S", "S", "U", "U", "U", "U", "D", "D", "D", "D", "G", "G", "G", "B", "B", "C", "C",
        "M", "M", "P", "P", "F", "F", "H", "H", "V", "V", "W", "W", "Y", "Y", "K", "J", "X", "Q", "Z"
    ];

    var box = [
        { "char": "", "index": 0 }, { "char": "", "index": 1 }, { "char": "", "index": 2 }, { "char": "", "index": 3 }, { "char": "", "index": 4 }, { "char": "", "index": 5 }, { "char": "", "index": 6 }, { "char": "", "index": 7 }, { "char": "", "index": 8 }, { "char": "", "index": 9 },
        { "char": "", "index": 10 }, { "char": "", "index": 11 }, { "char": "", "index": 12 }, { "char": "", "index": 13 }, { "char": "", "index": 14 }, { "char": "", "index": 15 }, { "char": "", "index": 16 }, { "char": "", "index": 17 }, { "char": "", "index": 18 }, { "char": "", "index": 19 },
        { "char": "", "index": 20 }, { "char": "", "index": 21 }, { "char": "", "index": 22 }, { "char": "", "index": 23 }, { "char": "", "index": 24 }, { "char": "", "index": 25 }, { "char": "", "index": 26 }, { "char": "", "index": 27 }, { "char": "", "index": 28 }, { "char": "", "index": 29 },
        { "char": "", "index": 30 }, { "char": "", "index": 31 }, { "char": "", "index": 32 }, { "char": "", "index": 33 }, { "char": "", "index": 34 }, { "char": "", "index": 35 }, { "char": "", "index": 36 }, { "char": "", "index": 37 }, { "char": "", "index": 38 }, { "char": "R", "index": 39 },
        { "char": "", "index": 40 }, { "char": "", "index": 41 }, { "char": "", "index": 42 }, { "char": "", "index": 43 }, { "char": "", "index": 44 }, { "char": "", "index": 45 }, { "char": "", "index": 46 }, { "char": "", "index": 47 }, { "char": "", "index": 48 }, { "char": "A", "index": 49 },
        { "char": "", "index": 50 }, { "char": "", "index": 51 }, { "char": "", "index": 52 }, { "char": "", "index": 53 }, { "char": "", "index": 54 }, { "char": "", "index": 55 }, { "char": "", "index": 56 }, { "char": "", "index": 57 }, { "char": "", "index": 58 }, { "char": "C", "index": 59 },
        { "char": "", "index": 60 }, { "char": "", "index": 61 }, { "char": "", "index": 62 }, { "char": "", "index": 63 }, { "char": "", "index": 64 }, { "char": "", "index": 65 }, { "char": "", "index": 66 }, { "char": "", "index": 67 }, { "char": "", "index": 68 }, { "char": "E", "index": 69 },
        { "char": "", "index": 70 }, { "char": "", "index": 71 }, { "char": "", "index": 72 }, { "char": "", "index": 73 }, { "char": "", "index": 74 }, { "char": "", "index": 75 }, { "char": "", "index": 76 }, { "char": "", "index": 77 }, { "char": "", "index": 78 }, { "char": "C", "index": 79 },
        { "char": "", "index": 80 }, { "char": "", "index": 81 }, { "char": "", "index": 82 }, { "char": "", "index": 83 }, { "char": "", "index": 84 }, { "char": "", "index": 85 }, { "char": "", "index": 86 }, { "char": "", "index": 87 }, { "char": "", "index": 88 }, { "char": "A", "index": 89 },
        { "char": "", "index": 90 }, { "char": "", "index": 91 }, { "char": "", "index": 92 }, { "char": "", "index": 93 }, { "char": "", "index": 94 }, { "char": "", "index": 95 }, { "char": "", "index": 96 }, { "char": "", "index": 97 }, { "char": "", "index": 98 }, { "char": "R", "index": 99 }
    ];

    var dirList = [];

    var tileCount = 100;

    var totalScore = 0;

    var size = 0;

    
    
    

    var currLeft = 0;
    var currTop = 0;

    var randLetter = function() {
        return chars[Math.floor((Math.random() * chars.length) + 0)];
    }

    var randLetters = function() {
        for (var i = 0; i < box.length; i++) {
            if (box[i].char === "") {
                box[i].char = randLetter();
            }
        }
    }

    var preSetWords = function() {

        var setWords = [];
        var len = presets.length;
        for (var i = 0; i < 15; i++) {
            var newWord = presets[Math.floor((Math.random() * len) + 5)];
            setWords.push(newWord);
        }

        return setWords;
    };


    var arrangeWords = function() {
        var setWords = preSetWords();
        for (var i = 0; i < setWords.length; i++) {
            var word = setWords[i].split("");

            var curr = randCell();

            curr.char = word[0];
            for (var n = 1; n < word.length; n++) {
                if (dirCheck(curr.index) === true) {
                    curr = box[curr.index + switchRoll()];
                    box[curr.index].char = word[n];
                }
                //
            }
        }
    }

    var randCell = function() {
        // var blank = false;
        // while (blank === false) {
        var cell = box[Math.floor((Math.random() * box.length) + 1)];
        // if (cell.char === "") {
        //     blank = true;
        //     break;

        return cell;
        //     }
        // }
    };

    var quadRoll = function() {
        var result = Math.floor((Math.random() * 8) + 1);
        return result;
    }

    var switchRoll = function() {
        var move = 0;
        switch (quadRoll()) {
            case 1:
                move = -11;
                break;
            case 2:
                move = -1;
                break;
            case 3:
                move = 9;
                break;
            case 4:
                move = -10;
                break;
            case 5:
                move = 10;
                break;
            case 6:
                move = -9;
                break;
            case 7:
                move = 1;
                break;
            case 8:
                move = 11;
        }
        return move;
    }

    //

    var dirCheck = function(cell) {
        if (cell % 10 === 0 || cell < 10 || cell > 90 || (cell - 9) % 10 === 0) {
            return false;
        } else {
            return true;
        }
    }
    var cellCheck = function(cell) {
            if (cell.char === "") {
                return true;
            } else {
                return false;
            }
        }
        //
    var currentWord = function(){
        var curr = jQuery.unique(selected);
            curr = curr.map(function(s) {
                return s.text();
            }).join(" ");
        $("#current-word").text(curr);
         

    }

    var currentMove = function(){
        var selection = jQuery.unique(selected);
        moves = selected.map(function(s) {
            return ({"top" : s.position().top, "left" : s.position().left});
        })
        if (moves.length > 1){
            for (var i = 1; i < moves.length; i ++){
                var yMove = Math.abs(moves[i].top - moves[i - 1].top);
                console.log("currentMove yMove = " + yMove);
                var xMove = Math.abs(moves[i].left - moves[i - 1].left);
                console.log("currentMove xMove = " + xMove);
                if (yMove > (downMax)){
                    $("#current-word").text("Cannot Backtrack on tiles!");
                    $("#content").effect("shake", 15);
                    isDown = false;
                } 
                if (xMove > (rightMax) ){
                    $("#current-word").text("Cannot Backtrack on tiles!");
                    $("#content").effect("shake", 15);
                    isDown = false;
                } 
            }
        }
    }



    //    

    var setGame = function() {
        arrangeWords();
        randLetters();
        for (var i = 0; i < box.length; i++) {
            var col = $("#col" + (Math.floor(i / 10)).toString());
            $(col).append("<div id =" + i + " class='letter-tile'><text>" + box[i].char + "</text></div>");
        }
        $(".column").each(function(t){
            $(this).append("<div class=\"blank-tile\">&nbsp;</div>")
        })

    }

    setGame();

    var downMax = $('#0').height();
    var upMax = 0 - downMax;
    var rightMax = $('#0').width();
    var leftMax = 0 - rightMax;
    console.log("downmax = " + downMax + ", upMax = " + upMax + ", rightMax = " + rightMax + ", leftMax = " + leftMax);

    var moused = function(tile) {

            tile.animate({
                backgroundColor: "rgba(64, 140, 255, 1)",
                // border: "2px solid blue",
                color: "white"
            }, 300);
            tile.removeClass("letter-tile");
            tile.addClass("selected-tile");
            
        }
        //


    var unmoused = function() {
        $(".selected-tile").each(function() {
            $(this).animate({
                backgroundColor: "rgba(252,255,0,1)",
                color: "black"
            }, 300);
            $(this).removeClass("selected-tile")
            $(this).addClass("letter-tile");
        })
    };

    var selected = [];
    var moves = [];
    var multiplier = 1;

    var collect = function() {

        selected = jQuery.unique(selected);
        
        var letters = selected.map(function(s) {
            return s.text();
        })
        // $("#current-word").text(letters.join(" "));
        letters = letters.join("");
        size = letters.length;
        selected = [];
        checkMovement(moves);
        if (checkWord(letters) === true) {
            popTile();
            
        };
        moves = [];
        multiplier = 1;

    }

    var checkMovement = function(arr) {
        var bonus = 0;
        for (var i = 1; i < arr.length; i++){
             var yMove = arr[i].top - arr[i - 1].top;
             var xMove = arr[i].left - arr[i - 1].left;   
             //northeast 
             if(xMove < 0 && yMove < 0){
                bonus += 0.3;
             }
             //due north
             if(xMove === 0 && yMove < 0){
                bonus += 0.2;
             }
             //northwest
             if(xMove > 0 && yMove < 0){
                bonus += 0.25;
             }
             //due west
             if(xMove < 0 && yMove === 0){
                bonus += 0.2;
             }
             //due east
             if(xMove > 0 && yMove === 0){
                bonus += 0;
             }
             //southwest
             if(xMove < 0 && yMove > 0){
                bonus += 0.25;
             }
             //due south
             if(xMove === 0 && yMove > 0){
                bonus += 0;
             }
             //southeast
             if(xMove > 0 && yMove > 0){
                bonus += 0.15;
             }

             console.log("X: " + xMove + ", Y: " + yMove);

        }
        multiplier += bonus;
        console.log("multiplier = " + multiplier)
    }

    var getScore = function(letter) {
        for (var i = 0; i < charScore.length; i++) {
            if (charScore[i].char === letter) {
               
                return Math.floor(charScore[i].value * multiplier);
            }
        }
    }

    var checkArray = function(array, value) {
        return array.indexOf(value) > -1;
    }

    var checkWord = function(selection) {
        if (checkArray(wordlist, selection) === true) {
            var inputScore = 0;
            var word = selection.split("");
            for (var i = 0; i < word.length; i++) {
                inputScore += getScore(word[i]);
            };

            $("#current-word").text(word.join("") + " scored " + inputScore + "!");
            totalScore += inputScore;
            $("#score").text("Score: " + totalScore);
            return true;
        } else {
            $("#current-word").text("Not a word!");
            $("#content").effect("shake", 15);
            return false;
        }
    };

    var popTile = function() {
        i = 0;

        $(".selected-tile").each(function(t) {

            tileCount++;
            i += 30;

            var goneTile = $(this);
            var height = $(this).position().top + $(this).height();
            var col = $(this).parent().attr("id");
            var colHeight = $("#" + col).position().top + $("#" + col).height();

            $(this).animate({
                color: "transparent",
                backgroundColor: "white",
                boxShadow: "inset 0px 0px 0px 0px #fff",
                height: "50%",
                // marginBottom: "1%"
            }, 400)

            setTimeout(function() {
                goneTile.remove();

            }, 430);


            var newID = ((tileCount + i) * Math.floor(Math.random() * 10000));
            $("#" + col).css({
                    bottom: "0"
                })

            // console.log(col + " top = " + $(this).parent().position().top + " before prepend");
            setTimeout(function() {
                var newTile = "<div id =\"" + newID + "\" class=\"letter-tile\"><text>" + randLetter() + "</text></div>";
                $("#" + col).prepend(newTile);
                
                // tile.addClass("letter-tile");

            }, 700);
            isDown = false;
        });





    };








    var isDown = false;

    $(document).on("mouseover", ".selected-tile", function() {
        if (isDown === true) {
            console.log($(this).attr("id") + " remoused")
        }
    });


    $(document).on("mousedown", ".letter-tile", function() {
        isDown = true;
        moused($(this));
        selected.push($(this));
        currentWord();
        // currentMove();
    });

    $(document).on("click", ".letter-tile", function() {
        if (isDown === true) {
            moused($(this));
            selected.push($(this));
            currentWord();
            // currentMove();
        }
    });
    $(document).on("mouseover", ".letter-tile", function() {
        if (isDown === true) {
            moused($(this));
            selected.push($(this));
            currentWord();
            // currentMove();

        } else {
            $(this).animate({
                backgroundColor: "rgba(252,204,0,1)",
                border: "2px solid #fcff00",
                color: "black"

            }, 20);
        }
    });
    $(document).on("mouseup", function() {
        isDown = false;
        collect();
        unmoused();
    });
    $(document).on("mouseout", ".letter-tile", function() {
        if (isDown === false) {
            $(this).animate({
                backgroundColor: "rgba(252,255,0,1)",
                border: "2px solid #000",
                color: "black"
            }, 20);
        }
    })

    $(window).resize(function(){
        var w = window.innerWidth;
        var h = window.innerHeight;
        console.log(w + "/" + h)
    })

});
