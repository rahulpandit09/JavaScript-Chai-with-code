class Father:
    def money(self):
        print("Father give money")
    
class Mother:
    def love(self):
        print("Mother give love")

class child(Father, Mother):
    def skills(self):
        print("child give skills")

c = child()
c.money()
c.love()
c.skills()