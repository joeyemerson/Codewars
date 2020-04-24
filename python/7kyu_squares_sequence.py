# Complete the function that returns an array of length n, starting with the
# given number x and the squares of the previous number. If n is negative or
# zero, return an empty array/list.

# Examples

# 2, 5  -->  [2, 4, 16, 256, 65536]
# 3, 3  -->  [3, 9, 81]


def squares(base, limit):
    if limit < 1:
        return []

    result = [base]

    for i in range(1, limit):
        result.append(result[i - 1] ** 2)

    return result


print(squares(2, 5), [2, 4, 16, 256, 65536])
print(squares(3, 3), [3, 9, 81])
print(squares(5, 3), [5, 25, 625])
print(squares(10, 4), [10, 100, 10000, 100000000])
print(squares(2, 0), [])
print(squares(2, -5), [])
