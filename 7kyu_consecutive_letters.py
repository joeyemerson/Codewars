# In this Kata, we will check if a string contains consecutive letters as they appear in the English alphabet and if each letter occurs only once.

# For example: 
# solve("abc") = True, because it contains a,b,c
# solve("abd") = False, because a, b, d are not consecutive.
# solve("dabc") = True, because it contains a, b, c, d
# solve("abbc") = False, because b does not occur once.
# solve("v") = True

# All inputs will be lowercase letters.

# More examples in test cases. Good luck!

def solve(st):
    alpha = 'abcdefghijklmnopqrstuvwxyz'
    return ''.join(sorted(st)) in alpha



print(solve("abc"),True)
print(solve("abd"), False)
print(solve("dabc"),True)
print(solve("abbc"), False)