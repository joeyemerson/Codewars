# In this kata, your task is to write a function that returns the smallest and largest integers in an unsorted string.
# Input
# Your function will receive two arguments:

#     A string comprised of integers in an unknown range; these numbers will be out of order
#     An integer value representing the size of the range

# Output
# Your function should return the starting (minimum) and ending (maximum) numbers of the range in the form of an array/list comprised of two integers.
# Test Example

# input_string = '1568141291110137'

# mystery_range(input_string,10) # [6,15]

# # The 10 numbers in this string are:
# # 15 6 8 14 12 9 11 10 13 7
# # Therefore the range of numbers is from 6 to 15

# Technical Details

#     The maximum size of a range will be 100 integers
#     The starting number of a range will be: 0 < n < 100
#     Full Test Suite: 21 fixed tests, 100 random tests
#     Use Python 3+ for the Python translation
#     For JavaScript, require has been disabled and most built-in prototypes have been frozen (prototype methods can be added to Array and Function)
#     All test cases will be valid

def mystery_range(s, n):
    sorted_str = sorted(s)
    for i in range(99,0,-1):
        sorted_rng = sorted(''.join(str(x) for x in range(i,i+n)))
        if sorted_rng == sorted_str:
            if all(str(x for x in range(i,i-n+1))):
                return [i,i+n-1]

print(mystery_range('6291211413114538107',14),[1,14])
print(mystery_range('13161820142119101112917232215',15),[9,23])
print(mystery_range('2318134142120517221910151678611129',20),[4,23])
print(mystery_range('10610211511099104113100116105103101111114107108112109',18),[99,116])
print(mystery_range('1721532418565922162558663126649136347436733301144143236653738464135820194215516155541239452852623450572927602348104049',60),[8,67])