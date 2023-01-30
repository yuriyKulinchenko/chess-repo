//init start
let boardClass = document.querySelector('.board');
var currentChild;
for (let i = 0; i < 64; i++) {
    currentChild = document.createElement('div');
    currentChild.className = 'square';
    boardClass.appendChild(currentChild);
}
const boardGUI = document.querySelectorAll('.square');
let k = 0;
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 == 0) {
            boardGUI[k].style.backgroundColor = 'rgb(125,148,93)';
        } else {
            boardGUI[k].style.backgroundColor = 'rgb(235,236,211)';
        }
        currentChild = document.createElement('div');
        currentChild.className = 'debugText';
        currentChild.innerHTML = 21 + 10 * i + j;
        boardGUI[k].appendChild(currentChild);
        k++;
    }
}

//init end

let clearBoard = function (game) {
    let current;
    for (let i = 0; i < 64; i++) {
        current = Array.from(boardGUI[i].childNodes);
        if (current.length == 2) {
            boardGUI[i].removeChild(current[1]);
        }
    }
}

let renderBoard = function (game) {
    clearBoard(game);
    let img;
    let position;
    let GUIposition;
    for (let i = 1; i < game['piece'].length; i++) {
        for (let j = 0; j < game['piece'][i].length; j++) {
            img = document.createElement('img');
            img.src = pieceToImage[i];
            position = game['piece'][i][j];
            if (position != null) {
                GUIposition = gridToDisplay[position];
                boardGUI[GUIposition].appendChild(img);
            }
        }
    }
}

let gameState = false;
let from; let to;

for (let i = 0; i < boardGUI.length; i++) {
    boardGUI[i].addEventListener('click', e => {
        let val = Array.from(boardGUI[i].childNodes)
        val = val[0].innerHTML;
        if (gameState) {
            to = val;
            boardGUI[gridToDisplay[from]].style.zIndex = 0;
            boardGUI[gridToDisplay[from]].style.outline = 'solid green 0px';
            makeMove(from, to);
        } else {
            from = val;
            boardGUI[i].style.outline = 'solid green 3px';
            boardGUI[i].style.zIndex = 5;
        }
        gameState = !gameState;
    })
}

let makeMove = function (from, to) {
    let move = game.generateManualMove(Number(from), Number(to));
    if (move == false) {
        return;
    } else {
        game.makeMove(move);
        renderBoard(game);
        setTimeout(() => {
            let nextMove = engine.bestMove();
            game.makeMove(nextMove);
            renderBoard(game);
        }, 500);
    }
}


const game = new Chess();
let engine = new ChessEngine(game);
renderBoard(game);
