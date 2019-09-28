# The rgb() method is incomplete. Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.

# The following are examples of expected output values:

# rgb(255, 255, 255) # returns FFFFFF
# rgb(255, 255, 300) # returns FFFFFF
# rgb(0,0,0) # returns 000000
# rgb(148, 0, 211) # returns 9400D3


def rgb(r, g, b):
    hex_vals = str()
    for x in [r, g, b]:
        if x < 0: hex_vals += format(0, '02X')
        elif x > 255: hex_vals += format(255, '02X')
        else: hex_vals += format(x, '02X')
    return hex_vals


print("000000", rgb(0,0,0))
print("010203", rgb(1,2,3))
print("FFFFFF", rgb(255,255,255))
print("FEFDFC", rgb(254,253,252))
print("00FF7D", rgb(-20,275,125))