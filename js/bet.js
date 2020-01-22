'use strict';

function Bet(factor, hedge)
{
    this.factor = factor;
    this.hedge = hedge;
    this.lossCount = 0;
    this.baseBet = 0;
    this.currentBet = 0;
}

Bet.prototype.calcBase = function(pot)
{
    let regex = new RegExp('^-?\\d+(?:\.\\d{0,' + (2 || -1) + '})?'),
        bet = (pot / this.factor).toString().match(regex)[0];

    return parseFloat(bet) || 0.01;
};

Bet.prototype.next = function(pot, isWin)
{
    if (isWin === false)
    {
        this.lossCount++;

        if (this.hedge === 0 || this.lossCount < this.hedge)
            return this.currentBet = parseFloat(
                ( (this.currentBet * 2) + this.baseBet ).toFixed(2)
            );
    }

    this.lossCount = 0;

    return this.currentBet = this.baseBet = this.calcBase(pot);
};

Bet.prototype.reset = function(startPot = this.pot)
{
    this.pot = startPot;
    this.lossCount = 0;
    this.baseBet = startPot / this.factor;
    this.currentBet = this.baseBet;

    return this;
};