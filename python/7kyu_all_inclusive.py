# Input:

#     a string strng
#     an array of strings arr

# Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):

#     a boolean true if all rotations of strng are included in arr (C returns 1)
#     false otherwise (C returns 0)

# Examples:

# contain_all_rots(
#   "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true

# contain_all_rots(
#   "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)

# Note:

# Though not correct in a mathematical sense

#     we will consider that there are no rotations of strng == ""
#     and for any array arr: contain_all_rots("", arr) --> true

def contain_all_rots(s, arr):
    for i in range(len(s)):
        if s not in arr: return False
        s = s[-1] + s[:len(s)-1]
    return True


print(contain_all_rots("", []))
print(contain_all_rots("", ["bsjq", "qbsj"]))
print(contain_all_rots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]))
print(contain_all_rots("XjYABhR", ["TzYxlgfnhf", "yqVAuoLjMLy", "BhRXjYA", "YABhRXj", "hRXjYAB", "jYABhRX", "XjYABhR", "ABhRXjY"]))