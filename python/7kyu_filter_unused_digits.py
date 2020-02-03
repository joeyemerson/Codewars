# Given few numbers, you need to print out the digits that are not being used.

# Example:

# unused_digits(12, 34, 56, 78) # "09"
# unused_digits(2015, 8, 26) # "3479"

# Note:

#     Result string should be sorted
#     The test case won't pass Integer with leading zer0

def unused_digits(*args):
    DIGITS = ('0', '1', '2', '3', '4', '5', '6', '7', '8', '9')
    used = set()
    for i in args:
        for j in str(i):
            used.add(j)
    return ''.join(x for x in DIGITS if x not in used)

# clever!
# def unused_digits(*args):
#     used = str(args)
#     return ''.join(d for d in '0123456789' if d not in used)


print(unused_digits(12, 34, 56, 78), "09")
print(unused_digits(2015, 8, 26), "3479")
print(unused_digits(276, 575), "013489")
print(unused_digits(643), "0125789")
print(unused_digits(864, 896, 744), "01235")