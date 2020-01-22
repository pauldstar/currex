'use strict';

function Slot(initialSlot, pattern)
{
    this.pattern = pattern;
    this.currentPattern = 0;
    this.baseSlot = initialSlot;
    this.currentSlot = initialSlot;
}

Slot.prototype.switch = function(selection)
{
    switch(selection)
    {
        case 'red': return 'black';
        case 'black': return 'red';
    }
};

Slot.prototype.next = function(isWin = false)
{
    if (isWin)
    {
        this.currentPattern = 1;
        this.baseSlot = this.currentSlot = this.switch(this.currentSlot);
        return this.baseSlot;
    }

    this.currentSlot = this.pattern[this.currentPattern]
        ? this.baseSlot : this.switch(this.baseSlot);
    this.currentPattern = (this.currentPattern + 1) % this.pattern.length;

    return this.currentSlot;
};

Slot.prototype.random = function(wheelSize)
{
    return Math.floor(Math.random() * wheelSize);
};