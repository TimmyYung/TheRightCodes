import math

def find_hypot(a, b):
    first_step = a ** 2 + b **2
    hypo = math.sqrt(first_step)
    return hypo

print(find_hypot(1, 1))