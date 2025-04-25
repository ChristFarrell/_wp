def prime_number(x):
    if x < 2:
        return False
    
    for i in range(2,x):
        if x % i == 0:
            return False
    return True
    
print(prime_number(7))