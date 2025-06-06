def the_most_common_number(nums):
    count = {}
    
    for x in nums:
        if x in count:
            count[x] += 1
        else:
            count[x] = 1
    
    the_most_common_number = max(count, key=count.get)
    return the_most_common_number

print(the_most_common_number([1, 2, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5, 5, 5, 6]))
