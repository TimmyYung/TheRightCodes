def turn_clockwise(x):
    if x == "N":
        print("E")
    elif x == "E":
        print("S")
    elif x == "S":
        print("W")
    elif x == "W":
        print("N")
    else:
        print("None")

turn_clockwise("N")
turn_clockwise("W")
turn_clockwise(42)
turn_clockwise("rubbish")