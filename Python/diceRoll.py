import random

mini = 1
maxi = 6

while True:
    selected = random.randint(mini, maxi)
    print("You rolled: ", selected)
    input("Press enter to roll again.")