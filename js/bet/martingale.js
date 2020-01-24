'use strict';

function Martingale(factor, hedge)
{
    Bet.call(this, factor, hedge);
}

Martingale.prototype = new Bet();

Martingale.prototype.next = function(pot, isWin)
{
    if (isWin === false)
    {
        this.counter++;

        if (this.hedge === 0 || this.counter < this.hedge)
            return this.currentBet = parseFloat(
                ( (this.currentBet * 2) + this.baseBet ).toFixed(2)
            );
    }

    this.counter = 0;

    return this.currentBet = this.baseBet = this.calcBase(pot);
};