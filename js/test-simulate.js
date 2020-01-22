let FAILS = 0,
    output = [];

function dd(expected, actual, title)
{
    result = expected === actual ? 'pass' : 'FAIL';
    if (result === 'FAIL') FAILS++;
    out(`${result}: ${actual}: ${title}`);
}

function out(message)
{
    output.push(message)
}

function testSlotGet()
{
    let slot = new Slot('red', [1,1,0,0]);

    dd('red', slot.next(), 'initial slot is red');
    dd('red', slot.next(), 'next loss selects red');
    dd('black', slot.next(), 'next loss selects black');
    dd('black', slot.next(), 'next loss selects black');
    dd('red', slot.next(), 'next loss selects red');
    dd('red', slot.next(), 'next loss selects red');
    dd('black', slot.next(), 'next loss selects black');
    dd('black', slot.next(), 'next loss selects black');
    dd('red', slot.next(), 'next loss selects red');
    dd('black', slot.next(true), 'win selects black');
    dd('red', slot.next(true), 'next win selects red');
    dd('black', slot.next(true), 'next win selects black');
    dd('red', slot.next(true), 'next win selects red');
    dd('black', slot.next(true), 'next win selects black');
    dd('black', slot.next(), 'next loss selects black');
    dd('red', slot.next(), 'next loss selects red');
    dd('red', slot.next(), 'next loss selects red');
    dd('black', slot.next(), 'next loss selects black');
    dd('black', slot.next(), 'next loss selects black');
    dd('red', slot.next(), 'next loss selects red');
    dd('red', slot.next(), 'next loss selects red');
    dd('black', slot.next(), 'next loss selects black');
    dd('red', slot.next(true), 'win selects red');
    dd('black', slot.next(true), 'next win selects black');
}

function testBetGet()
{
    let bet = new Bet(1000, 8);

    dd(0.01, bet.next(10.75), 'initial bet is 1p');
    dd(0.03, bet.next(10.75, false), 'next loss yields 3p');
    dd(0.07, bet.next(10.75, false), 'next loss yields 7p');
    dd(0.15, bet.next(10.75, false), 'next loss yields 15p');
    dd(0.31, bet.next(10.75, false), 'next loss yields 31p');
    dd(0.63, bet.next(10.75, false), 'next loss yields 63p');
    dd(1.27, bet.next(10.75, false), 'next loss yields £1.27');
    dd(2.55, bet.next(10.75, false), 'next loss yields £2.55');
    dd(0.01, bet.next(10.75, false), 'next loss resets bed to 1p');
    dd(0.03, bet.next(10.75, false), 'next loss yields 3p');
    dd(0.01, bet.next(10.75, true), 'a win resets to 1p');
    dd(0.01, bet.next(10.75, true), 'a win yields 1p');
    dd(0.03, bet.next(10.75, false), 'next loss yields 3p');
    dd(0.07, bet.next(10.75, false), 'next loss yields 7p');
    dd(0.15, bet.next(10.75, false), 'next loss yields 15p');
    dd(0.31, bet.next(10.75, false), 'next loss yields 31p');
    dd(0.63, bet.next(10.75, false), 'next loss yields 63p');
    dd(1.27, bet.next(10.75, false), 'next loss yields £1.27');
    dd(2.55, bet.next(10.75, false), 'next loss yields £2.55');
    dd(0.01, bet.next(10.75, false), 'next loss resets bed to 1p');
    dd(0.03, bet.next(10.75, false), 'next loss yields 3p');
    dd(0.01, bet.next(10.75, true), 'a win resets to 1p');
    dd(0.01, bet.next(10.75, true), 'a win yields 1p');
    dd(0.03, bet.next(10.75, false), 'next loss yields 3p');
    dd(0.07, bet.next(10.75, false), 'next loss yields 7p');
    dd(0.15, bet.next(10.75, false), 'next loss yields 15p');
    dd(0.31, bet.next(10.75, false), 'next loss yields 31p');
    dd(0.63, bet.next(10.75, false), 'next loss yields 63p');
    dd(1.27, bet.next(10.75, false), 'next loss yields £1.27');
    dd(2.55, bet.next(10.75, false), 'next loss yields £2.55');
    dd(0.01, bet.next(10.75, false), 'next loss resets bed to 1p');
    dd(0.03, bet.next(10.75, false), 'next loss yields 3p');
    dd(0.01, bet.next(10.75, true), 'a win resets to 1p');
    dd(0.01, bet.next(10.75, true), 'a win yields 1p');
    dd(0.03, bet.next(10.75, false), 'next loss yields 3p');
    dd(0.07, bet.next(10.75, false), 'next loss yields 7p');
    dd(0.15, bet.next(10.75, false), 'next loss yields 15p');
    dd(0.31, bet.next(10.75, false), 'next loss yields 31p');
    dd(0.63, bet.next(10.75, false), 'next loss yields 63p');
    dd(1.27, bet.next(10.75, false), 'next loss yields £1.27');
    dd(2.55, bet.next(10.75, false), 'next loss yields £2.55');
    dd(0.01, bet.next(10.75, false), 'next loss resets bed to 1p');
    dd(0.03, bet.next(10.75, false), 'next loss yields 3p');
    dd(0.01, bet.next(10.75, true), 'a win resets to 1p');
    dd(0.01, bet.next(10.75, true), 'a win yields 1p');
    dd(0.03, bet.next(10.75, false), 'next loss yields 3p');
    dd(0.07, bet.next(10.75, false), 'next loss yields 7p');
    dd(0.15, bet.next(10.75, false), 'next loss yields 15p');
    dd(0.31, bet.next(10.75, false), 'next loss yields 31p');
    dd(0.63, bet.next(10.75, false), 'next loss yields 63p');
    dd(1.27, bet.next(10.75, false), 'next loss yields £1.27');
    dd(2.55, bet.next(10.75, false), 'next loss yields £2.55');
    dd(0.01, bet.next(10.75, false), 'next loss resets bed to 1p');
    dd(0.03, bet.next(10.75, false), 'next loss yields 3p');
    dd(0.01, bet.next(10.75, true), 'a win resets to 1p');
    dd(0.01, bet.next(10.75, true), 'a win yields 1p');
    dd(0.02, bet.reset().next(22.75, true), 'a win yields 2p');
    dd(0.22, bet.reset().next(227.5, true), 'a win yields 22p');
    dd(2.27, bet.reset().next(2275.53, true), 'a win yields £2');
    dd(22.75, bet.reset().next(22755.3, true), 'a win yields £22');
    dd(227.55, bet.reset().next(227553.84, true), 'a win yields £227');
    dd(0.01, bet.reset().next(10), 'a win yields £0.01');
}

testBetGet();
testSlotGet();

out('--------------------------------------');
out(`Fails: ${FAILS}`);
document.write(output.join('<br>'));