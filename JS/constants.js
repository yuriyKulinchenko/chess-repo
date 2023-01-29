//------------------------------REGULAR CONSTANTS------------------------------

const PIECE = {
    EMPTY: 0, OOB: 13,
    wP: 1, wN: 2, wB: 3, wR: 4, wQ: 5, wK: 6, //white pieces
    bP: 7, bN: 8, bB: 9, bR: 10, bQ: 11, bK: 12 //black pieces
};

const CASTLEBIT = {
    WKCA: 1, WQCA: 2, //white castlebit
    BKCA: 4, BQCA: 8 //black castlebit
};

/*
Technically, the king and queen offset are identical. 
however, for readibility, they are considered to be 2 different offsets. 
The additional memory 'wasted' is negligible.
*/
const OFFSET = {
    rookOffset: [1, -1, 10, -10],
    bishopOffset: [-11, -9, 11, 9],
    knightOffset: [-8, -19, -21, -12, 8, 19, 21, 12],
    kingOffset: [1, -1, 10, -10, -11, -9, 11, 9],
    queenOffset: [1, -1, 10, -10, -11, -9, 11, 9],
    blackPawnOffset: [9, 11],
    whitePawnOffset: [-9, -11]
};

const VALUE = {
    pawn: 100,
    knight: 300,
    bishop: 300,
    rook: 500,
    queen: 900
}



//------------------------------GUI CONSTANTS------------------------------

const pieceToImage = [null, 'wP', 'wN', 'wB', 'wR', 'wQ', 'wK', 'bP', 'bN', 'bB', 'bR', 'bQ', 'bK'];
for (let i = 1; i < pieceToImage.length; i++) {
    pieceToImage[i] = 'images/Chess_' + pieceToImage[i] + '.png';
}

let gridToDisplayFunction = function () {
    let a = new Array(98);
    let t = 0;
    for (let i = 2; i < 10; i++) {
        for (let j = 1; j < 9; j++) {
            a[10 * i + j] = t;
            t++;
        }
    }
    return a;
}

const gridToDisplay = gridToDisplayFunction();