1. 3, because var can be accessed outside of the block it was declared and by the last iteration of the loop it sets the value to 3
2. 150, since discountedPrice is also a var it can be accessed outside of the block scope it was declared. Its value is the last calculation when i = prices.length - 1, where `prices[2] * (1 - discount) = 300 * 0.5 = 150`
3. 150, final price is declared outside the for loop and thus it is accessible . The value is the last iteration when prices.length - 1, and is calculated by `Math.round(150 * 100) / 100 = 150`
4. [50, 100, 150], returns an array of rounded discounted prices which is from multiplying original values [100, 200, 300] by 0.5.
5. Error. i is out of scope, since it is a let it can't be accessed outside the block it was declared (the for loop)
6. Error. discountedPrice is also out of scope since it is a let declared inside the for loop. Thus it can't be accessed.
7. 150 finalPrice was declared in the same block it was called so it can be accessed as a let.
8. [50, 100, 150], returns an array of rounded discounted prices which is from multiplying original values [100, 200, 300] by 0.5.
9. Error. i is out of scope since it is a let. Can only be accessed within the block.
10. 3, No errors because the constant value was never changed and was used within its scope.
11. [50, 100, 150], returns an array of discounted prices which is from multiplying original values [100, 200, 300] by 0.5.
12. A. student['name']
    B. student['Grad Year']
    C. student.greeting()
    D. student['Favourite Teacher'].name
    E. student.courseLoad[0]
13. A. '32', since 3 is a string 2 also gets converted to string which is concatenated.  
    B. 1, since 3 converted to integer.  
    C. 3, since null is converted to 0.  
    D. '3null', since null is converted to string concatenated to the string 3.  
    E. 4, since true is converted to 1.  
    F. 0, since false is 0 and null is also 0.  
    G. '3undefined', since undefined is converted to string concatenated to the string 3.  
    H. NaN, since undefined becomes NaN in numeric conversion and even though 3 is converted to an int, it is still subtracted by NaN which is Not A Number. calculation cannot be done and Not A Number (NaN) remains

14. A. true, since the string 2 is converted to an integer.  
    B. false, since the string 2 comes after 12 lexicographically  
    C. true, since the string 2 is converted to an integer.  
    D. false, since 2 (int) and '2' (string) are different variable types.  
    E. false, since true is converted to the int 1.
    F. true, since 2 is not zero in Boolean(2) its value is true
15. == checks if the value of two variables are the same regardless of the data type. Whereas === checks if the two values and types are equal to each other.
16. in [part2-question16.js](part2-question16.js)
17. [2, 4, 6],modifyArray iterates through the original array, passes it to the callback function and appends the result in a new array. In our example the callback funtrion is doSomething which essentially doubles the value of the input. Thus the double of [1, 2, 3] is [2, 4, 6].
18. in [part2-question18.js](part2-question18.js)
19. Output:

    1
    4
    3
    2

3 and 2 are printed after 1 and 4 because functions passed to setTimeout are asynchronously called. 2 is printed after 3 because its delay is longer than 3.
