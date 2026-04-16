import random

def game():
    print("You are playing game...")
    score = random.randint(1, 100)
    # featch the hiscore
    with open("/workspaces/JavaScript-Chai-with-code/Python/practic_2/hiscore.txt") as f:
        hiscore = f.read()
        if(hiscore != ""):
            hiscore = int(hiscore)
        else:
            hiscore = 0
        
    print(f"Your score: {score}")
    if(score>hiscore):
        # write the hiscore to this file
        with open("/workspaces/JavaScript-Chai-with-code/Python/practic_2/hiscore.txt", "w") as f:
            f.write(str(score))
    return score


game()