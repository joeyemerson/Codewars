# A stream of data is received and needs to be reversed.

# Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

# 11111111  00000000  00001111  10101010
#  (byte1)   (byte2)   (byte3)   (byte4)

# should become:

# 10101010  00001111  00000000  11111111
#  (byte4)   (byte3)   (byte2)   (byte1)

# The total number of bits will always be a multiple of 8.

# The data is given in an array as such:

# [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]

# Note: In the C and NASM languages you are given the third parameter which is the number of segment blocks.


def data_reverse(data):
    bits = list()
    result = list()
    while data:
        bits.append(''.join(str(x) for x in data[0:8]))
        data = data[8:]
    for i in bits[::-1]:
        for j in i:
            result.append(int(j))
    return result


data1 = [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
data2 = [1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]

print(data_reverse(data1), data2)

data3 = [0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1]
data4 = [0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0]
print(data_reverse(data3), data4)