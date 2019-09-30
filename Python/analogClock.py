import turtle
import time
wn = turtle.Screen() # Access the properties of the window
wn.bgcolor("black")
wn.setup(width = 600, height = 600) # Size of the screen
wn.title("Simple Analog Clock")
wn.tracer(0) # Turns off the animation

# Creates the drawing
pen = turtle.Turtle()
pen.hideturtle()
pen.speed(0) # Animation speed set to fastest
pen.pensize(3)

def draw_clock(h, m, s, pen): # Draw clock using the pen
    # Draw the clock face
    pen.up() # Don't draw the line
    pen.goto(0, 210) # Moves the pen
    pen.setheading(180) # Sets the direction of the turtle
    pen.color("green")
    pen.pendown() # Start drawing
    pen.circle(210) # Set the radius of the circle

    # Draw the hands of the clock
    pen.up()
    pen.goto(0, 0)
    pen.setheading(90)

    for i in range(12): # 12 hours in a clock
        pen.fd(190) # Puts the turtle up to just right before the circle
        pen.pendown()
        pen.fd(20) # Draws line to edge of circle
        pen.penup()
        pen.goto(0, 0) # Go back to origin
        pen.rt(30) # Rotate turtle
    
    # Draw the hour hand
    pen.penup()
    pen.goto(0, 0)
    pen.color("white")
    pen.setheading(90)
    angle = (h /12) * 360 # 12 hours on a clock
    pen.rt(angle)
    pen.pendown()
    pen.fd(100)

    # Draw the minute hand
    pen.penup()
    pen.goto(0, 0)
    pen.color("blue")
    pen.setheading(90)
    angle = (m /60) * 360 # 60 Minutes in an hour
    pen.rt(angle)
    pen.pendown()
    pen.fd(180)

    # Draw the second hand
    pen.penup()
    pen.goto(0, 0)
    pen.color("gold")
    pen.setheading(90)
    angle = (s /60) * 360 # 60 seconds in a minute
    pen.rt(angle)
    pen.pendown()
    pen.fd(50)

while True:
    h = int(time.strftime("%I")) # Converts to string formatted time and hour from 0 - 12
    m = int(time.strftime("%M")) 
    s = int(time.strftime("%S")) 



    draw_clock(h, m, s, pen) # Calls the function
    wn.update()

    time.sleep(1)

    pen.clear()





wn.mainloop() # Keeps the window open. Will close automatically is not here