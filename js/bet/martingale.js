'use strict';

function Martingale(factor, hedge, aggressive = false)
{
    Bet.call(this, factor, hedge);
    this.aggressive = aggressive;
}

Martingale.prototype = new Bet();

Martingale.prototype.next = function(pot, isWin)
{
    if (isWin === false)
    {
        this.counter++;

        if (this.hedge === 0 || this.counter < this.hedge)
            return this.computeNextBet();
    }

    this.counter = 0;

    return this.currentBet = this.baseBet = this.calcBase(pot);
};

Martingale.prototype.computeNextBet = function()
{
    let bet = this.aggressive
      ? this.currentBet * 2 + this.baseBet
      : this.currentBet * 2;
    
    return this.currentBet = parseFloat(bet).toFixed(2);
};