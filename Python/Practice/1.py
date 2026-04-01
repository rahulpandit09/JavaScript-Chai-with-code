# Write a program to print multiplication table of a given number using for loop.
n = int(input("Enter an Number: "))
for i in range(1,11):
    print(f"{i} X {n} = {i * n}")
