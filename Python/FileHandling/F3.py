word = "donkey"

with open("/workspaces/JavaScript-Chai-with-code/Python/FileHandling/file.txt", "r") as f:
    content = f.read()

contentNew = content.replace(word, "######")

with open("/workspaces/JavaScript-Chai-with-code/Python/FileHandling/file.txt", "w") as f:
    f.write(contentNew)


print("word replace successfully")