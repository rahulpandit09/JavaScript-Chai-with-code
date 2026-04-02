
# factorial = n * factorial(n-1)  => This is a formula you should know always the you can able to do this factorial

def factorial(n):
    if(n==1 or n==0):
        return 1
    return n * factorial(n-1)

n = int(input("Enter a number: "))
print(f"The factorial of this number is: {factorial(n)}")