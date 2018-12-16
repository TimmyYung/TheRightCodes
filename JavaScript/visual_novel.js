var preload = [
    "AliceDefault.png", "AliceDoubt.png",
    "AliceEmabrassed.png", "AliceHappy.png",
    "AliceHappyBlush.png", "AliceTeasing.png",
    "AliceWorried.png", 

    "bedroom.jpg", "classroom.jpg", 
    "living_room.jpg", "streets.jpg",
    "subway.jpg"
  ];

var preloadObj = new Array(preload.length);
for (var i = 0; i < preload.length; i++)
{
    preloadObj[i] = new Image();
    preloadObj[i].src = "../Images/" + preload[i];
}

var script;
var alice;
var player;
var n; // n for Narrator
var photo;
var textBlock;

var leftSide;
var rightSide;
var upperCenter;

function prepareNovel()
{
    novel.imagePath = "../Images/";
    alice = new Character("Alice", {color: "rgb(64, 204, 64)"});
    player = new Character("Player", {color: "#ffff00"});
    n = new Character("");

    place1 = new Position(300, 400, 0, 0);
    place2 = new Position(300, 400, 0.5, 0.5);
    place3 = new Position(300, 400, 1, 0);

    leftSide = new Position(0, .75, 0, 1);
    rightSide = new Position(800, 450, 1, 1);
    upperCenter = new Position(0.5, 0.3, 0.5, 0.5);
    rightTop = new Position(0.9, 0.1, 1, 0);

    photo = new Character("", {position: upperCenter});

    textArea = new TextBlock("myText");

    script = [
        label, "start",
        scene, "bedroom.jpg",
        n, "People fade away. Everyone has had a friend that they no longer talk to. But I am the hero that everyone needs",
        alice, {image: "AliceDefault.png", position: leftSide},
        alice, "Hey, Gavin, where are you?"
    ]
}