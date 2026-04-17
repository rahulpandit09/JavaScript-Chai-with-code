with open("/workspaces/JavaScript-Chai-with-code/Python/FileHandling/this.txt") as f:
    content = f.read()


with open("/workspaces/JavaScript-Chai-with-code/Python/FileHandling/this_copy.txt","w") as f:
    f.write(content)


print("Successfullu run")