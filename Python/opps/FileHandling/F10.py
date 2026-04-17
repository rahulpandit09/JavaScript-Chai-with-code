with open("/workspaces/JavaScript-Chai-with-code/Python/FileHandling/old.txt") as f:
    content = f.read()

with open("/workspaces/JavaScript-Chai-with-code/Python/FileHandling/rename_by_python.txt","w") as f:
    f.write(content)