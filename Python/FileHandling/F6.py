with open("/workspaces/JavaScript-Chai-with-code/Python/FileHandling/log.txt") as f:
    lines = f.readlines()

lineno = 1

for line in lines:
    if("Rahul in line"):
        print(f"Yes, Rahul is persent. Line no:{lineno}")
        break
    lineno += 1 


else:
    print("No, Rahul is not persent in this line ")

print("your code is run successfully")