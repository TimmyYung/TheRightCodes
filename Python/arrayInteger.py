def converter(list2):
    list2 = [int(i) for i in list2] # Converts each item in the list to an integer
    list3 = sum(list2) # Adds the numbers in the list
    return list3

print(converter([1, 2, "3", 4, "5", 10, "12"]))
