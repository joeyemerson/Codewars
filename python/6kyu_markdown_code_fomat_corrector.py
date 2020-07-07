# Markdown 101: Code Format Corrector
# Description

# We are writing the document README.md for our github but we have forgotten
# to format correctly the code.

# According to this documentation and this cheat sheet, a group of code lines
# must be surrounded by: ```
# Task

# Your function must insert new lines in the text containing only ``` in the
# next two cases:

#     Before the first line of consecutive code lines
#     After the last line of consecutive code lines

# Code lines:

#     >>> or & beginning a line mean "code".
#     \ at the end of a line means continuation of the current type of line.

# Examples
# Example 1

# One empty lines after code ending with \

# & code \
# & code \

# & code

# Should be:

# ```
# & code \
# & code \

# & code
# ```

# Because the empty line is considered code and the forth line is code.
# Example 2

# Two empty lines after code ending with \

# & code \
# & code \


# & code

# Should be:

# ```
# & code \
# & code \

# ```

# ```
# & code
# ```

# Because the first empty line is considered code but the second emply line
# does not follow a code line ending with \.

import re

pattern_code = re.compile(r"^>>>|^&")
pattern_continuation = re.compile(r"\\$")


def markdown_code_corrector(text):
    lines = text.splitlines()
    res = []
    continuation = False
    in_code_block = False

    for line in lines:
        if pattern_code.search(line) and not in_code_block:
            res.append("```")
            in_code_block = True
        elif not continuation and in_code_block:
            res.append("```")
            in_code_block = False
        elif not pattern_code.search(line):
            in_code_block = False
        res.append(line)
        continuation = pattern_continuation.search(line)
    if in_code_block:
        res.append("```")

    return "\n".join(res)


inp = "\n\n& compile max memoryview hash max \\"
out = "\n\n```\n& compile max memoryview hash max \\\n```"
print(markdown_code_corrector(inp), out)

inp = "\n\n>>> compile max memoryview hash max \\"
out = "\n\n```\n>>> compile max memoryview hash max \\\n```"
print(markdown_code_corrector(inp), out)

inp = "& locals dir hasattr object dir reversed pow print tuple\n&  \\\n\n\n& \
eval abs abs ord globals float getattr max sorted object round hex \\"
out = "```\n& locals dir hasattr object dir reversed pow print tuple\n&  \\\n\
\n```\n\n```\n& eval abs abs ord globals float getattr max sorted object round\
 hex \\\n```"
print(markdown_code_corrector(inp), out)

inp = """& code \\
& code \\

& code"""

out = """```
& code \\
& code \\

& code
```"""
print(markdown_code_corrector(inp), out)

inp = """& code \\
& code \\


& code"""

out = """```
& code \\
& code \\

```

```
& code
```"""
print(markdown_code_corrector(inp), out)
