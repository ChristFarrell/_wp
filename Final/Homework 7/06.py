def count_chars(x):
    result = {}
    for char in x:
        if char in result:
            result[char] += 1
        else:
            result[char] = 1
    return result

print(count_chars("hello"))