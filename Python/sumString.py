def sorter(spliter):
    slicer = spliter.split(",") # Split all of the numbers individually
    list1 = [int(i) for i in slicer] # Convert the string into integers
    adder = sum(list1) # Add all of the integers
    return adder
print(sorter("1, 4, 2, 6, 3, 7")) # Prints the results of the addition