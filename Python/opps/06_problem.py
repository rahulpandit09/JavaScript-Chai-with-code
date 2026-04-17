from random import randint
class Train:

    def __init__(self, trainNo):
        self.trainNo = trainNo

    def book(self, frm, to):
        print(f"Ticket is booking in tarin no: {self.trainNo} from {frm} to {to}")

    def getStatus(self):
        print(f"Train No: {self.trainNo} is running on time")

    def getFare(self, frm, to):
        print(f"Ticket fare in train no: {self.trainNo} from {frm} to {to} is {randint(222, 5555)}")

t = Train(54786)
t.book("SMVT Bengaluru", "Danapur")
t.getFare()
t.getStatus("SMVT Bengaluru", "Danapur")
