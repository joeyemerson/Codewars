# Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are apart of the word in this kata.

def reverse_alternate(string):
    return ' '.join(word[::-1] if index % 2 else word for index, word in enumerate(string.split()))


print(reverse_alternate("Did it work?"), "Did ti work?")
print(reverse_alternate("I really hope it works this time..."), "I yllaer hope ti works siht time...")
print(reverse_alternate("Reverse this string, please!"), "Reverse siht string, !esaelp")
print(reverse_alternate("Have a beer"), "Have a beer")
print(reverse_alternate(""), "")