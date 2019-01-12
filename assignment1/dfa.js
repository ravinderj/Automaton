class DFA {
  constructor(tuple) {
    this.startState = tuple['start-state'];
    this.finalStates = tuple['final-states'];
    this.delta = tuple['delta'];
  }
  doesAccept(testString) {
    return this.finalStates.includes(testString.split('').reduce((acc, ele)=> {
      return this.delta[acc][ele];
    },this.startState))
  }
}

module.exports = DFA;
