# You are given an array with several "even" words, one "odd" word, and some numbers mixed in.

# Determine if any of the numbers in the array is the index of the "odd" word. If so, return true, otherwise false.

def odd_ball(arr):
    return arr.index('odd') in arr


print(odd_ball(["even",4,"even",7,"even",55,"even",6,"even",10,"odd",3,"even"]), True)
print(odd_ball(["even",4,"even",7,"even",55,"even",6,"even",9,"odd",3,"even"]), False)
print(odd_ball(["even",10,"odd",2,"even"]), True)