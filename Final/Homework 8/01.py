def find_the_maximum(numbers):
    maximum = numbers[0]
    for a in numbers:
        if a > maximum:
            maximum = a
    return maximum

print(find_the_maximum([12, 18, 14, 20, 5, 3]))