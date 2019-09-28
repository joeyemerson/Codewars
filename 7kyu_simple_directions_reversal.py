# In this Kata, you will be given directions and your task will be to find your way back.

# solve(["Begin on Road A","Right on Road B","Right on Road C","Left on Road D"]) = ['Begin on Road D', 'Right on Road C', 'Left on Road B', 'Left on Road A']
# solve(['Begin on Lua Pkwy', 'Right on Sixth Alley', 'Right on 1st Cr']) =  ['Begin on 1st Cr', 'Left on Sixth Alley', 'Left on Lua Pkwy']

def solve(arr):
    rev_roads = [' '.join(x.split()[1:]) for x in arr][::-1]
    rev_dirs = ['Begin'] + [x.split()[0] for x in arr][-1:0:-1]
    way_back = []
    for i in range(len(rev_roads)):
        if rev_dirs[i] == 'Right':
            way_back.append('Left ' + rev_roads[i])
        elif rev_dirs[i] == 'Left':
            way_back.append('Right ' + rev_roads[i])
        else:
            way_back.append('Begin ' + rev_roads[i])
    return way_back


print(solve(['Begin on 3rd Blvd', 'Right on First Road', 'Left on 9th Dr']))

# print(solve(['Begin on 3rd Blvd', 'Right on First Road', 'Left on 9th Dr']), ['Begin on 9th Dr', 'Right on First Road', 'Left on 3rd Blvd'])

# print(solve(["Begin on Road A","Right on Road B","Right on Road C","Left on Road D"]),['Begin on Road D', 'Right on Road C', 'Left on Road B', 'Left on Road A'])

# print(solve(["Begin on Road A"]),['Begin on Road A'])