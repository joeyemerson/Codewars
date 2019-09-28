# Task

# N lamps are placed in a line, some are switched on and some are off. What is the smallest number of lamps that need to be switched so that on and off lamps will alternate with each other?

# You are given an array a of zeros and ones - 1 mean switched-on lamp and 0 means switched-off.

# Your task is to find the smallest number of lamps that need to be switched.
# Example

# For a = [1, 0, 0, 1, 1, 1, 0], the result should be 3. a --> 1 0 0 1 1 1 0 swith --> 0 1 0 became--> 0 1 0 1 0 1 0
# Input/Output

#     [input] integer array a

#     array of zeros and ones - initial lamp setup, 1 mean switched-on lamp and 0 means switched-off.

#     2 < a.length <= 1000

#     [output] an integer

#     minimum number of switches.

def lamps(a):
    cnt1, cnt2 = 0, 0
    on = True
    for lamp in a:
        if lamp == on: cnt1 += 1
        else: cnt2 += 1
        on = not on
    return min(cnt1, cnt2)

# shorter solution
# def lamps(a):
#     n = sum(1 for i, x in enumerate(a) if x != i % 2)
#     return min(n, len(a) - n)


print(lamps([1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1]),5)
print(lamps([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]),6)
print(lamps([1, 0, 1]),0)
print(lamps([1, 0, 1, 0]),0)
print(lamps([0, 1, 0, 1, 0]),0)
print(lamps([1, 0, 1, 0, 0, 1, 0, 1]),4)
print(lamps([1,0,0,1,1,0,0,0,0,1,0]),5)
print(lamps([1, 1, 1, 1, 0, 1, 0, 1, 1]),3)