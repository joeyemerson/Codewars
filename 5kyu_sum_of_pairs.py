# Sum of Pairs

# Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

# sum_pairs([11, 3, 7, 5],         10)
# #              ^--^      3 + 7 = 10
# == [3, 7]

# sum_pairs([4, 3, 2, 3, 4],         6)
# #          ^-----^         4 + 2 = 6, indices: 0, 2 *
# #             ^-----^      3 + 3 = 6, indices: 1, 3
# #                ^-----^   2 + 4 = 6, indices: 2, 4
# #  * entire pair is earlier, and therefore is the correct answer
# == [4, 2]

# sum_pairs([0, 0, -2, 3], 2)
# #  there are no pairs of values that can be added to produce 2.
# == None/nil/undefined (Based on the language)

# sum_pairs([10, 5, 2, 3, 7, 5],         10)
# #              ^-----------^   5 + 5 = 10, indices: 1, 5
# #                    ^--^      3 + 7 = 10, indices: 3, 4 *
# #  * entire pair is earlier, and therefore is the correct answer
# == [3, 7]

# Negative numbers and duplicate numbers can and will appear.

# Note: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.

# This solution was too slow for CodeWars timeout
def sum_pairs(ints, s):
    for i in range(0, len(ints)):
        for j in range(i + 1, len(ints)):
            if ints[i] + ints[j] == s:
                result = [ints[i], ints[j]]
                for x in range(1, int(round( (j - i) / 2 ))):
                    for y in range(i + 1, j):
                        if ints[y] + ints[y+x] == s:
                            return [ints[y], ints[y+x]]
                return result
    return None

# Inspired by solution from top of "Best Practices" list
def sum_pairs2(ints, s):
    cache = set()
    for i in ints:
        if s - i in cache:
            return [s - i, i]
        cache.add(i)


l1= [1, 4, 8, 7, 3, 15]
l2= [1, -2, 3, 0, -6, 1]
l3= [20, -13, 40]
l4= [1, 2, 3, 4, 1, 0]
l5= [10, 5, 2, 3, 7, 5]
l6= [4, -2, 3, 3, 4]
l7= [0, 2, 0]
l8= [5, 9, 13, -3]

# print(sum_pairs(l1, 8),
# sum_pairs(l2, -6),
# sum_pairs(l3, -7),
# sum_pairs(l4, 2),
# sum_pairs(l5, 10),
# sum_pairs(l6, 8),
# sum_pairs(l7, 0),
# sum_pairs(l8, 10))

print(sum_pairs2(l1, 8),
sum_pairs2(l2, -6),
sum_pairs2(l3, -7),
sum_pairs2(l4, 2),
sum_pairs2(l5, 10),
sum_pairs2(l6, 8),
sum_pairs2(l7, 0),
sum_pairs2(l8, 10))