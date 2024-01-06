class Tennis {
    DUECE_POINT = 3;
    player1Point = 0;
    player2Point = 0;
    equalSyntax = "all";
    scoreSyntax = {
        0: "love",
        1: "fifteen",
        2: "thirty",
        3: "forty",
    }
    isEnd = false;

    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }

    scorePlayer1() {
        if (this.isEnd) return;
        this.player1Point += 1;
        if (this.player1Point > 3 && this.player1Point - this.player2Point === 2) {
            this.isEnd = true;
        }
    }

    scorePlayer2() {
        if (this.isEnd) return;
        this.player2Point += 1;
        if (this.player2Point > 3 && this.player2Point - this.player1Point === 2) {
            this.isEnd = true;
        }
    }

    get score() {
        if (this.player1Point === this.player2Point) {
            if (this.player1Point === 3) return scoreSyntax[3];
            return `${scoreSyntax[this.player1Point]} ${equalSyntax}`;
        }
        return `${scoreSyntax[this.player1Point]} ${scoreSyntax[this.player2Point]}`;

    }

}

describe('', function () {


});


