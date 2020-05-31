let
  startPot = 1,
  target = 10,
  factor = 100,
  hedge = 7,
  aggressive = false,
  startSlot = 'red',
  pattern = '11111111',
  switchOnLoss = true;

let bet = new Martingale(factor, hedge, aggressive),
    slot = new Slot(startSlot, pattern, switchOnLoss),
    game = new Game(startPot, target, bet, slot);

multiMode = 1;

out(`p: ${game.startPot}`, true);
out(`***************`, true);

if (multiMode) game.multiRun(100);
else game.run(1000);

out(`***************`, true);
out(`w: ${game.winCount}`, true);
out(`q: ${game.quitCount}`, true);

flush();