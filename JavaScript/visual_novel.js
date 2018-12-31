var preload = [
    "AliceAngry.png", "AliceDefault.png",
    "AliceHappy.png", "AliceHappyBlush.png",
    "AliceTalk.png", "AliceTeasing.png",
    "AliceTroubled.png", "AliceSad.png",

    "PlayerAngry.png", "PlayerConfused.png",
    "PlayerCry.png", "PlayerDefault.png", 
    "PlayerFlustered.png", "PlayerHappy.png",
    "PlayerNervous.png", "PlayerSad.png",
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
var timmy
var n; // n for Narrator
var photo;
var textBlock;

var leftSide;
var rightSide;
var center;

function prepareNovel()
{
    novel.imagePath = "../Images/";
    f = new Character(friend, {color: "rgb(64, 204, 64)"});
    p = new Character(player, {color: "#ffff00"});
    t = new Character ("Creator", {color: "#ADD8E6"});
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
            f, { alpha: 1.0 },
            p, { alpha: 0.3 },
        endSub, "",
        
        sub, "showPlayer",
            f, { alpha: 0.3 },
            p, { alpha: 1.0 },
        endSub, "",

        label, "start",
        scene, "empty.png",
        t, {image: "TimmyHi.png", position: center}, 
        t, "Hey! Thanks for taking the time to play my game.",
        t, "Do you already know how to play?",
        scene, "empty.png",

        label, "menu0",
        menu, [
        " ",
        "Yes", [jump, "Yes"],
        "No", [jump, "No"],
        ],

        label, "No",
        t, {image: "TimmyHi.png", position: center}, 
        t, "Ok, to play you just have to press left-click. That's all",
        t, "Through the story, you make different decisions that affect\
         the emotions as well as what scenes you see.",
        t, "Always wait until you fully see the background and then you\
         can start clicking. Make sure not to click too fast or else you \
         might break something.",
        t, "Lastly, if you see text that is in italics, that means the\
         character speaking it is actually talking to themselves inside their head.",
        t, "Alright. Hopefully you make the right decisions.",
        t, {image: "TimmyBye.png", position: center}, 
        t, "Let's get on with the story already!",
        jump, "intro",

        label, "Yes",
        t, {image: "TimmyHi.png", position: center}, 
        t, "Alright. Hopefully you make the right decisions.",
        t, {image: "TimmyBye.png", position: center}, 
        t, "Let's get on with the story already!",
        jump, "intro",
        
        label, "intro",
        scene, "black.jpg",
        n, "People fade away. Everyone has had a friend that \
        they no longer talk to. This story is just one of many\
        that have happened. It is a sad part of life that people\
        have to put up with.",
        n, "We start with " + player + " and his best friend " + friend + ". Both\
        of them have known each other since they were little kids and knew exactly\
        how each other's minds worked.",
        n, player + " was going over to " +friend+ "'s house",

        scene, "FrontBuilding_Evening.png",
        p, {image: "PlayerDefault.png", position: center}, 
        p, "Why does her apartment building always look so big?",
        p, "I wonder if " +friend+ " is even home?",

        scene, "FLivingRoom_Day.png",
        p, {image: "PlayerDefault.png", position: rightOff},
        p, "Hey " +friend+ "! You gotta remember to close your door. You never know\
        who might enter through.",
        p, "Anyways, mind if I hang out here for a while?",
        f, {image: "AliceSad.png", position: leftOff},
        p, {image: "PlayerConfused.png"},
        p, "Oh no. What should I do?",

        label, "menu1",
        menu, [
        " ",
        "Help", [jump, "Help"],
        "Leave", [jump, "Leave"],
        ],
        
        label, "Leave",
        p, "<i>Thinking\
        I should probably leave now. I think she needs some time to\
        think to herself. </i>",
        scene, "FrontBuilding_Evening.png",
        p, "I guess I should go home now",
        p, "Must have been a hard day for her. I should see what\
        happened to her tomorrow.",
        scene, "Desk_LightOff.png",
        p, "Should I have done something different? I should just \
        sleep for now.",
        scene, "black.jpg",
        n, friend+ " never came back to school.",
        n, "Terrible Friend Ending",
        n, "THE END",
        jump, "intro",

        label, "Help", 
        n, player+ " rushed around the apartment to get anything he\
        can to cheer up " +friend+ ".",
        p, {image: "PlayerNervous.png", position: center},
        p, "What's wrong? Is everything okay?",
        f, "I..I.. don't want you to leave!",
        p, "What do you mean leave? We are always going to be best \
        friends. I mean we've grown up together for so many years.", 
        p, "<i>Our friendship is the most important\
        thing to me, what does she mean leave?</i>",
        scene, "black.jpg",
        n, "<i> A few hours later.</i>",
        scene, "FLivingRoom_Day.png",
        f, {image: "AliceTroubled.png", position: leftOff},
        p, {image: "PlayerDefault.png", position: rightOff},
        p, "Have you calmed down yet?",
        f, "Yeah... I think so.",
        p, "So what did you mean by leaving?",
        f, "We are growing up " +player+ " and soon we have to leave\
        each other and move onto our lives.",
        p, "I can't believe we're thinking the same thing.",
        f, "What do you mean?",
        p, "I know that things won't stay the same forever. But all we\
        can hope is a happy ending, " +player+ ".",
        n, "...",
        f, "Hey, " +player,
        p, "...",
        p, "What?",
        f, "Can you see me?",
        p, "Yeah, I see you.",
        f, "Can you hear my voice?",
        p, "Loud and clear.",
        f, "Do you remember me?",
        p, friend+ ", my best friend ever since I was a baby.",
        p, "A somewhat twisted character who has trouble expressing herself.",
        f, "How so?",
        p, "Like how you are desperately trying to hide how worried you are right now.",
        f, "Hah.",
        f, "You can always see right through me.",
        n, " ",
        f, "I never said you can hold my hand.",
        p, "I want to.",
        n, "...",
        f, "Oh, fine. Just this one time.",
        n, "For the whole day, they just sat there quietly with no sound, waiting for the courage to talk.",
        f, "This is fun, we never got to just sit like this and listen to our emotions together.",
        scene, "Special_FLivingRoom_Day.png",
        n, "END OF DAY ONE",
// DAY 2
        scene, {image: "MBedroom_Day.png", effect: "fade"},
        p, "<i> Yawns </i>",
        p, "Ugh",
        p, "I hate going to school",
        scene, "MKitchen_Day.png",
        p, "I guess I should just make some toast.",
        n, "Few minutes later.",
        p, "Time to go to " +friend+ "'s house now. Hopefully she is feeling better today.",
        scene, "FrontBuilding_Day.png",
        p, "Oh. She's right over there.",
        f, "Hey " +friend+ ".",
        p, "What's up?",
        f, "Do we have to go to school?",
        p, "Want to get a job?",
        f, "Yes...",
        p, "Then let's go.",
        scene, "SchoolHome1_Day.png",
        f, "Hey.",
        p, "Yeah?",
        f, "Thanks.",
        p, "For what?",
        f, "You know...",
        f, "For what happened yesterday.",

        label, "menu2",
        menu, [
        " ",
        "Talk about what happened.", [jump, "Talk"],
        "Pass it off as nothing happened.", [jump, "Ignore"],
        ],

        label, "Ignore",
        p, "It's no big deal. Let's just forget about it.",
        f, "Yeah. It would be a bummer to be sad during school.",
        p, "Don't we have exams coming up? In I think about 3 more weeks when our future \
        will be decided.",
        f, "Don't remind me. I've been studying the past week just going over old material.",
        p, "You need to relax once in a while. Too much studying and you're brain is going\
        to cook itself from all that thinking. Just sit back and watch some anime.",
        f, "And you need to get serious. High school is almost about to end. We have to get\
        into a good university, then get our degree, then get a job, so we can make money.",
        p, "That just seems so boring! Growing up sucks. Why do we have to go through all of\
        these different trials just to earn a little bit of money.",
        f, "Well that's what we have to do to survive in this world. It's not like we are\
        going to be kids forever with our parents spoiling us.",
        f, "It's not like life is going to be easy for us. I bet the rest of our classmates\
        are also thinking the same thing. Everyone is going through a lot of stress now with exams.",
        jump, "BoringSchoolTime",

        label, "Talk",
        p, "It's no big deal.",
        p, "I'll always be here for you. We're best friends of course. I'm not leaving any \
        time soon espcially because I doubt you would be able to live without me.",
        f, "Yeah. I just wanted to say thanks, that's all.",
        p, "No matter what happens in the future, how you look right now is all that matters.\
        You're one of the most important people in my life.",
        f, "What's with you and the cheesy quote?",
        p, "I've been watching a lot of anime. There is this anime where the main character \
        meets several girls that are experiencing Adolescence Syndrome. He goes and helps\
        each one of them with their problems. You should really watch it. I give it a 10 \
        out of 10.",
        f, "Jeez.",
        f, "Exams are almost coming up. If you have time to watch anime, you have time to study.",
        p, "You shouldn't be the one telling me that.",
        f, "Are you trying to mess with me?",
        p, "No, I'm just making fun of you.",
        f, "<i> Slaps </i>",
        jump, "FunSchoolTime",

        label, "BoringSchoolTime",
        scene, "Classroom_Day.png",
        n, "<i>At school</i>",
        p, "School is so boring...",
        jump, "GoingHome",

        label, "FunSchoolTime",
        scene, "Classroom_Day.png",
        n, "<i>At school</i>",
        p, "Let's get right into studying! There are not too many universities in this city.\
        I would probably have to move somewhere far to get into a good university.",
        p, "<i> Sigh </i>",
        p, "Now it's not the time to be thinking of this kind of stuff. I should just focus \
        on getting a high mark on the exam for now and decide what to do with my future later.",
        jump, "GoingHome",

        label, "GoingHome",
        n, "<i> Few hours later </i>",
        p, "Finally school is done. Time to go home!",
        p, friend+ " has a club right now if I remember. Guess I'm going straight home now.",    
        scene, "FrontSchool_Day.png",
        f, "HEY!",
        p, "What the heck?",
        f, "<i> Runs over </i>",
        p, "I thought you had a club to go to today?",
        f, "No, club is cancelled for the rest of the month because most of the club members have\
         exams to study for.",
        scene, "SchoolHome1_Day.png",
        p, "It always makes me depressed to just keep on hearing about exams. Everyone is so \
        concentrated on it that it makes me tired just hearing about it. Why can't I just lay around\
         and play video games?",
        f, "Because that's not have you can succeed in life. Very few people can actually make a \
        living by playing video games. You see all these streamer playing their favourite games and\
         somehow make millions of dollars but you don't see how many people try and fail to do that.\
         Only a few people ever get to do that job.",
        p, "And thank you Ms.Know It All for giving me another lesson on why life sucks.",
        f, "Well that's what I'm here for.",
        p, "Anyways, how was school for you?",
        f, "What do you think? Boring as usual just listening to the teacher talk for hours on end. \
        Not like it is any different than any other day.",
        p, "Like you said, this is on the path of survival.",
        f, "Oh shut up.",
        scene, "FrontBuilding_Evening.png",
        p, "Finally, we're at your house now. It took forever.",
        f, "Well it's because you kept on taking so many detours getting here. You were playing with\
         that stray cat for a while",
        p, "It's not my fault that you're a dog person. If you liked cats, you would also be playing\
         with the cat.",
        f, "Anyways. See you tomorrow.",

        label, "menu3",
        menu, [
        " ",
        "Say goodbye.", [jump, "Goodbye"],
        "Ask to go to her apartment.", [jump, "Apartment"],
        ],

        label, "Goodbye",
        p, "See ya. Don't forget to study!",
        f, "Yeah yeah. I won't forget.",
        scene, "MLivingRoom_Day.png",
        p, "Today was so tiring. I'm just going to pass out on my bed.",
        scene, "black.jpg",
        n, "END OF DAY 2",
        jump, "TimeSkip",

        label, "Apartment",
        p, "Hey, can I just hang out at your apartment for a little while.",
        f, "It's getting a little late. Are you sure?",
        p, "It's just that it gets a little boring at my place.",
        p, "<i>And also because I don't want to leave you alone after what\
        happened yesterday.</i>", 
        f, "Yeah I guess so? Come in.",
        p, "Thanks.",
        scene, "FLivingRoom_Evening.png",
        p, "It always surprises me how big your apartment is. I mean I know you come from a\
         rich family but wow...",
        f, "Well that's one of the reasons that I moved here. My family could afford it and \
        wanted me to live by myself. They don't want to be always spoiling their little princess\
        and treat me like I'm a little child anymore. A little bit contradictory considering this apartment\
         but I'm not complaining. I have this huge place to myself.",
        f, "Come to think of it, you never explained why YOU moved to this city. A year after\
         I moved here, you suddenly reappeared out of thin air.",
        p, "That's for me to know and you to find out. I have my own reasons for moving here.",
        f, "Okay Mr. Edgelord.",
        p, "Besides we've known each other our entire lives. You can trust me.",
        f, "It's not like I don't trust you.",
        f, "I remember the first day of middle school when I had no one to eat with\
         during lunch.",
        f, "Then one day, magically a group of girls asked if I wanted to join them. I WONDER\
        how that happened.",
        p, "Uh... yeah! People can be really nice if you try.",
        f, "Oh shut up, I know how it happened.",
        p, "Caught me red handed. How did you figure out that it was me?",
        f, "Well those friends that you got me told me how it happened. You saw them talking\
        with each other about K-Pop and told them that I was also a  big fan of K-Pop. It's\
        not that hard to figure out.", 
        p, "I'm always looking out for you.",
        f, "And now that we're in a new high school, I just hang around you all the time.",
        p, "Are you saying that I'm not good enough.",
        f, "No you idiot. You're just fine.",
        p, "Haha. It's not like we live for all of humanity to like us.",
        p, "<i>As long as I have one person to care for, I can keep on living. </i>",
        f, "It's getting darker outside.",
        p, "Yeah it is.",

        label, "menu4",
        menu, [
        " ",
        "Ask to stay.", [jump, "StayApartment"],
        "Say goodbye.", [jump, "LeaveApartment"],
        ],

        label, "LeaveApartment",
        p, "I should probably go now. Don't want to overstay my welcome.",
        f, "Yeah, see ya.",
        scene, {image: "MBedroom_Night.png", effect: "dissolve"},
        p, "Today was so tiring. I'm just going to pass out on my bed.",
        scene, "black.jpg",
        n, "END OF DAY 2",
        jump, "TimeSkip",

        label, "StayApartment",
        f, "Wait what?",
        p, "Can I just sleep here for the night?",
        f, "For what reason?",
        p, "Um... no reason.",
        f, "If you are going to stay here for the night, you have to tell me a reason or \
        else you are getting kicked out.",
        p, "Ok. Fine fine.",
        p, "It's because... I'm a little scared to be walking by myself in the middle of \
        the night.",
        f, "You're kidding.",
        p, "Do you want me to say it again? I'm scared of the dark. I don't know what \
        might happen to me.",
        f, "You're house isn't even that far away. It's like a 10 minutes walk.",
        p, "And that is 10 minutes that anything can happen to me. What if I get stabbed \
        or a ghost takes my soul? You're the one who is going to be held responsible for \
        me meeting my grandpa.",
        f, "Ok, sure. You can sleep here for the night.",

        label, "menu5",
        menu, [
        " ",
        "Sleep on " +friend+ "'s couch", [jump, "SleepCouch"],
        "Sleep on " +friend+ "'s bed", [jump, "SleepBed"],
        ],

        label, "SleepBed",
        p, "Thanks. So can I sleep in your bed then?",
        f, "WHAT!?",
        p, "What?",
        f, "No way in hell is that ever happening.",
        f, "<i>Plus it would be weird for us two to sleep in the\
         same bed together. </i>",
        p, "Oh come on. Where else am I going to sleep.",
        f, "You are going to sleep on the couch while I go and change into my sleeping clothes.",
        p, "Fine...",
        f, "And no peeking! I know how boys are during puberty.",
        p, "Ew. Why would I try to peek at you of all people.",
        f, "Anyways, get yourself situated. I'll go change then get you a blanket.",
        p, "Yeah ok. Thanks for letting me stay.",

        label, "menu6",
        menu, [
        " ",
        "Peek", [jump, "Peek"],
        "Don't Peek", [jump, "NoPeek"],
        ],

        label, "Peek",
        p, "Maybe a little look wouldn't hurt.",
        n, "<i> Opens the door a little bit </i>",
        scene, "black.jpg",
        f, "YOU PERVERT! GET OUT! NOW!",
        n, "Pervert Ending",
        n, "THE END",
        jump, "intro",

        label, "NoPeek",
        p, "So I guess I'll be sleeping on the couch then?",
        f, "Correct. I'm going to go get you a blanket to sleep with.",
        p, "Yeah sure. Thanks.",
        scene, "black.jpg",
        n, "END OF DAY 2",
        jump, "TimeSkip",
// DAY 3
        label, "TimeSkip",
        scene, "black.jpg",
        n, "Days passed, and it soon became Friday.",

    ]
}