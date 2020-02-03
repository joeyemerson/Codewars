# Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

import re

def isDigit(s):
    if 0 < len(re.findall('[a-zA-Z]', s)): return False
    nums = re.findall('-?[0-9]+\.?[0-9]*', s)
    return len(nums) == 1


print(isDigit("3"))
print(isDigit("  3  "))
print(isDigit("-3.23"))

print(isDigit("3-4"))
print(isDigit("  3   5"))
print(isDigit("3 5"))
print(isDigit("zero"))

# better solution
# def isDigit(string):
#     try:
#         float(string)
#         return True
#     except:
#         return False