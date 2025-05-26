def find_the_odd_even(numbers):
    result = {'Even': [], 'Odd': []}
    for a in numbers:
        if a % 2 == 0:
            result['Even'].append(a)
        else:
            result['Odd'].append(a)
    return result

print(find_the_odd_even([7, 4, 3, 9, 2, 5]))