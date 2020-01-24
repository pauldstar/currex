let bet = new Martingale(10000000, 22),
    slot = new Slot('red', [1,1,0,0]),
    game = new Game(100000, 200000, bet, slot);

multiMode = 0;

out(`p: ${game.startPot}`, true);
out(`***************`, true);

if (multiMode) game.multiRun(100);
else game.run();

out(`***************`, true);
out(`w: ${game.winCount}`, true);
out(`q: ${game.quitCount}`, true);

flush();