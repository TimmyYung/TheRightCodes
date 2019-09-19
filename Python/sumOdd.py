list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

result = 0
for num in list1:
    if  num % 2 != 0:
        result += num
        print(result)

print("The odd numbers equal to", result)

