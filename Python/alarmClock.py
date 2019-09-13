"""

Timmy Yung
ICS4U
HTTLACS (ch2 ex.8)

"""

input1 = int(input("What is the time right now? (In hours):"))
input2 = int(input("How long do you want to wait? (In hours):"))


added_time = input2 % 12
wait_time = input1 + added_time
if(wait_time > 12):
    wait_time = input1 - 12

print("Your alarm will go off at" , wait_time , "o'clock")


