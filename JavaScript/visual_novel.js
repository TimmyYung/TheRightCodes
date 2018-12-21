var preload = [
    "AliceAngry.png", "AliceDefault.png",
    "AliceHappy.png", "AliceHappyBlush.png",
    "AliceTalk.png", "AliceTeasing.png",
    "AliceTroubled.png", "AliceSad.png",

    "bedroom.jpg", "black.jpg",
    "classroom.jpg", "living_room.jpg", 
    "streets.jpg", "subway.jpg",
    "door.jpg",

    "PlayerAngry.png", "PlayerConfused.png",
    "PlayerCry.png", "PlayerDefault.png", 
    "PlayerFlustered.png", "PlayerHappy.png",
    "PlayerNervous.png", "PlayerSad.png",
    "PlayerShocked.png",
  ];

var preloadObj = new Array(preload.length);
for (var i = 0; i < preload.length; i++)
{
    preloadObj[i] = new Image();
    preloadObj[i].src = "../Images/" + preload[i];
}

var script;
var friend = prompt("Give me a girl's name.");
var player = prompt("What is your name?");
var n; // n for Narrator
var photo;
var textBlock;

var leftSide;
var rightSide;
var upperCenter;

function prepareNovel()
{
    novel.imagePath = "../Images/";
    friend1 = new Character(friend, {color: "rgb(64, 204, 64)"});
    player1 = new Character(player, {color: "#ffff00"});
    n = new Character("");

    place1 = new Position(300, 400, 0, 0);
    place2 = new Position(300, 400, 0.5, 0.5);
    place3 = new Position(300, 400, 1, 0);

    leftSide = new Position(0, 1, 0, 1);
    rightSide = new Position(800, 600, 1, 1);
    center = new Position(0.5, 0.5, 0.5, 0.5);
    leftOff = new Position(0.1, 0, 0, 0);
    rightOff = new Position(0.9, 0, 1, 0);

    textArea = new TextBlock("myText");

    script = [
        sub, "showFriend",
            friend1, { alpha: 1.0 },
            player1, { alpha: 0.3 },
        endSub, "",
        
        sub, "showPlayer",
            friend1, { alpha: 0.3 },
            player1, { alpha: 1.0 },
        endSub, "",

        label, "start",
        scene, "black.jpg",
        n, "People fade away. Everyone has had a friend that \
        they no longer talk to. This story is just one of many\
        that have happened. It is a sad part of life that people\
        have to put up with.",
        n, "We start with " + player + " and his best friend " + friend + ". Both\
        of them have known each other since they were little kids and knew exactly\
        how each other's minds worked.",
        n, player + " was going over to " +friend+ "'s house",

        scene, "door.jpg",
        player1, {image: "PlayerDefault.png", position: center}, 
        n, "*Knock Knock*",
        player1, "I wonder if " +friend+ " is even home?",
        player1, "Oh. She left her door open.",
        n, "*Opens door*",

        scene, "living_room.jpg",
        player1, {image: "PlayerDefault.png", position: rightOff},
        player1, "Hey " +friend+ "! You gotta remember to close your door.",
        player1, "Anyways, mind if I hang out here for a while?",
        friend1, {image: "AliceSad.png", position: leftOff},
        player1, {image: "PlayerConfused.png"},
        n, friend+ " came out of her room bawling her eyes out.",
        player1, "Oh no.",

        label, "menu1",
        menu, [
        " ",
        "Help her", [jump, "Help"],
        "Leave", [jump, "Leave"],
        ],
        
        label, "Leave",
        scene, "black.jpg",
        n, "Terrible Friend Ending",

        label, "Help", 
        n, player+ " rushed around the apartment to get anything he can to cheer up " +friend+ ".",
        player1, {image: "PlayerNervous.png", position: center},
        player1, "What's wrong? Is everything okay?",
        friend1, "I..I.. don't want you to leave!",
        player1, "What do you mean leave? We are always going to be best friends.", 
        player1, "<i>(Thinking)</i> Our friendship is the most important thing to me,\
        what does she mean leave?",
        n, "It was hard for " +friend+ " to calm down. It took a few hours.",
        scene, "black.jpg",
        n, "<i> A few hours later.</i>",
        scene, "living_room.jpg",
        friend1, {image: "AliceTroubled.png", position: leftOff},
        player1, {image: "PlayerDefault.png", position: rightOff},
        player1, "Have you calmed down yet?",
        friend1, "Yeah... I think so.",
        player1, "So what did you mean by leaving?",
        friend1, "We are growing up " +player+ " and soon we have to leave each other and move onto our lives.",
        player1, "I can't believe we're thinking the same thing.",
        friend1, "What do you mean?",
        player1, "I know that things won't stay the same forever. But all we can hope is a happy ending, " +player+ ".",
        n, "For the whole day, they just sat there quietly with no sound, waiting for the courage to talk.",
        friend1, "This is fun, we never got to just sit like this and listen to our emotions together.",
        

    ]
}