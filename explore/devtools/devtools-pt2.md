bug: num1 and num2 are both strings, so instead of adding them, it concatenates them.
fix: convert num1 and num2 into numbers. we can use parseFloat
