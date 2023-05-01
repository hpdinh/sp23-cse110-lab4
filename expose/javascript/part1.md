1. values added: 20


2. final result: 20


3. values added 20


4. We get an error "ReferenceError: result is not defined" This is because let
   only allows for the use of the variable in the block it is declared. Since
   result was declared with let in the if statement, the console log is unable
   to access it, so it gives us the not defined error

5. We get an error "TypeError: Assignment to constant variable" This is because
   const does not allow for the variable to be changed once it is declared. In
   this case, result is intially declared as 0 and when we try to change the
   value of result by adding num1 and num2, we get the TypeError. 

6. Because of the error caused by question 5, we are unable to reach this line
   of code.

