let pode = 'Pode dormir até mais tarde';
let naoPode = 'Não pode dormir até tarde';

function sleepIn(weekday, vacation) {
    if (weekday && !vacation) {
        return naoPode;
    } else if (!weekday && !vacation) {
        return pode;
    } else if (!weekday && vacation) {
        return pode;
    } else if (weekday && vacation) {
        return pode;
    };
}

console.log(sleepIn());
