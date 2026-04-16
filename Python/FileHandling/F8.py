with open("/workspaces/JavaScript-Chai-with-code/Python/FileHandling/this.txt") as f:
    content1 = f.read()

with open("/workspaces/JavaScript-Chai-with-code/Python/FileHandling/this_copy.txt") as f:
    content2 = f.read()

if(content1 == content2):
    print("Yes, This files are identical")
else:
    print("No, This files are identical")