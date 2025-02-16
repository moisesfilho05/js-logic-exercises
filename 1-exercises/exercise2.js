// melhorar para deixa-lo mais direto.

function monkeyTrouble(aSmile, bSmile) {
    if (aSmile && bSmile) {
        return true;
    } else if (!aSmile && !bSmile) {
        return true;
    } else if (aSmile && !bSmile) {
        return false;
    } else {
        return false;
    };
};

console.log(monkeyTrouble())