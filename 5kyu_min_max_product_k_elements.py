# This is the advanced version of the Minimum and Maximum Product of k
# Elements kata.

# Given a list of integers and a positive integer k (> 0), find the minimum
# and maximum possible product of k elements taken from the list.

# If you cannot take enough elements from the list, return None/nil.
# Examples

# numbers = [1, -2, -3, 4, 6, 7]

# k = 1  ==>  -3, 7
# k = 2  ==>  -21, 42    # -3*7, 6*7
# k = 3  ==>  -126, 168  # -3*6*7, 4*6*7
# k = 7  ==>  None       # there are only 6 elements in the list

# Note: the test lists can contain up to 500 elements, so a naive approach
# will not work.

# This brute force approach will time out on Codewars

from functools import reduce
from itertools import combinations
from operator import mul


def find_min_max_product(arr, k):
    # If length of array less than k, return None
    if k > len(arr):
        return None

    # if k == 1, return single items of min and max in array
    if k == 1:
        return min(arr), max(arr)

    # if k == array length, return product of all elements
    if k == len(arr):
        product = reduce(mul, arr)
        return product, product

    # collect products of all permutations of size k
    products = [reduce(mul, nums) for nums in combinations(arr, k)]

    return min(products), max(products)


a = [1, -2, -3, 4, 6, 7]
print(find_min_max_product(a, 1), (-3, 7))
print(find_min_max_product(a, 2), (-21, 42))
print(find_min_max_product(a, 3), (-126, 168))
print(find_min_max_product(a, 7), None)
