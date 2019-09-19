list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

odd_count = 0

for num in list1:
    if num % 2 != 0:
        odd_count += 1

print ("There are", odd_count, "odd numbers in the list.")