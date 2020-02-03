# #Find the missing letter

# Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

# You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
# The array will always contain letters in only one case.

# Example:

# ['a','b','c','d','f'] -> 'e'
# ['O','Q','R','S'] -> 'P'

# (Use the English alphabet with 26 letters!)

def find_missing_letter(chars):
    last = ord(chars[0])
    for c in range(1, len(chars)):
        if 1 < ord(chars[c]) - last:
            return chr(last + 1)
        last += 1
        



print(find_missing_letter(['a','b','c','d','f']))
print(find_missing_letter(['O','Q','R','S']))
print(find_missing_letter(['n','o','q']))
print(find_missing_letter(['X','Z']))