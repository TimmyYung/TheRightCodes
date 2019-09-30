list1 = [1, 5, 3, 4, 2, 8, 7, 9, 10] # List of integers missing num 6

def getMissingNo(A): # Defines the function
    n = len(A) # Gets the length of the list
    total = (n + 1)*(n + 2)/2 
    sum_of_A = sum(A) # Adds the numbers in the list
    return total - sum_of_A # Subtracts the total from the sum of the list

miss= getMissingNo(list1) # Create a new variable to find the missing num
print(miss) # Prints the results