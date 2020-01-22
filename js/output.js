'use strict';

let output = [],
    multiMode = 0;

function out(message, force = false)
{
    if (! multiMode || force) output.push(message);
}

function flush()
{
    document.write(output.join('<br>'));
}