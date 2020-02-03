# John keeps a backup of his old personal phone book as a text file. On each
# line of the file he can find the phone number (formated as +X-abc-def-ghij
# where X stands for one or two digits), the corresponding name between <
# and > and the address.

# Unfortunately everything is mixed, things are not always in the same order;
# parts of lines are cluttered with non-alpha-numeric characters (except inside
# phone number and name).

# Examples of John's phone book lines:

# "/+1-541-754-3010 156 Alphand_St. <J Steeve>\n"

# " 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010!\n"

# "<Anastasia> +48-421-674-8974 Via Quirinal Roma\n"

# Could you help John with a program that, given the lines of his phone book
# and a phone number returns a string for this number : "Phone => num, Name =>
# name, Address => adress"

# Examples:

# s = "/+1-541-754-3010 156 Alphand_St. <J Steeve>\n 133, Green, Rd. <E Kustur>
# NY-56423 ;+1-541-914-3010!\n"

# phone(s, "1-541-754-3010") should return "Phone => 1-541-754-3010, Name => J
# Steeve, Address => 156 Alphand St."

# It can happen that, for a few phone numbers, there are many people for a
# phone number -say nb- , then

# return : "Error => Too many people: nb"

# or it can happen that the number nb is not in the phone book, in that case

# return: "Error => Not found: nb"

# You can see other examples in the test cases.

import re


def phone(s, n):
    # search lines for correct phone number and add matches to contacts array
    regex_phone = r"^.+" + n + r".+$"
    contacts = re.findall(regex_phone, s, re.M)

    # if contacts != 1, return appropriate error
    if not contacts:
        return f"Error => Not found: {n}"
    if 1 < len(contacts):
        return f"Error => Too many people: {n}"

    # get formatted name
    name = re.match(r"^.*<(.+)>.*$", contacts[0]).group(1)

    # get formatted address
    address = (
        re.sub(r"\+?\d{1,2}-\d{3}-\d{3}-\d{4}|<.+>|[;/$*!?,:]", "", contacts[0])
        .replace("_", " ")
        .replace("  ", " ")
        .strip()
    )

    # return formatted string
    return f"Phone => {n}, Name => {name}, Address => {address}"


# another user's great solution
# from re import sub

# def phone(dir, num):
#     if dir.count("+" + num) == 0:
#         return "Error => Not found: " + num

#     if dir.count("+" + num) > 1:
#         return "Error => Too many people: " + num

#     for line in dir.splitlines():
#         if "+" + num in line:
#             name = sub(".*<(.*)>.*", "\g<1>", line)
#             line = sub("<" + name + ">|\+" + num, "", line)
#             address = " ".join(sub("[^a-zA-Z0-9\.-]", " ", line).split())
#             return "Phone => %s, Name => %s, Address => %s" % (num, name, address)

dr = (
    "/+1-541-754-3010 156 Alphand_St. <J Steeve>\n 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010;\n"
    "+1-541-984-3012 <P Reed> /PO Box 530; Pollocksville, NC-28573\n :+1-321-512-2222 <Paul Dive> Sequoia Alley PQ-67209\n"
    "+1-741-984-3090 <Peter Reedgrave> _Chicago\n :+1-921-333-2222 <Anna Stevens> Haramburu_Street AA-67209\n"
    "+1-111-544-8973 <Peter Pan> LA\n +1-921-512-2222 <Wilfrid Stevens> Wild Street AA-67209\n"
    "<Peter Gone> LA ?+1-121-544-8974 \n <R Steell> Quora Street AB-47209 +1-481-512-2222!\n"
    "<Arthur Clarke> San Antonio $+1-121-504-8974 TT-45120\n <Ray Chandler> Teliman Pk. !+1-681-512-2222! AB-47209,\n"
    "<Sophia Loren> +1-421-674-8974 Bern TP-46017\n <Peter O'Brien> High Street +1-908-512-2222; CC-47209\n"
    "<Anastasia> +48-421-674-8974 Via Quirinal Roma\n <P Salinger> Main Street, +1-098-512-2222, Denver\n"
    "<C Powel> *+19-421-674-8974 Chateau des Fosses Strasbourg F-68000\n <Bernard Deltheil> +1-498-512-2222; Mount Av.  Eldorado\n"
    "+1-099-500-8000 <Peter Crush> Labrador Bd.\n +1-931-512-4855 <William Saurin> Bison Street CQ-23071\n"
    "<P Salinge> Main Street, +1-098-512-2222, Denve\n"
)


print(
    phone(dr, "48-421-674-8974")
    == "Phone => 48-421-674-8974, Name => Anastasia, Address => Via Quirinal Roma"
)
print(
    phone(dr, "1-921-512-2222")
    == "Phone => 1-921-512-2222, Name => Wilfrid Stevens, Address => Wild Street AA-67209"
)
print(
    phone(dr, "1-908-512-2222")
    == "Phone => 1-908-512-2222, Name => Peter O'Brien, Address => High Street CC-47209"
)
print(
    phone(dr, "1-541-754-3010")
    == "Phone => 1-541-754-3010, Name => J Steeve, Address => 156 Alphand St."
)
print(
    phone(dr, "1-121-504-8974")
    == "Phone => 1-121-504-8974, Name => Arthur Clarke, Address => San Antonio TT-45120"
)
print(
    phone(dr, "1-498-512-2222")
    == "Phone => 1-498-512-2222, Name => Bernard Deltheil, Address => Mount Av. Eldorado"
)
print(
    phone(dr, "1-098-512-2222") == "Error => Too many people: 1-098-512-2222"
)
print(phone(dr, "5-555-555-5555") == "Error => Not found: 5-555-555-5555")
