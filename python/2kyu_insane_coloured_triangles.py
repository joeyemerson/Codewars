import random


# Main function steps through rows and calls outside functions
# to update next row contents
def triangle(row):
    while 1 < len(row):
        row = next_row(row)
    return row


# Returns contents of the next row in series
def next_row(row):
    result = ""

    # Keys are the values returned when calculating difference
    # in ordinal numbers for character values
    rgb_lookup = {5: "R", 16: "G", 11: "B"}
    previous = ""

    first = True
    for item in row:
        # Skip first item in each row
        if first is True:
            first = False
            previous = item
            continue
        elif item == previous:
            result += item
        else:
            result += rgb_lookup[abs(ord(item) - ord(previous))]
        previous = item
    return result


# Was hoping to find some correlation between character counts
# and the final row, but does not seem to matter
def row_stats(row):
    counts = dict()
    for x in row:
        counts[x] = counts.get(x, 0) + 1
    return counts


# Everything below is currently set to export to csv. Analysis unsuccessful...
print("row_length,final_row,first_letter,last_letter,count_r,count_g,count_b")
counter = 1

while counter <= 1000:
    string = ""
    ubound = random.randint(25, 100)
    for _ in range(1, ubound):
        string += random.choice("RGB")
    counts = row_stats(string)
    print(
        f"{ubound},{triangle(string)},{string[0]},{string[len(string) - 1]},"
        + f"{counts['R']},{counts['G']},{counts['B']}"
    )
    counter += 1
