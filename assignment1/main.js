const DFA = require('./dfa.js');

let tuple = {
  states: ['q1', 'q2'],
  alphabets: ['1', '0'],
  delta: { q1: { '0': 'q2', '1': 'q1' }, q2: { '0': 'q1', '1': 'q2' } },
  'start-state': 'q1',
  'final-states': ['q2']
};

const machine = new DFA(tuple);
console.log(machine.doesAccept('0')); //returns true
console.log(machine.doesAccept('00')); //returns false
console.log(machine.doesAccept('000')); //returns true
console.log(machine.doesAccept('0000')); //returns false
