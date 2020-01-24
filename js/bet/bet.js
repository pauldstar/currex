'use strict';

function Bet(factor, hedge)
{
    this.factor = factor;
    this.hedge = hedge;
    this.counter = 0;
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
    return this.calcBase(pot);
};

Bet.prototype.reset = function(startPot = this.pot)
{
    this.pot = startPot;
    this.counter = 0;
    this.baseBet = startPot / this.factor;
    this.currentBet = this.baseBet;

    return this;
};