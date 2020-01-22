let bet = new Bet(1000, 8),
    slot = new Slot('red', [1,1,0,0]),
    game = new Game(10, 100, bet, slot);

multiMode = 0;

out(`p: ${game.startPot}`, true);
out(`***************`, true);

if (multiMode) game.multiRun(100);
else game.run();

flush();