words = ["donkey", "bhai", "ganda"]

try:
    with open("/workspaces/JavaScript-Chai-with-code/Python/FileHandling/file.txt") as f:
        content = f.read()

    for word in words:
        content = content.replace(word, "#" * len(word))

    with open("/workspaces/JavaScript-Chai-with-code/Python/FileHandling/file.txt", "w") as f:
        f.write(content)

    print("Successfully updated")

except FileNotFoundError:
    print("File not found!")