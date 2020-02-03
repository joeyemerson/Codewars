# Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

# If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

# All inputs will be valid.

def last(s):
    return sorted(s.split(), key=lambda x: x[-1])


print(last("man i need a taxi up to ubud"), ["a", "need", "ubud", "i", "taxi", "man", "to", "up"])
print(last("what time are we climbing up the volcano"), ["time", "are", "we", "the", "climbing", "volcano", "up", "what"]) 
print(last("take me to semynak"), ["take", "me", "semynak", "to"])
print(last("massage yes massage yes massage"), ["massage", "massage", "massage", "yes", "yes"])
print(last("take bintang and a dance please"), ["a", "and", "take", "dance", "please", "bintang"])