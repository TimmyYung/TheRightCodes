sentences = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco".split()

counter = 0

for word in sentences:
    if len(word) == 5:
        counter += 1

print(counter)