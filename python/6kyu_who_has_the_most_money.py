# You're going on a trip with some students and it's up to you to keep track
# of how much money each Student has. A student is defined like this:

# class Student:
#     def __init__(self, name, fives, tens, twenties):
#         self.name = name
#         self.fives = fives
#         self.tens = tens
#         self.twenties = twenties

# As you can tell, each Student has some fives, tens, and twenties. Your job
# is to return the name of the student with the most money. If every student
# has the same amount, then return "all".

# Notes:

# Each student will have a unique name
# There will always be a clear winner: either one person has the most, or
# everyone has the same amount, If there is only one student, then that
# student has the most money


class Student:
    def __init__(self, name, fives, tens, twenties):
        self.name = name
        self.fives = fives
        self.tens = tens
        self.twenties = twenties


def most_money(students):
    if len(students) == 1:
        return students[0].name
    richest = None
    top_balance = 0
    total_balance = 0
    for s in students:
        balance = 5 * s.fives + 10 * s.tens + 20 * s.twenties
        total_balance += balance
        if top_balance < balance:
            richest = s
            top_balance = balance
    if top_balance * len(students) == total_balance:
        return "all"
    else:
        return richest.name


phil = Student("Phil", 2, 2, 1)
cam = Student("Cameron", 2, 2, 0)
geoff = Student("Geoff", 0, 3, 0)

print(most_money([cam, geoff, phil]), "Phil")
print(most_money([cam, geoff]), "all")
print(most_money([geoff]), "Geoff")
