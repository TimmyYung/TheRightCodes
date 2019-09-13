def sum_to(number):
    total = 0
    for n in range(number+1):
        total += n
    return total

print(sum_to(10))