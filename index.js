function saturdayFun(activity = `roller-skate`) {
    return `This Saturday, I want to ${activity}!`

}
saturdayFun();
saturdayFun(`bathe my dog`);

const mondayWork = function (schedule = `go to the office`) {
    return `This Monday, I will ${schedule}.`
}
mondayWork();

const wrapAdjective = function(result="*") {
    return function(emphatic="a hard worker") {
      return `You are ${result}${emphatic}${result}!`;
    }
}
wrapAdjective()()