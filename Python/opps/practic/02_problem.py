class Calculator:
    def __init__(self,n):
        self.n = n
    
    def square(self):
        print(f"This square is: {self.n * self.n}")

    def cube(self):
        print(f"This cube is: {self.n*self.n*self.n}")
        
    def squareRoot(self):
        print(f"This squireRoot is: {self.n**1/2} ")


a = Calculator(4)
a.square()
a.cube()
a.squareRoot()
        