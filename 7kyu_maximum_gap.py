# Introduction and Warm-up (Highly recommended)
# Playing With Lists/Arrays Series
# Task

# Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.
# Notes

#     Array/list size is at least 3 .

#     Array/list's numbers Will be mixture of positives and negatives also zeros_

#     Repeatition of numbers in the array/list could occur.

#     The Maximum Gap is computed Regardless the sign.

# Input >> Output Examples

# 1- maxGap ({13,10,5,2,9}) ==> return (4)

# Explanation:

#     The Maximum Gap after sorting the array is 4 , The difference between 9 - 5 = 4 .

# 2- maxGap ({-3,-27,-4,-2}) ==> return (23)

# Explanation:

#     The Maximum Gap after sorting the array is 23 , The difference between |-3- (-27) | = 23 .

#     Note : Regardless the sign of negativity .

# 3- maxGap ({-7,-42,-809,-14,-12}) ==> return (767)  

# Explanation:

#     The Maximum Gap after sorting the array is 767 , The difference between | -809- (-42) | = 767 .

#     Note : Regardless the sign of negativity .

# 4- maxGap ({-54,37,0,64,640,0,-15}) //return (576)

# Explanation:

#     The Maximum Gap after sorting the array is 576 , The difference between | 64 - 640 | = 576 .

#     Note : Regardless the sign of negativity .

def max_gap(nums):
    largest_gap = 0
    nums.sort()
    for i in range(len(nums)-1):
        gap = abs(nums[i] - nums[i+1])
        if largest_gap < gap:
            largest_gap = gap
    return largest_gap 


print(max_gap([13,10,2,9,5]),4)
print(max_gap([13,3,5]),8)
print(max_gap([24,299,131,14,26,25]),168)
print(max_gap([-3,-27,-4,-2]),23)
print(max_gap([-7,-42,-809,-14,-12]),767)
print(max_gap([12,-5,-7,0,290]),278)
print(max_gap([-54,37,0,64,-15,640,0]),576)
print(max_gap([130,30,50]),80)
print(max_gap([1,1,1]),0)
print(max_gap([-1,-1,-1]),0)