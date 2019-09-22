S = "1, 4, 2, 6, 3, 7" # String with numbers
spliter = S.split(",") # Split all of the numbers individually
list1 = [int(i) for i in spliter] # Convert the string into integers
adder = sum(list1) # Add all of the intergers
print(adder) # Prints the results of the addition
