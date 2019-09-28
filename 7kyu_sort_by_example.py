# Given an Array and an Example-Array to sort to, write a function that sorts the Array following the Example-Array.

# Assume Example Array catalogs all elements possibly seen in the input Array. However, the input Array does not necessarily have to have all elements seen in the Example.

# Example:

# Arr: [1,3,4,4,4,4,5]

# Example Arr: [4,1,2,3,5]

# Result: [4,4,4,4,1,3,5]

def example_sort(arr, example_arr):
    return sorted(arr, key=example_arr.index)


print(example_sort([1,2,3,4,5],[2,3,4,1,5]))
print(example_sort([1,2,3,3,3,4,5],[2,3,4,1,5]))
print(example_sort([1,2,3,3,3,5],[2,3,4,1,5]))
print(example_sort(["a","a","b","f","d","a"],["c","a","d","b","e","f"]))
