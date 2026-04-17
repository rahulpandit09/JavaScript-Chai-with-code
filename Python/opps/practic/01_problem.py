class programmer:
    company = "Microsoft"
    def __init__(self,name, salary, pin):
        self.name = name
        self.salary = salary
        self.pin = pin

p = programmer("Rahul", 120000,257896)
print(p.company, p.name, p.salary, p.pin)
r = programmer("Ram", 100000,589647)
print(p.company, r.name, r.salary, r.pin)        