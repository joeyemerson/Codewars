# Given a string and an array of index numbers, return the characters of the string rearranged to be in the order specified by the accompanying array.

# Ex:

# scramble('abcd', [0,3,1,2]) -> 'acdb'

# The string that you will be returning back will have: 'a' at index 0, 'b' at index 3, 'c' at index 1, 'd' at index 2, because the order of those characters maps to their corisponding numbers in the index array.

# In other words, put the first character in the string at the index described by the first element of the array

# You can assume that you will be given a string and array of equal length and both containing valid characters (A-Z, a-z, or 0-9).

def scramble(str, arr):
    return ''.join(x[1] for x in sorted(list(zip(arr, str)), key=lambda x: x[0]))

# Better solution from another user
# def scramble(string, array):
#     return "".join(v for _, v in sorted(zip(array, string)))

print(scramble('abcd', [0,3,1,2]), 'acdb')
print(scramble('sc301s', [4,0,3,1,5,2]), "c0s3s1")
print(scramble('bskl5', [2,1,4,3,0]), "5sblk")