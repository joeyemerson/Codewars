# This time no story, no theory. The examples below show you how to write function accum:

# Examples:

# accum("abcd") -> "A-Bb-Ccc-Dddd"
# accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
# accum("cwAt") -> "C-Ww-Aaa-Tttt"

# The parameter of accum is a string which includes only letters from a..z and A..Z.


def accum(s):
    arr = []
    counter = 1
    for char in s:
        temp_s = ''
        temp_s += char.upper()
        temp_s += (counter - 1) * char.lower()
        arr.append(temp_s)
        counter += 1
    return '-'.join(x for x in arr)

print(accum('abcdef'))