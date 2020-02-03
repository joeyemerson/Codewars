# Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

# This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

# All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.
# What is considered Valid?

# A string of braces is considered valid if all braces are matched with the correct brace.
# Examples

# "(){}[]"   =>  True
# "([{}])"   =>  True
# "(}"       =>  False
# "[(])"     =>  False
# "[({})](]" =>  False

def valid_braces(s):
    # check if equal number of open and closing braces
    if not s.count('(') == s.count(')') or not s.count('[') == s.count(']') or not s.count('{') == s.count('}'):
        return False

    # pass through string and look for invalid sequences
    for i in range(0, len(s) - 1):
        if s[i] == '(' and s[i+1] in '}]': return False
        if s[i] == '[' and s[i+1] in ')}': return False
        if s[i] == '{' and s[i+1] in ')]': return False

    # check if final character a closing brace
    if s[-1] not in ')]}': return False
        
    # if all tests pass, return True
    return True


print(valid_braces('(}'))
print(valid_braces('[()]{}[][({})]'))
print(valid_braces('())({}}{()][]['))

# Sample solution 1 -- awesome!
# def validBraces(s):
#   while '{}' in s or '()' in s or '[]' in s:
#       s=s.replace('{}','')
#       s=s.replace('[]','')
#       s=s.replace('()','')
#   return s==''

# Sample solution 2 -- still awesome
# def validBraces(string):
#     braces = {"(": ")", "[": "]", "{": "}"}
#     stack = []
#     for character in string:
#         if character in braces.keys():
#             stack.append(character)
#         else:
#             if len(stack) == 0 or braces[stack.pop()] != character:
#                 return False
#     return len(stack) == 0  