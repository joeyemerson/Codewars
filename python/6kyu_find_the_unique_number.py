# There is an array with some numbers. All numbers are equal except for one. Try to find it!

# find_uniq([ 1, 1, 1, 2, 1, 1 ]) == 2
# find_uniq([ 0, 0, 0.55, 0, 0 ]) == 0.55

# It’s guaranteed that array contains more than 3 numbers.

# The tests contain some very huge arrays, so think about performance.

import random 

def find_uniq(arr):
    if arr[0] == arr[1]: common = arr[0]
    else: common = arr[2]
    for num in arr:
        if num != common: return num

# Ask user to enter array length
user_input = input("How large should the array be? (enter a whole number larger than 3)\n")
try:
    arr_length = int(user_input)
except:
    arr_length = random.randint(4, 1000)
    print("\n\n*****************************************************\n")
    print(f"Sorry, your input of \'{user_input}\' is invalid.\nI've assigned an array length of {arr_length} for you.\n")
    print("*****************************************************\n")

# Generate array of 1's with random length
num_arr = []
for x in range(1, arr_length + 1):
    num_arr.append(1)

# Add a unique value (greater than 1) to the array at a random index
num_arr[random.randint(0, len(num_arr) - 1)] = random.randint(2,1000)

# Display results
print(num_arr)
print(f"Array Items: {len(num_arr)}")
print(f"Unique Value: {find_uniq(num_arr)}.")