# Given 2 strings, your job is to find out if there is a substring that appears in both strings. You will return true if you find a substring that appears in both strings, or false if you do not. We only care about substrings that are longer than one letter long.

# #Examples:

# *Example 1*
# SubstringTest("Something","Fun"); //Returns false

# *Example 2*
# SubstringTest("Something","Home"); //Returns true

# In the above example, example 2 returns true because both of the inputs contain the substring "me". (soMEthing and hoME)
# In example 1, the method will return false because something and fun contain no common substrings. (We do not count the 'n' as a substring in this Kata because it is only 1 character long)

# #Rules: Lowercase and uppercase letters are the same. So 'A' == 'a'.
# We only count substrings that are > 1 in length.

# #Input: Two strings with both lower and upper cases.

# #Output: A boolean value determining if there is a common substing between the two inputs.

def substring_test(s1, s2):
    for i in range(len(s1)-1):
        if s1[i:i+2].lower() in s2.lower(): return True
    return False


print(substring_test("Something","Home"), True)
print(substring_test("Something","Fun"), False)
print(substring_test("Something",""), False)
print(substring_test("","Something"), False)
print(substring_test("BANANA","banana"), True)
print(substring_test("test","lllt"), False)
print(substring_test("",""), False)
print(substring_test("1234567","541265"), True)
print(substring_test("supercalifragilisticexpialidocious","SoundOfItIsAtrocious"), True)
print(substring_test("LoremipsumdolorsitametconsecteturadipiscingelitAeneannonaliquetligulautplaceratorciSuspendissepotentiMorbivolutpatauctoripsumegetaliquamPhasellusidmagnaelitNullamerostellustemporquismolestieaornarevitaediamNullaaliquamrisusnonviverrasagittisInlaoreetultricespretiumVestibulumegetnullatinciduntsempersemacrutrumfelisPraesentpurusarcutempusnecvariusidultricesaduiPellentesqueultriciesjustolobortisrhoncusdignissimNuncviverraconsequatblanditUtbibendumatlacusactristiqueAliquamimperdietnuncsempertortorefficiturviverra","thisisalongstringtest"), True)