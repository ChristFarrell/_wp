def dict_to_string(d):
    result = ""
    length = len(d)
    for x, (key, value) in enumerate(d.items()):

        if x == length - 1:
            result += f"{key}: {value}"
        else:
            result += f"{key}: {value}, "
    return result

print(dict_to_string({'a': 1, 'b': 2}))