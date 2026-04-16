# with  open("/workspaces/JavaScript-Chai-with-code/Python/FileHandling/demo.txt")as f:
#     data = f.read()
#     print(data)


# with open("/workspaces/JavaScript-Chai-with-code/Python/FileHandling/demo.txt","w") as f:
#     f.write("\n i am learning pythin and filehandling")

# with open ("/workspaces/JavaScript-Chai-with-code/Python/FileHandling/demo.txt","a") as f:
#     f.write("\n learning pything is good this is a most famous language")


with open("/workspaces/JavaScript-Chai-with-code/Python/FileHandling/demo.txt") as f:
    content = f.read()
if "learning" in content.lower():
    print("Found")
else:
    print("not found")