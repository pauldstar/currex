'use strict';

function Game(startPot, target, bet, slot)
{
    // Roulette wheel; each index corresponds to a wheel slot/number
    this.wheel = [
        'black', 'red', 'black', 'red', 'black', 'red',
        'black', 'red', 'black', 'red', 'black', 'red',
        'black', 'red', 'black', 'red', 'black', 'red',
        'green',
        'black', 'red', 'black', 'red', 'black', 'red',
        'black', 'red', 'black', 'red', 'black', 'red',
        'black', 'red', 'black', 'red', 'black', 'red'
    ];

    this.wheelSize = this.wheel.length;

    this.round = 0;
    // Amount used to begin simulation
    this.startPot = startPot;
    this.target = target;
    // intended profit margin
    // multi-simulation: number of times target was hit
    this.winCount = 0;
    // multi-simulation: times pot goes empty
    this.quitCount = 0;

    this.bet = bet;
    this.slot = slot;
}

Game.prototype.gameOver = function(pot)
{
    if (pot >= 0) return false;
    this.quitCount++;
    return true;
};

Game.prototype.gameWon = function(pot)
{
    if (pot < this.target) return false;
    this.winCount++;
    return true;
};

Game.prototype.multiRun = function(maxGames, maxRounds)
{
    let pot;

    for (let c = 1; c <= maxGames; c++)
    {
        pot = this.run(maxRounds);
        out(pot, true);
    }
};

Game.prototype.run = function(maxRounds)
{
    let pot = this.startPot,
        bet = this.bet.next(pot),
        slot = this.slot.next(),
        randomSlot,
        result;

    while (! maxRounds || this.round <= maxRounds)
    {
        if (this.gameOver(pot) || this.gameWon(pot)) break;

        this.round++;

        pot = parseFloat( (pot - bet).toFixed(2) );

        randomSlot = this.wheel[ Math.floor(Math.random() * this.wheelSize) ];
        result = randomSlot === slot;

        if (result) pot = parseFloat( (pot + (bet * 2)).toFixed(2) );

        out(`b: ${bet}`);
        out(`s: ${slot}`);
        out(`r: ${result ? 'win' : 'lose'}`);
        out(`c: ${this.bet.counter}`);
        out(`p: ${pot} <<<`);
        out(`ro: ${this.round}`);
        out(`***************`);

        slot = this.slot.next(result);
        bet = this.bet.next(pot, result);
    }

    return pot;
};