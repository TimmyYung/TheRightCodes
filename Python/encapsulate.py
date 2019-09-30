def count_letters(counting,letter):
    count = 0
    for char in counting:
        if char == letter:
            count += 1
    return count

print(count_letters("banana",'a'))