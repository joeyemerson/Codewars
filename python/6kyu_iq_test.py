# Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

# ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

# ##Examples :

# iq_test('2 4 7 8 10') => 3 // Third number is odd, while the rest of the numbers are even

# iq_test('1 2 1 1') => 2 // Second number is even, while the rest of the numbers are odd

def iq_test(nums):
    nums = [int(x) for x in nums.split()]
    odds = [x for x in nums if x % 2]
    evens = [x for x in nums if x % 2 == 0]
    if len(odds) == 1:
        return nums.index(odds[0]) + 1
    return nums.index(evens[0]) + 1


print(iq_test('2 4 7 8 10'))
print(iq_test('1 2 2'))
print(iq_test('5 7 9 11 12 15 77'))
print(iq_test('3 67 999 42 55'))
print(iq_test('33 21 19 15 9 47 33 17 39 3 50 47 35 43 37 11 31 31 31 1 17 51 43 47 31 45'))

# sample solution
# def iq_test(numbers):
#     e = [int(i) % 2 == 0 for i in numbers.split()]

#     return e.index(True) + 1 if e.count(True) == 1 else e.index(False) + 1

# sample solution
# def iq_test(n):
#     n = [int(i)%2 for i in n.split()]
#     if n.count(0)>1:
#         return n.index(1)+1
#     else:
#         return n.index(0)+1