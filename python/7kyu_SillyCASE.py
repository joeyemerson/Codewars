# Create a function that takes a string and returns that string with the first
# half lowercased and the last half uppercased.

# eg: foobar == fooBAR

# If it is an odd number then 'round' it up to find which letters to uppercase.
# See example below.

# sillycase("brian")
#            --^-- midpoint
#            bri    first half (lower-cased)
#               AN second half (upper-cased)

from math import ceil


def sillycase(string):
    result = ""
    midpoint = ceil(len(string) / 2)
    for i in range(len(string)):
        if i < midpoint:
            result += string[i].lower()
        else:
            result += string[i].upper()
    return result


print(sillycase("foobar"), "fooBAR")
print(sillycase("codewars"), "codeWARS")
print(sillycase("brian"), "briAN")
