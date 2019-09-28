# You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

# 12 ==> 21
# 513 ==> 531
# 2017 ==> 2071

# If no bigger number can be composed using those digits, return -1:

# 9 ==> -1
# 111 ==> -1
# 531 ==> -1

def next_bigger(n):
    # Convert digits in n to list of strings
    digits = [x for x in str(n)]

    # Test if possible to have larger number with same digits
    # Return -1 if test fails
    if len(digits) == 1: return -1
    for i in range(0, len(digits)):
        if i < len(digits) - 1:
            if digits[i] < sorted(digits[i+1:], reverse=True)[0]:
                break
        else:
            return -1
    
    # Sort digits list for easy comparison
    digits.sort()

    # Loop through ascending range from n+1 to 10^x where x is length of n
    for num in range(n+1, 10**len(str(n))):
        if sorted([x for x in str(num)]) == digits:
            return num



print(next_bigger(12),21)
print(next_bigger(513),531)
print(next_bigger(2017),2071)
print(next_bigger(414),441)
print(next_bigger(144),414)
print(next_bigger(5),-1)
print(next_bigger(962),-1)

# Other solution
# def next_bigger(n):
#     s = list(str(n))
#     for i in range(len(s)-2,-1,-1):
#         if s[i] < s[i+1]:
#             t = s[i:]
#             m = min(filter(lambda x: x>t[0], t))
#             t.remove(m)
#             t.sort()
#             s[i:] = [m] + t
#             return int("".join(s))
#     return -1