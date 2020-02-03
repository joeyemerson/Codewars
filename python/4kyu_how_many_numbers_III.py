# We want to generate all the numbers of three digits where:
#     the sum of their digits is equal to 10
#     - AND -
#     their digits are in increasing order (the numbers may have two or more
#     equal contiguous digits).

# The numbers that fulfill the two above constraints are: 118, 127, 136, 145,
# 226, 235, 244, 334

# Make a function that receives two arguments:
#     the sum of digits value
#     the desired number of digits for the numbers

# The function should output an array with three values: [1,2,3]
# 1 - the total number of possible numbers
# 2 - the minimum number
# 3 - the maximum number

# The example given above should be:
# find_all(10, 3) == [8, 118, 334]

# If we have only one possible number as a solution, it should output a result
# like the one below:
# find_all(27, 3) == [1, 999, 999]

# If there are no possible numbers, the function should output the empty array.
# find_all(84, 4) == []

# The number of solutions climbs up when the number of digits increases.
# find_all(35, 6) == [123, 116999, 566666]

# Features of the random tests:
#     Number of tests: 112
#     Sum of digits value between 20 and 65
#     Amount of digits between 2 and 17


def sum_of_digits(n):
    result = 0
    while 0 < n:
        result = result + n % 10
        n = n // 10
    return result


def is_increasing(n):
    prev = n % 10
    n = n // 10
    while 0 < n:
        curr = n % 10
        if prev < curr:
            return False
        prev = curr
        n = n // 10
    return True


def is_valid_num(n, target):
    return sum_of_digits(n) == target and is_increasing(n)


def find_all(sum_dig, digs):
    s = set()
    i = 10 ** (digs - 1)
    limit = 10 ** (digs)

    while i < limit:
        if is_valid_num(i, sum_dig):
            s.add(i)
            i = i + 9
            break
        i = i + 1

    while i < limit:
        if is_valid_num(i, sum_dig):
            s.add(i)
        i = i + 9

    return [len(s), min(s), max(s)] if s else []


print(find_all(10, 3), [8, 118, 334])
print(find_all(27, 3), [1, 999, 999])
print(find_all(84, 4), [])
print(find_all(35, 6), [123, 116999, 566666])
