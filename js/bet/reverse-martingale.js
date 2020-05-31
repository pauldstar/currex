'use strict';

function ReverseMartingale(factor, hedge, aggressive)
{
    Martingale.call(this, factor, hedge, aggressive);
}

ReverseMartingale.prototype = new Martingale();

ReverseMartingale.prototype.next = function(pot, isWin)
{
    if (isWin)
    {
        this.counter++;

        if (this.hedge === 0 || this.counter < this.hedge)
            return this.currentBet = parseFloat(
                ( this.currentBet * 2 + this.baseBet ).toFixed(2)
            );
    }

    this.counter = 0;

    return this.currentBet = this.baseBet = this.calcBase(pot);
};