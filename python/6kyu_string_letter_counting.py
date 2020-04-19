# Take a string str and return a string that is made up of the number of
# occurences of each english letter in str, followed by that letter. The string
# shouldn't contain zeros; leave them out.

# An empty string, or one with no letters, should return an empty string.
# Notes

#     Ignore all case
#     str will never be null

# Examples

# "This is a test sentence."  =>  "1a1c4e1h2i2n4s4t"
# ""  =>  ""
# "555"  =>  ""

from collections import Counter
from string import ascii_lowercase as alphabet


def string_letter_count(s):
    res = ""
    occurences = Counter(s.lower())
    for letter in alphabet:
        if occurences[letter] != 0:
            res += f"{occurences[letter]}{letter}"
    return res


print(
    string_letter_count("The quick brown fox jumps over the lazy dog."),
    "\n\n",
    "1a1b1c1d3e1f1g2h1i1j1k1l1m1n4o1p1q2r1s2t2u1v1w1x1y1z",
    "\n\n",
)

print(
    string_letter_count("The time you enjoy wasting is not wasted time."),
    "\n\n",
    "2a1d5e1g1h4i1j2m3n3o3s6t1u2w2y",
    "\n\n",
)

print(
    string_letter_count("./4592#{}()"), "\n\n", "", "\n\n",
)
