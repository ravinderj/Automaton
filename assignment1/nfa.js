class NFA {
  constructor(tuple) {
    this.startState = tuple['start-state'];
    this.finalStates = tuple['final-states'];
    this.delta = tuple['delta'];
  }

  doesAccept(language) {
    let eStates = this.getCurrentStates(this.startState);
    let allStates = language.split('').reduce((currentStates, ele)=> {
      let temp = currentStates.flatMap((state) => (this.delta[state] && this.delta[state][ele]) || []);
      return temp.flatMap((s)=>this.getCurrentStates(s));
    },eStates)
    return allStates.some((a)=>this.finalStates.includes(a));
  }

  getCurrentStates(state, allStates=[]) {
    let eStates = this.delta[state].e || [];
    let temp = eStates.filter(eState=>!allStates.includes(eState));
    allStates = allStates.concat(temp);
    if (temp.some(state => this.delta[state] && this.delta[state]['e'])) {
      return temp.flatMap((state)=>this.getCurrentStates(state, allStates)).concat([state]);
    }
    return allStates.concat([state]);
  }
}

module.exports = NFA;
