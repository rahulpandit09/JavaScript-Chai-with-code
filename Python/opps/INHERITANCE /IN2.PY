class Grandparent:
    def home(self):
        print("Grand parent has home")

class parent(Grandparent):
    def car(self):
        print("parent has a car")

class child(parent):
    def bike(self):
        print("child has a bick")

c = child()
c.home()
c.car()
c.bike()