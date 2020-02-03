# Count the number of occurrences of each character and return it as a list of tuples in order of appearance.

# Example:

# ordered_count("abracadabra") == [('a', 5), ('b', 2), ('r', 2), ('c', 1), ('d', 1)]

def ordered_count(input):
    result = list()
    chars = list()
    for c in input:
        if c in chars: continue
        result.append((c, input.count(c)))
        chars.append(c)
    return result


print(ordered_count('abracadabra'), '\n', [('a', 5), ('b', 2), ('r', 2), ('c', 1), ('d', 1)], '\n')
print(ordered_count('Code Wars'), '\n', [('C', 1), ('o', 1), ('d', 1), ('e', 1), (' ', 1), ('W', 1), ('a', 1), ('r', 1), ('s', 1)], '\n')