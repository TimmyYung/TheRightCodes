# Enter in numbers here
numbers = [2, 8, 2, 43, 8, 54, 13, 24, 754, 75, 8678, 45, 3242, 3543, 546, 8568]

def largestOdd():
    largest = 0 # Set the variable
    for number in numbers: # Go through a loop for each number
        if number % 2 != 0 and number > largest: # Work only if number is odd and bigger than 0
            largest = number # Set the variable to the largest odd number
    if largest == 0: # When there are no odd numbers in the array
        print("There were no odd integers")
    else:
        print(largest) # Output the largest odd number

largestOdd()