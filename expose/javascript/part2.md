1. Line 12 prints the number "3". It prints the number 3 because the array given
   as a parameter to the function has an array length of 3. So, once the for loop
   iterates through, it will return the length of 3.

2. Line 13 prints the number "150". It prints the number 150 because this is the
   last element in the inputted array's discounted price

3. Line 14 also prints the number "150". It prints number 150 because final price
   is discountedPrice but rounded to the nearest whole integer. Since discounted
   price is already a whole integer, it stays the same value

4. The function will return an array of the discounted values which were created
   from the inputted original array and the discount multiplier

5. We get an error "ReferenceError: i is not defined" This is because i is declared
   using let and since we are no longer in the for loop block, it has cannot be
   accessed

6. We get another ReferenceError, but this time discountedPrice is not defined.
   This is again because discountedPrice is declared within the for loop using let,
   so since we are no longer in that block, discountedPrice cannot be accessed

7. Line 14 prints 150. Although finalPrice is declared using let, since it was 
   declared in the top of the function, it is within the whole functions scope,
   so it does not produce a ReferenceError like the two before

8. This function will return discounted, an array of the discounted values which
   were created from the inputted original array and the discount multiplier. We
   are able to access discounted because although it was created using let, it is
   still within the function's block so we can are able to return it

9. We get an error "ReferenceError: i is not defined" This is because i is declared
   using let and since we are no longer in the for loop block, it has cannot be
   accessed

10. Line 12 prints 3. It prints number 3 because length was declared as a constant
    as prices length. Since prices length is 3, length was initilized as 3

11. The function again returns an array of the discoutned values which were created
    from the inputted original array and the discount multiplier. The reason
    discountedPrice does not throw an error when we are constantly changing its value
    is because it is redeclared as a const everytime the for loop iterates

12.
    a. student.name
    b. student["Grad Year"]
    c. student.greeting()
    d. student["Favorite Teacher"].name
    e. student.courseLoad[0]

13.
    a. 32. This is because 2 is mapped as a string so when the string 3 is added
        to 2, it concatenates
    b. 1. This is because - is not a string operator, so javascript converts '3'
        to integer 3.
    c. 3. Null is converted to 0, so the it is basically 3 + 0
    d. 3null. Null is converted to a string, so the string '3' is concatenated with
        the string 'null'
    e. 4. True is converted to 1, so 1 + 3 is 4
    f. 0. False and null are both converted to 0, so 0 + 0 is null
    g. 3undefined. undefined is converted to a string, so the string '3' is concatenated
        with the string 'undefined'
    h. NaN. Since undefined cannot be converted to an integer, 3 subtract 
        undefined gives not a number.

14.
    a. true. 2 is converted to an integer and 2 is greater than 1
    b. false. 2 and 12 are compared, however, since they are strings only the first
        digit is compared. So, since 2 is not less than 1, it is false
    c. true. 2 is converted to an integer from a string and is equal to 2
    d. false. === also compares data type and since one 2 is a string and the 
        other is an integer it returns false
    e. false. Since true converts to 1 and 1 does not equal 2 it returns false
    f. true. Since Boolean(2) returns true and true == true and they are the same
        type === returns true
    
15. The == operator does the type conversion of the operands before comparison,
    whereas the === operator compares the values as well as the data types of
    the operands.

16. .js file
17. The result is [2, 4, 6]. We arrive at this result because while iterating 
    through the inputted array, we callback to doSomething with every element
    and push the new element returned by doSomething into newArr.

18. .js file
19. 1
    4
    3
    2