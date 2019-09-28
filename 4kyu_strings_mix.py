# Given two strings s1 and s2, we want to visualize how different the two strings are. We will only take into account the lowercase letters (a to z). First let us count the frequency of each lowercase letters in s1 and s2.

# s1 = "A aaaa bb c"

# s2 = "& aaa bbb c d"

# s1 has 4 'a', 2 'b', 1 'c'

# s2 has 3 'a', 3 'b', 1 'c', 1 'd'

# So the maximum for 'a' in s1 and s2 is 4 from s1; the maximum for 'b' is 3 from s2. In the following we will not consider letters when the maximum of their occurrences is less than or equal to 1.

# We can resume the differences between s1 and s2 in the following string: "1:aaaa/2:bbb" where 1 in 1:aaaa stands for string s1 and aaaa because the maximum for a is 4. In the same manner 2:bbb stands for string s2 and bbb because the maximum for b is 3.

# The task is to produce a string in which each lowercase letters of s1 or s2 appears as many times as its maximum if this maximum is strictly greater than 1; these letters will be prefixed by the number of the string where they appear with their maximum value and :. If the maximum is in s1 as well as in s2 the prefix is =:.

# In the result, substrings (a substring is for example 2:nnnnn or 1:hhh; it contains the prefix) will be in decreasing order of their length and when they have the same length sorted in ascending lexicographic order (letters and digits - more precisely sorted by codepoint); the different groups will be separated by '/'. See examples and "Example Tests".

# Hopefully other examples can make this clearer.

# s1 = "my&friend&Paul has heavy hats! &"
# s2 = "my friend John has many many friends &"
# mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

# s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
# s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
# mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

# s1="Are the kids at home? aaaaa fffff"
# s2="Yes they are here! aaaaa fffff"
# mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"


def mix(s1, s2):
    # create hash of lowercase character counts
    counts1 = dict()
    counts2 = dict()
    chars = set()
    result = list()
    for c in s1:
        if c.islower():
            counts1[c] = counts1.get(c, 0) + 1
            chars.add(c)
    for c in s2:
        if c.islower():
            counts2[c] = counts2.get(c, 0) + 1
            chars.add(c)
    for c in chars:
        if c in counts1 and c in counts2:
            if counts1[c] == counts2[c]:
                result.append('=:' + c * counts1[c])
            elif counts1[c] < counts2[c]:
                result.append('2:' + c * counts2[c])
            else:
                result.append('1:' + c * counts1[c])
        elif c in counts1:
            result.append('1:' + c * counts1[c])
        else:
            result.append('2:' + c * counts2[c])
    result = sorted([x for x in result if 3 < len(x)], key=lambda l: (-len(l), l))
    return '/'.join(result)


print(mix("Are they here", "yes, they are here"))
print(mix("looping is fun but dangerous", "less dangerous than coding"))
print(mix(" In many languages", " there's a pair of functions"))
print(mix("Lords of the Fallen", "gamekult"))
print(mix("codewars", "codewars"))
print(mix("A generation must confront the looming ", "codewarrs"))

# what a GREAT solution!!!!
# from collections import Counter

# def mix(s1, s2):
#     c1 = Counter(filter(str.islower, s1))
#     c2 = Counter(filter(str.islower, s2))
#     res = []
#     for c in set(c1.keys() + c2.keys()):
#         n1, n2 = c1.get(c, 0), c2.get(c, 0)
#         if n1 > 1 or n2 > 1:
#             res.append(('1', c, n1) if n1 > n2 else
#                 ('2', c, n2) if n2 > n1 else ('=', c, n1))
#     res = ['{}:{}'.format(i, c * n) for i, c, n in res]
#     return '/'.join(sorted(res, key=lambda s: (-len(s), s)))

# also very nice!
# def mix(s1, s2):
#     c1 = {l: s1.count(l) for l in s1 if l.islower() and s1.count(l) > 1}
#     c2 = {l: s2.count(l) for l in s2 if l.islower() and s2.count(l) > 1}
#     r = []
#     for c in set(c1.keys() + c2.keys()):
#         n1, n2 = c1.get(c, 0), c2.get(c, 0)
#         r.append(('1', c, n1) if n1 > n2 else
#                  ('2', c, n2) if n2 > n1 else
#                  ('=', c, n1))

#     rs = ['{}:{}'.format(i, c * n) for i, c, n in r]
#     return '/'.join(sorted(rs, key=lambda s: (-len(s), s)))