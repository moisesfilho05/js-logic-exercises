# PROGRAMMING LOGIC EXERCISES

**Exercise1 - SleepIn**

The parameter weekday is true if it is a weekday, and the parameter vacation is true if we are on vacation. We sleep in if it is not a weekday or we're on vacation. Return true if we sleep in.

Examples

sleepIn(true, true) → true
sleepIn(true, false) → false
sleepIn(false, true) → true

--- x ---

**Exercise2 - MonkeyTrouble**

We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if each is smiling. We are in trouble if they are both smiling or if neither of them is smiling. Return true if we are in trouble.

Examples

monkeyTrouble(true, true) → true
monkeyTrouble(false, false) → true
monkeyTrouble(true, false) → false

--- x ---

**Exercise3 - sumDouble**

Given two int values, return their sum. Unless the two values are the same, then return double their sum.

Examples:

sumDouble(1, 2) → 3
sumDouble(3, 2) → 5
sumDouble(2, 2) → 8

--- x ---

**Exercise4 - sumDouble**

Esse exercício pede que você calcule a diferença absoluta entre um número inteiro n e 21. A diferença absoluta significa simplesmente o valor positivo da subtração entre dois números, independentemente da ordem.

Depois, há uma exceção:

Se n for maior que 21, o resultado final deve ser o dobro da diferença absoluta.

Passo a passo da lógica:

Calcule a diferença absoluta entre n e 21.
Se n for maior que 21, retorne o dobro dessa diferença.

Caso contrário, retorne apenas a diferença absoluta normal.

