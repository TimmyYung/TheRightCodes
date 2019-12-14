import random
from time import clock


user_option = input("What option? (1 or 2): ")
lists = []
start = 0
stop = 1000000
limit =  [x ** 3 for x in range(30)]  

def listGenerateV1():
    """
    str -> list

    Returns a list with a number of items in an array equal to the input the person gives
    """
    if user_option == '1':
        limit = input("How long is your list? (Integers only): ")
        randInts = [random.randint(start, stop) for i in range(int(limit))] # Creates list with the "limit" variable as how many items in the list
    return randInts

def listGenerateV2():
    """
    int -> list

    Returns a list with each number representing how many items in the list 
    """
    for a in limit:
        randInts = [random.randint(start, stop) for i in range(int(a))] # Creates list with how many items in the list the user specifies
        lists.append(randInts)
        randInts = []
    return lists

def selectionSortV1(randInts): 
    """
    list -> list

    Sorts an unordered list of integers by repeatedly finding the lowest integer in the list from the unsorted part
    """   
    for i in range(len(randInts)):
        mini = i
        for j in range(i+1,len(randInts)): # Looks at every element in the array
            if randInts[mini] > randInts[j]: # If one element is bigger than another
                mini = j # Switch the values of the integers
        
        temp = randInts[i]
        randInts[i] = randInts[mini]
        randInts[mini] = temp
    return list(randInts)

def timSort(randInts):
    """
    list -> list

    Sorts an unodered list of integers using the function '.sort' which uses the algorithm TimSort
    """
    randInts.sort()
    return randInts

def optioner():
    """
    str -> file

    Returns a file that shows how long it took each algorithm to order a unordered list of integers
    """
    if user_option == "1":
        generator = listGenerateV1() 
        a = clock() # Clock module to test how long the algorithm takes

        print("SelectionSort" + '-'*50)
        print(selectionSortV1(generator))

        f = open("SelectionSortV1.txt", "w") # Creates a file to write text to 
        f.write(f"{clock()-a}") # Writes in the file how long the algorithm took
        f.close()


        print("TimSort" + '-'*50)
        a = clock()
        print(timSort(generator))

        f = open("TimSortV1.txt", "w") # Creates a file to write text to 
        f.write(f"{clock()-a}") # Writes in the file how long the algorithm took
        f.close()

    if user_option == "2":
        five = listGenerateV2()
        five_copy = five.copy()

        for lists in five:
            a = clock()  # Clock module to test how long the algorithm takes
            print("TimSort" + '-'*50)
            print(timSort(lists))

            f = open("TimSortV2.txt", "a") # Creates a file to write text to 
            f.write(f"Finished Tim Sort in {clock()-a}\n") # Writes in the file how long the algorithm took
            f.close()
            

        for l in five_copy:  
            a = clock()  # Clock module to test how long the algorithm takes
            print("SelectionSort" + '-'*50)
            print(selectionSortV1(l))

            f = open("SelectionSortV2.txt", "a") # Creates a file to write text to 
            f.write(f"Finished Selection Sort in {clock()-a}\n") # Writes in the file how long the algorithm took
            f.close()

optioner()      