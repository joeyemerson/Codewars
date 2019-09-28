# Run-length encoding (RLE) is a very simple form of lossless data compression in which runs of data are stored as a single data value and count.

# A simple form of RLE would encode the string "AAABBBCCCD" as "3A3B3C1D" meaning, first there are 3 A, then 3 B, then 3 C and last there is 1 D.

# Your task is to write a RLE encoder and decoder using this technique. The texts to encode will always consist of only uppercase characters, no numbers.

import itertools

def encode(string):
    groups = [list(g) for k, g in itertools.groupby(string)]
    encoded_string = ''
    for group in groups:
        encoded_string += str(len(group)) + group[0]
    return encoded_string

def decode(string): 
    decoded_string = ''
    multiplier = ''
    for l in string:
        if l.isdigit():
            multiplier += l
        else:
            decoded_string += int(multiplier) * l
            multiplier = ''
    return decoded_string


print(encode("A"),"1A")
print(encode("AAA"),"3A")
print(encode("AB"),"1A1B")
print(encode("AAABBBCCCA"),"3A3B3C1A")

print(decode("1A"),"A")
print(decode("3A"),"AAA")
print(decode("1A1B"),"AB")
print(decode("3A3B3C1A"),"AAABBBCCCA")