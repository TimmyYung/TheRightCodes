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
        n, "We start with " + player + " and his best friend " + friend + ".",

        scene, "door.jpg",
        player1, {image: "PlayerDefault.png", position: center}, 
        n, "*Knock Knock*",
        player1, "I wonder if " +friend+ " is even home?",
        player1, "Oh. She left her door open",
        n, "*Opens door*",

        scene, "living_room.jpg",
        player1, {image: "PlayerDefault.png", position: rightOff},
        player1, "Hey " +friend+ "! You gotta remember to close your door.",
        player1, "Anyways, mind if I hang out here for a while?",
        friend1, {image: "AliceSad.png", position: leftOff},
        player1, {image: "PlayerConfused.png", position: rightOff},
        n, friend+ " came out of her room bawling her eyes out.",
        player1, "Oh no",
        n, player+ " rushed around the apartment to get anything he can to cheer up " +friend+ ".",
    ]
}