$(function() {
    var charScore = [{ "char": "A", "value": 1 }, { "char": "B", "value": 3 }, { "char": "C", "value": 3 }, { "char": "D", "value": 2 }, { "char": "E", "value": 1 }, { "char": "F", "value": 4 }, { "char": "G", "value": 2 }, { "char": "H", "value": 4 }, { "char": "I", "value": 1 }, { "char": "J", "value": 8 }, { "char": "K", "value": 5 }, { "char": "L", "value": 1 }, { "char": "M", "value": 3 }, { "char": "N", "value": 1 }, { "char": "O", "value": 1 }, { "char": "P", "value": 3 }, { "char": "Q", "value": 1 }, { "char": "R", "value": 1 }, { "char": "S", "value": 1 }, { "char": "T", "value": 1 }, { "char": "U", "value": 1 }, { "char": "V", "value": 4 }, { "char": "W", "value": 4 }, { "char": "X", "value": 8 }, { "char": "Y", "value": 4 }, { "char": "Z", "value": 1 }];
    var chars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    var box = [
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""]
    ];
    //
    var tiles = document.getElementsByClassName("tile");
    //
    var selected = [];
    var textSelected = [];
    //
    var totalScore = 0;
    //
    function removeBlanks(array) {
        for (var i = array.length - 1; i >= 0; i--) {
            console.log(array[i]);
            if (array[i].toString().length < 1) {
                console.log("removing " + array[i].toString);
                array.splice(i, 1);
            }
            return array;
        }
    }
    // 
    function checkArray(array, value) {
        return array.indexOf(value) > -1;
    }
    //
    function unique(array) {
    return $.grep(array, function(el, index) {
        return index == $.inArray(el, array);
    });
}
    //
    Array.prototype.unique = function() {
            var arr = this;
            console.log(arr);
            return $.grep(arr, function(v, i) {
                return $.inArray(v, arr) === i;
            });
        }
        //
    function randLetters(row) {
        for (var i = 0; i < row.length; i++) {
            row[i] = chars[Math.floor((Math.random() * 25) + 0)];
        }
    }
    //
    //
    function getScore(letter) {
        for (var i = 0; i < charScore.length; i++) {
            if (charScore[i].char === letter) {
                return charScore[i].value;
            }
        }
    }
    //
    //
    function setGame() {
        for (var i = 0; i < box.length; i++) {

            randLetters(box[i]);
        }

        for (var n = 0; n < box.length; n++) {
            for (var i = 0; i < box[n].length - 1; i++) {
                box[n][i] = box[n][i] + "</div></td><td><div class='tile' id='" + n + "/" + i + "'>"
            }
            box[n] = "</div></td></tr><tr><td><div class='tile' id='" + n + "/0''>" + box[n].join("");
            document.getElementById("box").innerHTML = "<tbody><tr><td>" + box.join("") + "</tbody>";
        }

    }



    


    //
    //

    var checkWord = function(selection) {
        if (checkArray(wordlist, selection) === true) {
            var inputScore = 0;
            var word = selection.split("");
            for (var i = 0; i < word.length; i++) {
                inputScore += getScore(word[i]);
            };
            console.log(word.join("") + " scored " + inputScore);
            totalScore += inputScore;
            return true;
        } else {
            console.log("Not a word!");
            textSelected = [];
            selected = [];
            return false;
        }
    };

    //
    var collect = function() {
        console.log(selected);
        for (var i = 1; i < selected.length; i++){
            var id = selected[i].attr('id');
            console.log(id);
            if(id === selected[i - 1].attr('id')){
                selected.splice(selected[i - 1],1);
                console.log(selected[i -1] + " spliced")
            }
        }
        console.log(selected);
        selected = removeBlanks(selected);
        console.log(selected);
        for (var i = 0; i < selected.length; i++) {
            
                textSelected.push(selected[i].text());
                
                console.log(selected[i].attr('id') + " / typeof = " + typeof selected[i]);
                console.log(selected[i].text() + " / typeof = " + typeof selected[i].text());
        }
        text = removeBlanks(textSelected);
        selected = removeBlanks(selected.unique());
        console.log(selected);
        console.log(textSelected);
        return text;
    };
    //
    var moused = function(item) {
            var tile = item.children(".tile");
            tile.animate({
                backgroundColor: "rgba(64, 140, 255, 0.7)",
                border: "2px solid blue",
                color: "white"
            }, 300);
            tile.addClass("selected-tile");
            selected.push(tile);
        }
        //
    var popTile = function(cell){
        var coord = cell.position().top + cell.height();
        console.log(coord);
        cell.animate({
            width: "0px",
            height: "0px",
            borderWidth: "0px",
            fontSize: "0px",
            lineHeight: "0px"
        }, 200 );
        return coord; 
    };
    var dropTiles = function(cell, coord, movement){
        var oldFloor = cell.attr("bottom").parseInt(); 
        cell.animate({
            bottom: "20px"
        }, 200 * movement)
    }    
        //

    setGame();

    var isDown = false;
    $("td").mousedown(function() {
            isDown = true;
            moused($(this));
        })
        .mouseup(function() {
            isDown = false;
            var word = collect().join("");
            var scoreWord = checkWord(word);
            if (scoreWord === true){
                var tds = [];
                for (var i = 0; i < selected.length; i++) {
                    tds.push(popTile(selected[i]));
                }
                selected = [];
                textSelected = [];

            }else{
                $("#box").effect("shake", 15);
                $(".selected-tile").animate({
                    backgroundColor: "rgba(252,255,0,0.7)",
                    border: "2px solid black",
                    color: "black"
                }, 300)
                .addClass("tile");
                selected = [];
                textSelected = [];
            }

        })
    $("td").click(function() {

        if (isDown === true) {
            moused($(this));
            var tile = $(this).children(".tile");
        }

    });    


    $("td").mouseover(function() {

        if (isDown === true) {
            moused($(this));
            var tile = $(this).children(".tile");
        }

    });
// B / typeof = string
// new-script.js:113 undefined / typeof = object
// new-script.js:114  / typeof = string


});
