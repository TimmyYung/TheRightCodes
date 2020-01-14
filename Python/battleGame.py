from random import randint

class ElementalHERO:
    """
    The player's monster has health, attack and defense.
    """
    def __init__(self, name, hp, attack, defense, variant):
        self.name = name
        self.hp = hp 
        self.attack = attack
        self.defense = defense
        self.variant = variant

NebulaNeos =  ElementalHERO("Nebula Neos", 4000, 500, 250, "Ice")
FlareNeos = ElementalHERO("Flare Neos", 3000, 1000, 100, "Fire")
AbsoluteZero = ElementalHERO("Absolute Zero", 7000, 200, 700, "Water") 
noUse = ElementalHERO("Placeholder", 0,0,0, "Nothing")  

yourMonster = [NebulaNeos, FlareNeos, AbsoluteZero, noUse] # Player's choice of monsters


class SkyStriker:
    """
    The opponent's monster has health, attack, and defense
    """
    def __init__(self, name, hp, attack, defense, variant):
        self.name = name
        self.hp = hp 
        self.attack = attack
        self.defense = defense
        self.variant = variant

AreaZero = SkyStriker("Area Zero", 3000, 200, 500, "Ice")
VectorBlast = SkyStriker("Vector Blast", 2000, 2500, 800, "Fire")
Kagari = SkyStriker("Kagari", 5000, 350, 1000, "Water")
opponentMonster = [AreaZero, VectorBlast, Kagari] # Opponent's choice of mosnters
opponentMoves = ["Attack", "Defend"] # Opponent can either attack or heal 

a = '' # Opponent's variable
b = '' # Player's variable
c = ''# Opponent's move 

def pickMonster():
    """
    str -> str

    Randomizes which monster the opponent picks and shows the player what monster they chose.
    If the user does not pick A, F, or N, then it restarts the function. Validates all
    user input
    """
    global a
    global b
    picker = input("What monster do you use?: ")
    a = opponentMonster[randint(0,2)] # Opponent picks a random monster to play as
    if picker == "N" or picker ==  "n":
        b = yourMonster[0] # If player chooses Nebula Neos
        print("-"*25)
        print("You have picked Elemental Hero " + b.name + " and you are going against ")
        print("the Pharoah's Sky Striker " + a.name + " monster!")
        print("-"*25)
    elif picker == "F" or picker == "f":
        b = yourMonster[1] # If player chooses Flare Neos
        print("-"*25)
        print("You have picked Elemental HERO " + b.name + " and you are going against ")
        print("the Pharoah's Sky Striker " + a.name + " monster!")
        print("-"*25)     
    elif picker == "A" or picker ==  "a":
        b = yourMonster[2] # If player chooses Absolute Zero
        print("You have picked Elemental HERO " + b.name + " and you are going against ")
        print("the Pharoah's Sky Striker " + a.name + " monster!")
        print("-"*25)
    else:
        b = yourMonster[3]
        print("-"*25)
        print("Use the letters A, F, or N to pick a monster.")
        print("-"*25)
        pickMonster()

    

def yourTurn():
    """
    str -> str

    The player has a choice to do damage, heal, or see what stats the opponent has
    """
    global a
    global b
    motion = input("What do you do? [A]ttack, [D]efend, [S]pecial or [E]xamine: ")
    if motion == "A" or motion == "a":
        a.hp = a.hp - b.attack # Changes opponent's hp using player's attack stat
        print("\n"*2)
        print("You did some damage! The opponent is now at " + str(a.hp) + "hp.")
        print("\n"*2)
    elif motion == "D" or motion == "d":
        b.hp = b.hp + b.defense # Changes player's hp using player's defense stat
        print("\n"*2)
        print("You healed some of your hp. You hp is now at " + str(b.hp) + ".")
        print("\n"*2)
    elif motion == "E" or motion == "e":
        # Display all stats about the opponent
        print("\n"*2)
        print("You are against " + a.name + ".")
        print("His hp is now at " + str(a.hp) +".")
        print("His attack stat is " + str(a.attack) + ".")
        print("He can heal " + str(a.defense) + "hp.")
        print("\n" *2)
    elif motion == "S" or motion == "s":
        if a.variant == "Ice" and b.variant == "Water":
            a.hp = a.hp - b.attack*2
            print("\n"*2)
            print("You did massive damage! The opponent is now at " + str(a.hp) + "hp.")
            print("\n"*2)
        elif a.variant == "Water" and b.variant == "Fire":
            a.hp = a.hp - b.attack*2
            print("\n"*2)
            print("You did massive damage! The opponent is now at " + str(a.hp) + "hp.")
            print("\n"*2)
        elif a.variant == "Fire" and a.variant == "Ice":
            a.hp = a.hp - b.attack*2
            print("\n"*2)
            print("You did massive damage! The opponent is now at " + str(a.hp) + "hp.")
            print("\n"*2)
        else:
            print("\n"*2)
            print("It had no effect! The opponent is still at " + str(a.hp) + "hp.")
            print("\n"*2)
    else:
        print("-"*25)
        print("Use the letters A, D, or E to fight against the Pharoah.")
        print("-"*25)
        yourTurn()



def opponentTurn():
    """
    int -> str

    Opponent randomly chooses to either attack, heal, or special.
    """
    global a
    global b
    global c
    c = opponentMoves[randint(0,1)] # Opponent chooses to either attack or heal randomly 
    if c == opponentMoves[0]: # If opponent chooses to attack
        b.hp = b.hp - a.attack # Changes opponent's health based on player's attack
        print("The Pharoah's " + a.name + " is about to attack you!" ) 
        print("His monster charges at you. You are now at " + str(b.hp) + " hp." ) 
    elif c == opponentMoves[1]: # If opponent chooses to heal
        a.hp = a.hp + a.defense # Changes opponent's health based on his defense
        print("The Pharoah's " + a.name + " healed itself!") 
        print("It restored some of its life points. His monster is now" ) 
        print("at " + str(a.hp) + " hp.")

def playAgain():
    """
    str -> function

    Ends the program
    """
    pickMonster = input("Thank you for playing! Press Y to exit. ")
    if pickMonster == "Y" or pickMonster == "y":
        pass
    else:
        print("Use the letter Y to exit the game.")
        playAgain()
    

def gameplay():
    """
    The main gameplay of the battle game. While both player's monster and health, the game keeps playing
    If one of the player has equal to or less than 0 hp, then they lose.
    """ 
    global a
    global b
    global c
    print("-"*25)
    print("You are challenged by the Pharoah Abdul Adi. He is possessed by")
    print("some sort of darkness in his heart. He challenges you to a shadow")
    print("game! The loser of the battle will be subjected to a dark punishment.")

    print("You have three Elemental HERO monsters to use. [N]ebula Neos, [F]lare Neos, and [A]bsolute Zero.")
    print("-"*25)

    pickMonster()

    while a.hp > 0 and b.hp > 0:
        yourTurn()
        opponentTurn()

    if a.hp <= 0:
        print("-"*25)
        print("You have won the match! The darkness inside the pharoah is forever sealed away.")
        print("He will never torture another person again. You have finally completed the journey!")
        print("-"*25)
        playAgain()
    
    if b.hp <= 0:
        print("-"*25)
        print("You have lost the match! The darkness inside the pharoah is forever growing.")
        print("He will never come back... You will now face your penalty game by living in")
        print("your own personal hell for the rest of eternity.")
        print("-"*25)
        playAgain()

gameplay()