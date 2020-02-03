# Task

# Given a string s, find out if its characters can be rearranged to form a palindrome.
# Example

# For s = "aabb", the output should be true.

# We can rearrange "aabb" to make "abba", which is a palindrome.
# Input/Output

#     [input] string s

#     A string consisting of lowercase English letters.

#     Constraints:

#     4 ≤ inputString.length ≤ 50.

#     [output] a boolean value

#     true if the characters of the inputString can be rearranged to form a palindrome, false otherwise.


def palindrome_rearranging(s):
    return sum(s.count(c) % 2 for c in set(s)) < 2


print(palindrome_rearranging("aabb"),True)
print(palindrome_rearranging("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc"),False)
print(palindrome_rearranging("abbcabb"),True)
print(palindrome_rearranging("zyyzzzzz"),True)