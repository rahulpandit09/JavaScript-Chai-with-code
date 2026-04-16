f = open("/workspaces/JavaScript-Chai-with-code/Python/practic_2/poem.txt")
content = f.read()
if("twinkwl" in content):
    print("The word twinkel is persent in the content")
else:
    print("The word twinkel is not persent in the content")  
f.close()


