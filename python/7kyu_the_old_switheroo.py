# Write

# def encode(str)

# that takes in a string str and replaces all the letters with their respective
# positions in the English alphabet.

# encode('abc') == '123'   # a is 1st in English alpabet, b is 2nd and c is 3rd
# encode('codewars') == '315452311819'
# encode('abc-#@5') == '123-#@5'

# String are case sensitive.

from string import (
    ascii_lowercase as alpha_lower,
    ascii_uppercase as alpha_upper,
)


def encode(string):
    result = ""
    for char in string:
        if char.islower():
            result += str(alpha_lower.index(char) + 1)
        elif char.isupper():
            result += str(alpha_upper.index(char) + 1)
        else:
            result += char
    return result


print(encode("ABCD"), "1234")
print(encode("ZzzzZ"), "2626262626")
print(encode("abc-#@5"), "123-#@5")
print(
    encode("this is a long string!! Please [encode] @C0RrEctly"),
    "208919 919 1 1215147 1920189147!! 161251195 [51431545] @30181853201225",
)
