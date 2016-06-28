$(function() {
    var charScore = [{ "char": "A", "value": 1 }, { "char": "B", "value": 3 }, { "char": "C", "value": 3 }, { "char": "D", "value": 2 }, { "char": "E", "value": 1 }, { "char": "F", "value": 4 }, { "char": "G", "value": 2 }, { "char": "H", "value": 4 }, { "char": "I", "value": 1 }, { "char": "J", "value": 8 }, { "char": "K", "value": 5 }, { "char": "L", "value": 1 }, { "char": "M", "value": 3 }, { "char": "N", "value": 1 }, { "char": "O", "value": 1 }, { "char": "P", "value": 3 }, { "char": "Q", "value": 1 }, { "char": "R", "value": 1 }, { "char": "S", "value": 1 }, { "char": "T", "value": 1 }, { "char": "U", "value": 1 }, { "char": "V", "value": 4 }, { "char": "W", "value": 4 }, { "char": "X", "value": 8 }, { "char": "Y", "value": 4 }, { "char": "Z", "value": 1 }];
    var chars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "E", "I", "O", "U", "Y", "R", "L", "S", "T", "N"];

    var box = [
        ["", "", "", "D", "O", "G", "", "", "", ""],
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
            // console.log(arr);
            return $.grep(arr, function(v, i) {
                return $.inArray(v, arr) === i;
            });
        }
        //
    function randLetters(row) {
        for (var i = 0; i < row.length; i++) {
            if (row[i] === "") {
                row[i] = chars[Math.floor((Math.random() * chars.length) + 0)];
            }
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
                box[n][i] = box[n][i] + "</div></td><td id='td" + n + "/" + (i + 1) + "''><div class='tile' id='" + n + "/" + (i + 1) + "'>"
            }

            box[n] = "</div></td></tr><tr><td id='td" + n + "/" + 0 + "''><div class='tile' id='" + n + "/" + 0 + "''>" + box[n].join("");
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
            $(".selected-tile").each(function(t) {
                $(this).removeClass("selected-tile");
                $(this).addClass("tile");
                $(this).animate({
                    backgroundColor: "rgba(252,255,0,0.7)",
                    border: "2px solid black",
                    color: "black"
                }, 300);
            });
            textSelected = [];
            selected = [];
            return false;
        }
    };

    //
    var collect = function() {
        selected = removeBlanks(selected.unique());

        var newSelected = [];

        console.log(selected);
        for (var i = 0; i < selected.length; i++) {
            if (selected[i].attr("id") !== undefined) {
                if (selected[i].text() !== "") {
                    newSelected.push({ "div": selected[i].attr("id"), "text": selected[i].text(), "index": i, "jq": selected[i] });
                }
            }
        }

        var newtext = [];

        console.log(newSelected);
        for (var i = 0; i < newSelected.length; i++) {
            if (newSelected[i] === undefined) {
                console.log("misfire @ " + newSelected[i]);
            } else {
                console.log("input correct @ " + newSelected[i]);
                newtext.push(newSelected[i].text);
            }
        }
        // console.log("newtext = " + newtext);
        //
        // arr = jQuery.map(arr, function(n, i) {
        //     return (n.toUpperCase() + i);
        // });


        //


        //
        //
        // var groups = _.groupBy(selected, 1);
        // var result = _.map(divsSelected, function (i) { return groups[i].shift(); });

        // for (var i = 0; i < result.length; i++){
        //     console.log(result[i].text());
        // }
        // 
        text = removeBlanks(newtext);

        selected = removeBlanks(selected.unique());
        // console.log(selected);
        console.log("text =" + text);
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
            tile.removeClass("tile");
            tile.addClass("selected-tile");
            selected.push(tile);
        }
        //
    var popTile = function(cell) {
        console.log("popTile cell id = " + cell.attr("id"));
        $(".selected-tile").each(function(t) {
            $(this).animate({
                width: "0px",
                height: "0px",
                borderWidth: "0px",
                fontSize: "0px",
                lineHeight: "0px"
            }, 200);
        });
        if (cell.attr("id") !== undefined) {
            var coord = {
                "bottom": cell.position().top + cell.height(),
                "left": cell.position().left + cell.width(),
                "row": parseInt(cell.attr("id").split("/")[0]),
                "col": parseInt(cell.attr("id").split("/")[1]),
                "char": cell.text(),
                "tile": cell,
                "td": cell.parent()
            };
            console.log(coord);

            return coord;
        } else {
            return 0;
        }

    };


    function newRando(td, row, col) {
        var letter = chars[Math.floor((Math.random() * chars.length) + 0)];
        var cell = $(document.getElementById("td" + row + "/" + col));
        cell.html("<div class='new-tile'></div>");
        var newtile = td.children(".new-tile");
        console.log(newtile.text());
        newtile.animate({
            width: "100%",
            height: "100%",
            fontSize: "19px",
            lineHeight: "45px",
            color: "black",
            border: "2px solid #000",
            borderRadius: "10%"
        }, 300);
        newtile.animate({
            backgroundColor: "rgba(252,255,0,0.7)"
        }, 450);
        setTimeout(function() {
           td.html("<div class='tile' id='" + row + "/" + col + "''>" + letter + "</div>"); 
        }, 500)

    }

    var topRowTiles = function(coord){
        var cell = $(document.getElementById(coord.td));
        
    }
    

    var dropTiles = function(coord) {
        var slid = false;
        var upper = document.getElementById((coord.row - 1) + "/" + coord.col);
        var upCell = $(document.getElementById((coord.row - 1) + "/" + coord.col));
        var upTD = $(upper).parent();
        console.log("upcell text = " + upCell.text());
        var downSlide = (coord.bottom - (upCell.position().top)) + 14 + "px";
        // var downSlide = "47px";
        console.log(downSlide);

        // console.log(upTD.attr("id"));
        var char = upCell.text();
        // newRando(upTD, (coord.row - 1), coord.col);
        
        $(upper).animate({
                top: downSlide
            }, 300);

        setTimeout(function() {
            console.log("timer running");
            console.log("slid = true")
            var currentTD = $(document.getElementById("td" + (coord.row) + "/" + coord.col));
            currentTD.html("<div class='tile' id='" + (coord.row) + "/" + coord.col + "'>" + char + "</div");
            newRando(upTD, (coord.row - 1), coord.col);
            slid = false;
        }, 400);
        // console.log(slid);
        // if (slid === true) {
                // console.log("slid = true")
                // var currentTD = $(document.getElementById("td" + (coord.row) + "/" + coord.col));
                // currentTD.html("<div class='tile' id='" + (coord.row) + "/" + coord.col + "'>" + char + "</div");
                // newRando(upTD, (coord.row - 1), coord.col);
                // slid = false;
        // }
    }


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
            if (scoreWord === true) {
                var tds = [];
                for (var i = 0; i < selected.length; i++) {
                    tds.push(popTile(selected[i]));
                }
                for (var i = 0; i < tds.length; i++) {
                    if (tds[i].row > 0) {
                        dropTiles(tds[i]);
                    }else if(tds[i].row === 0){
                        newRando(tds[i].td, tds[i].row, tds[i].col);
                    }

                }

                // setTimeout(function() {
                //     $(".selected-tile").each(function(t) {
                //         $(this).parent("td").html(
                //             "<div class='tile' id='" + $(this).children(".tile").attr("id") + "'>" +  "</div>"
                //             )
                //     });
                // }, 500)
                selected = [];
                textSelected = [];



            } else {
                $("#box").effect("shake", 15);
                $(".selected-tile").each(function(t) {
                    $(this).removeClass("selected-tile")
                    $(this).addClass("tile")
                });
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



});
