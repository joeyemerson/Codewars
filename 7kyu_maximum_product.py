# Task

# Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.
# Notes

#     Array/list size is at least 2.

#     Array/list numbers could be a mixture of positives, negatives also zeroes .

# Input >> Output Examples

# adjacentElementsProduct([1, 2, 3]); ==> return 6

# Explanation:

#     The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.

# adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48])  ==>  return 50

# Explanation:

# Max product obtained from multiplying 5 * 10 = 50.

# adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])  ==>  return -14

# Explanation:

#     The maximum product obtained from multiplying -2 * 7 = -14, and they're adjacent numbers in the array.

def adjacent_element_product(nums):
    max_product = int()
    for i in range(1, len(nums)):
        cur_product = nums[i] * nums[i-1]
        if not max_product or max_product < cur_product:
            max_product = cur_product 
    return max_product

print(adjacent_element_product([5, 8]), 40)
print(adjacent_element_product([1, 2, 3]), 6)
print(adjacent_element_product([1, 5, 10, 9]), 90)
print(adjacent_element_product([4, 12, 3, 1, 5]), 48)
print(adjacent_element_product([5, 1, 2, 3, 1, 4]), 6)