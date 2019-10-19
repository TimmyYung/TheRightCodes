import tkinter as tk # How the GUI will be made
from tkinter import filedialog, Text
import os # Allows to run the apps

root = tk.Tk() # Holds the entire app
apps = [] # Stores what apps to open

if os.path.isfile("save.txt"): # Checks if a txt file is there
    with open("save.txt", "r") as f: # Reads the txt file
        tempApps = f.read()
        tempApps = tempApps.split(",") # Splits each exe seperately 
        apps = [x for x in tempApps if x.strip()] # If there is nothing, delete it

def addApp():
    for widget in frame.winfo_children():
        widget.destroy() # Deletes all exe's listed

    filename = filedialog.askopenfilename(initialdir="/", title="Select File", # Opens the file explorer
    filetypes = (("executables", "*.exe"), ("all files", "*.*"))) # Only opens exe files
    apps.append(filename) # Saves the exe to the array
    print(filename)
    for app in apps:
        label = tk.Label(frame, text=app, bg="gray") # Displays what exe it's opening
        label.pack()

def runApps():
    for app in apps: # Loop to open each app
        os.startfile(app) # Opens the exe file

canvas = tk.Canvas(root, height = 700, width = 700, bg ="#263D42") # Sets how the GUI looks
canvas.pack() # Attaches to the root/Changes the canvas

frame = tk.Frame(root, bg="white") # Creates another box within the GUi
frame.place(relwidth = 0.8, relheight = 0.8, relx = 0.1, rely = 0.1) # Places the box

openFile = tk.Button(root, text = "Open File", padx=10, pady=5, fg="white", bg="#263D42", command = addApp) # Creates a button
openFile.pack() # Shows the button

runApps = tk.Button(root, text = "Run Apps", padx=10, pady=5, fg="white", bg="#263D42", command =runApps) # Creates a button
runApps.pack() # Shows the button

for app in apps:
    label = tk.Label(frame, text=app)
    label.pack()

root.mainloop() # Runs the app

with open("save.txt", "w") as f: # Creates a txt file that's writable
    for app in apps: # Loops through each listed exe
        f.write(app + ",") # Writes down what exe's are listed