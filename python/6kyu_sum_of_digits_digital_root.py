# In this kata, you must create a digital root function.

# A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

# Here's how it works:

# digital_root(16)
# => 1 + 6
# => 7

# digital_root(942)
# => 9 + 4 + 2
# => 15 ...
# => 1 + 5
# => 6

# digital_root(132189)
# => 1 + 3 + 2 + 1 + 8 + 9
# => 24 ...
# => 2 + 4
# => 6

# digital_root(493193)
# => 4 + 9 + 3 + 1 + 9 + 3
# => 29 ...
# => 2 + 9
# => 11 ...
# => 1 + 1
# => 2

def sum_digits(n):
    return sum(int(x) for x in str(n))

def digital_root(n):
    while 9 < n:
        n = sum_digits(n)
    return n


print(digital_root(16))
print(digital_root(456))

# clever solution 1
# def digital_root(n):
#     return n if n < 10 else digital_root(sum(map(int,str(n))))

# clever solution 2  << crazy cool!
# def digital_root(n):
#   return n%9 or n and 9 

# clever solution 3
# def digital_root(n):
#     while n>9:
#         n=sum(map(int,str(n)))
#     return n