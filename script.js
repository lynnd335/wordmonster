$(function() {
    var chars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var words = [
        "AIRPLANE", "TOASTER", "EXPLOSION", "BILLBOARD", "RAILROAD",
        "NUCLEAR", "BURRITO", "TSUNAMI", "TORNADO", "HAIRGEL", "LINOLEUM",
        "LAPTOP", "MOUSEPAD", "CONCATENATE", "INTERNETS", "MILKSHAKE", "MICROWAVE"
    ];

    var box = [
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
    ];
    // console.log(box.length);
    // console.log(box[0].length)
    //
    var usedRows = [];
    //
    var usedCells = [];
    //
    //
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
    //
    var findIntersection = function(wordInput, priorlist) {
            for (var i = 0; i < priorlist.length; i++) {
                var iWord = wordInput.split("")[0];
                var pWord = priorlist[i].split("");
                for (var n = 0; n < pWord.length; n++) {
                    if (inArray(iWord, pWord[i]) === true) {
                        var loc = findCell(pWord.join(""), pWord[i]);
                        console.log("findIntersection loc = " + loc);
                        break;
                    }
                    return loc;
                }
            }
        }
        //
    var findCell = function(wordInput, char) {
            var obj = [];
            usedCells.filter(function(cell) {
                if (char === cell.char && wordInput === cell.word) {
                    console.log(cell['word'] + ":" + cell['char'] + " - " + cell['row'] + "/" + cell['col']);
                    obj.push(cell['row']);
                    obj.push(cell['col']);
                }
            })
            return obj;
        }
        //

    var getMaxLength = function(arr) {
            return arr.reduce(function(a, b) {
                return a.length > b.length ? a : b;
            }).length;
        }
        //

    function inArray(array, value) {
        return array.indexOf(value) > -1;
    }

    //

    var randX = function(max) {
        var row = Math.floor((Math.random() * max));

        return row;
    }

    var randY = function(max) {
        var col = Math.floor((Math.random() * max));
        console.log("randY func col = " + col);
        return col;
    }

    //

    var roll = function() {
            var result = Math.floor(Math.random() * 10);
            return result;
        }
        //
    function randLetters(row) {
        for (var i = 0; i < row.length; i++) {
            if (row[i] === "") {
                row[i] = "x";
                // row[i] = chars[Math.floor((Math.random() * 25) + 0)];

            }
        }
    }
    //
    //
    var divWords = function(segment) {
            var x1 = Math.round(words.length / 3);
            console.log("x1 = " + x1);
            var x2 = x1 + 1 + x1;
            var x3 = x2 + 1 + x1;
            if (segment === 1) {
                return words.slice(0, x1);
            }
            if (segment === 2) {
                return words.slice(x1, x2);
            }
            if (segment === 3) {
                return words.slice(x3, words.length);
            }

        }
        //
        //
    function setGame() {
        //
        shuffleArray(words);
        //
        var words1 = divWords(1);
        console.log(words1);
        //
        for (var x = 0; x < words1.length; x++) {
            console.log(words1[x]);
            //
            var longest = getMaxLength(words1);
            //
            var row = randX(box.length);
            while (inArray(usedRows, row) === true) {
                console.log('row conflict');
                row = randX(box.length);
            }
            //
            //
            var col = randY(longest);
            //
            //
            //
            var dir = roll();
            var word = words1[x].split("");


            // console.log("row-col = " + [row]) + "/" + [col];
            for (var i = 0; i < word.length; i++) {

                box[row][col + i] = word[i];
                console.log(word[i] + "/horizontal/" + [row] + "-" + [col + i]);
                console.log("------------");
                usedCells.push({ 'word': words1[x], 'char': word[i], 'row': row, 'col': col + i });

            }
            usedRows.push(row);
        }
        //
        var used = [];
        var cells = usedCells.map(function(cell) {
            used.push(cell['word'] + ":" + cell['char'] + " - " + cell['row'] + "/" + cell['col']);
        });
        console.log(used);
        //
        var words2 = divWords(2);
        //
        for (var x = 0; x < words2.length; x++) {
            console.log(words2[x]);
            //
            var longest = getMaxLength(words2);
            //
            var row = randX(longest);
            //
            var col = randY(box[0].length);
            //
            while (inArray(usedCells, { row: [row], col: [col] }) === true) {
                var row = randX(longest);
                var col = randY(box[0].length);
            };
            //
            console.log("vertical set game col = " + col);
            //
            var dir = roll();
            var word = words2[x].split("");

            // if (x % 2 === 0){
            var cell = findIntersection(words2[x], words1);
            console.log('findIntersection cell = ' + cell);
            if (typeof cell !== 'undefined') {
                console.log(cell);
                // row = cell[0];
                col = cell[1];
            }
            // }

            // console.log("row-col = " + [row]) + "/" + [col];
            for (var i = 0; i < word.length; i++) {
                box[row + i][col] = word[i];


                console.log(word[i] + "/vertical/" + [row + i] + "-" + [col]);
                console.log("------------")
                usedCells.push({ 'word': words2[x], 'char': word[i], 'row': row + i, 'col': col });
                if (inArray(usedCells, { row: box[row + i], col: [col] }) === true) {
                    console.log('overwrite');
                }
            }
        }

        var used = [];
        var cells = usedCells.map(function(cell) {
            used.push(cell['word'] + ":" + cell['char'] + " - " + cell['row'] + "/" + cell['col']);
        });
        console.log(used);

        var words3 = divWords(3);
        //
        for (var x = 0; x < words3.length; x++) {
            console.log(words3[x]);
            //
            var longest = getMaxLength(words3);
            //
            var row = randX(longest);

            //
            var col = randY(longest);
            //

            //

            console.log("diagonal set game col = " + col);
            //
            var dir = roll();
            var word = words3[x].split("");


            // console.log("row-col = " + [row]) + "/" + [col];
            for (var i = 0; i < word.length; i++) {

                box[row + i][col + i] = word[i];
                console.log(word[i] + "/diagonal/" + [row + i] + "-" + [col + i]);
                console.log("------------")
            }
        }
        //

        // box[row +i][ind] = word[i];
        //             console.log(word[i] + "/vertical/" + [row+i] + "-" + [ind]);
        //         } else {
        //             if (x % 2 === 0) {
        //                  if (x % 2 === 0){
        //                  box[row +i ][col +i ] = word[i];
        //                  console.log(word[i] + "/diagonal-down + right/" + [row+i] + "-" + [ind+i]);
        //                  } else {
        //                  box[row +i ][col -i ] = word[i];
        //                  console.log(word[i] + "/diagonal-up + right/" + [row+i] + "-" + [ind+i]);
        //                  }   
        //             }
        //         }

        for (var i = 0; i < box.length; i++) {

            randLetters(box[i]);
        }

        for (var n = 0; n < box.length; n++) {
            box[n] = box[n].join("</div></td><td><div class='tile'>");
            document.getElementById("box").innerHTML = "<tbody><tr><td><div class='tile'>" + box.join("</div></td></tr><tr><td><div class='tile'>") + "</tbody>";
        }

    }
    setGame();

    var isDown = false;
    $(document).mousedown(function() {
            isDown = true;
            console.log('mousedown');
        })
        .mouseup(function() {
            isDown = false;
            console.log('mouseup');
        })

    function moused(item) {
        console.log("clicked");
        item.css("border-color", "blue");
        item.children(".tile").css("background-color", "rgba(64, 140, 255, 0.7)");
    }

    $("td").mouseover(function(){
        if (isDown === true){
            moused($(this));
        }
    });

    $("td").click(function(){
        moused($(this));
    });
});
