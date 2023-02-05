const Constants = {
  textNodes: [
    {
      id: 1,
      text: "The giant Old Oak Tree Ecna stands proud at the edge of Pando forest",
      image: "image1",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 2,
        }
      ],
    },
    {
      id: 2,
      text: "Eisenhoper looks up in awe and then notices the entrance to the bespoke underground rabbit hole network",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 3,
        }
      ],
    },
    {
      id: 3,
      text: "Trevor: Soo, ribbit, I see you finally made your way to Ecna, ribbit!",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 4,
        },
      ],
    },
    {
      id: 4,
      text: "Eisenhopper: Hello there Mr. Frog, I am Eisenhopper!",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 5,
        }
      ],
    },
    {
      id: 5,
      text: "Trevor: Trevor is my name, ribbit. It seems we are both about to head inside!",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 6,
        }
      ],
    },
    {
      id: 6,
      text: "Do you know your way around the burrows?",
      options: [
        {
          id: 1,
          text: "It's not my first time!",
          nextText: 10,
        },

        {
          id: 2,
          text: "No, but I heard it has lots of carrots!",
          nextText: 7,
        },
      ],
    },
    {
      id: 7,
      text: "Trevor: Sure, but it also hides a lot of dangers as well, ribbit...",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 8,
        }
      ],
    },
    {
      id: 8,
      text: "I'm trying to cross it all the way to the swamp to return to my family, ribbit, but that sneaky badger is preying on my all morning",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 9,
        }
      ],
    },
    {
      id: 9,
      text: "Let's go inside together, ribbit!",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 11,
        }
      ],
    },
    {
      id: 10,
      text: "Trevor: That’s great! Can I tag along, ribbit? Promise to not slow you down, ribbit!",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 12,
        }
      ],
    },
    {
      id: 11,
      text: "Trevor: Here the paths splits in two, ribbit. I'm going left to the swamp. Right goes deeper into the burrows, ribbit!",
      image: "image2",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 12,
        }
      ],
    },
    {
      id: 12,
      text: "Trevor: Will you come along, ribbit? It is a safer path and I could really use your help, ribbit...",
      image: "image2",
      options: [
        {
          id: 1,
          text: "Go with Trevor",
          setState: {'id': 'trevor', 'value': 1},
          nextText: 13,
        },
        {
          id: 2,
          text: "Go deeper",
          setState: {'id':'deeper', 'value': 1},
          nextText: 14,
        }
      ],
    },
    {
      id: 13,
      text: "Eisenhopper: I've never been to the swamp, does it have carrots?",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 16,
        }
      ],
    },
    {
      id: 14,
      text: "Eisenhopper: I've heard so much about the network, I really want to explore it!",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 15,
        }
      ],
    },
    {
      id: 15,
      text: "I hope you find your family Trevor, it was nice meeting you!",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 21,
        }
      ],
    },
    {
      id: 16,
      text: "You enter the swamp passage, its dark and muddy",
      image: "image3a",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 17,
        }
      ],
    },
    {
      id: 17,
      text: "You found a bone and a carrot. The bone can be useful to defend yourself",
      options: [
        {
          id: 1,
          text: "pick up bone",
          setState: {'value': 'bone', 'value': 1},
          nextText: 18,
        },
        {
          id: 2,
          text: "pick up carrot",
          setState: {'id': 'carrot', 'value': 1},
          nextText: 18,
        }
      ],
    },
    {
      id: 18,
      text: "It seems the paths splits into two here as well",
      image: "image3b",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 19,
        }
      ],
    },
    {
      id: 19,
      text: "This is the sneaky Badger I told you before!",
      image: "image3c",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 20,
        }
      ],
    },
    {
      id: 20,
      text: "Trevor runs scared towards the swamp and the badger chases him down",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 21,
        }
      ],
    },
    {
      id: 21,
      text: "Grrrrrh, greetings there 'player'! How are you enjoying your adventures with Eisenhopper so far?",
      image: "image4",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 22,
        }
      ],
    },
    {
      id: 22,
      text: "'player': Who are you?",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 23,
        }
      ],
    },
    {
      id: 23,
      text: "Mr. Sniffles: Me? You meow call me Mr. Sniffles, prrrrroud owner of the undergrrrrrrrround!",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 24,
        }
      ],
    },
    {
      id: 24,
      text: "Just wanted to give you a heads up, it would be better for Eisenhopper to avoid the undergrrrround...",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 25,
        }
      ],
    },
    {
      id: 25,
      text: "Player: Sure...but why?",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 26,
        }
      ],
    },
    {
      id: 26,
      text: "Player: Well, lets say he might discover truths about his...roots",
      options: [
        {
          id: 1,
          text: "Continue",
          requiredState: {'id': 'trevor', 'value': 1},
          nextText: 27,
        },
        {
          id: 2,
          text: "Continue",
          requiredState: {'id': 'deeper', 'value': 1},
          nextText: 57,
        }
      ],
    },
    {
      id: 27,
      text: "Oh no, Trevor is in trouble!",
      image: "image3b",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 28,
        }
      ],
    },
    {
      id: 28,
      text: "What should I do?",
      options: [
        {
          id: 1,
          text: "Help him",
          nextText: 29,
        },
        {
          id: 2,
          text: "Search Badger's hideout",
          nextText: 30,
        }
      ],
    },
    {
      id: 29,
      text: "I should go and help him, after all I have this sharp bone with me this Badger won't stand a chance",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 31,
        }
      ],
    },
    {
      id: 30,
      text: "I probably shouldn't wander so far away from my village, maybe that sneaky Badger has a secret stash of carrots...",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 50,
        }
      ],
    },
    {
      id: 31,
      text: "Eisenhopper: Leave him alone! He is just trying to return to his family!",
      image: "image5",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 32,
        }
      ],
    },
    {
      id: 32,
      text: "Badger: But why? Frogs are sssssssssssooo delicious!",
      options: [
        {
          id: 1,
          text: "Continue",
          requiredState: {'id': 'bone', 'value': 1},
          nextText: 33,
        },
        {
          id: 2,
          text: "Continue",
          requiredState: {'id': 'carrot', 'value': 1},
          nextText: 42,
        }
      ],
    },
    {
      id: 33,
      text: "Draw out the bone",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 34,
        },
      ],
    },
    {
      id: 34,
      text: "Eisenhopper: Don't even think about it",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 35,
        },
      ],
    },
    {
      id: 35,
      text: "You scare the badger off",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 36,
        }
      ],
    },
    {
      id: 36,
      text: "Eisenhopper: Oof, that was something!",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 37,
        }
      ],
    },
    {
      id: 37,
      text: "Trevor: I don't know how to thank you!",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 38,
        },
      ],
    },
    {
      id: 38,
      text: "Eisenhopper: Some carrots would be nice",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 39,
        },
      ],
    },
    {
      id: 39,
      text: "Trevor: There behind the bush..I saw 5 of them last night!",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 40,
        },
      ],
    },{
      id: 40,
      text: "You know your way back! Hope we meet again!",
      options: [
        {
          id: 1,
          text: "Game over",
          nextText: 41,
        },
      ],
    },
    {
      id: 41,
      text: "Eisenhopper safely returned to his village with 5 delicious carrots! Maybe next time he will find more...",
      options: [
        {
          id: 1,
          text: "Restart game?",
          nextText: -1,
        },
      ],
    },
    {
      id: 42,
      text: "Oops, wish I had picked up that bone...",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 43,
        },
      ],
    },
    {
      id: 43,
      text: "Draw out carrot",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 44,
        },
      ],
    },
    {
      id: 44,
      text: "Eisenhopper: Don't even think about it",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 45,
        },
      ],
    },
    {
      id: 45,
      text: "Badger: HarHarHar, do you think I'm afraid of a carrot",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 46,
        },
      ],
    },
    {
      id: 46,
      text: "The badger furiously jumps at you and critically wounds you",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 47,
        },
      ],
    },
    {
      id: 47,
      text: "Eisenhopper's vision fades out while Badger eats Trevor",
      options: [
        {
          id: 1,
          text: "Game over",
          nextText: 48,
        },
      ],
    },
    {
      id: 48,
      text: "You tried your best, but unfortunately you couldn't save Trevor...maybe next time?",
      options: [
        {
          id: 1,
          text: "Restart game?",
          nextText: -1,
        },
      ],
    },
    {
      id: 49,
      text: "You found a secret stash of 3 carrots",
      image: "image6",
      options: [
        {
          id: 1,
          text: "Take them",
          setState: {'id': 'carrot', 'value': 3},
          nextText: 50,
        },
        {
          id: 1,
          text: "Leave them",
          nextText: 50,
        }
      ],
    },
    {
      id: 50,
      text: "Looks like the one path leads back to the village and the other deeper down the underground network Trevor mentioned",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 51,
        },
      ],
    },
    {
      id: 51,
      text: "Which one should I choose?",
      options: [
        {
          id: 1,
          text: "Return home",
          nextText: 47,
        },
        {
          id: 1,
          text: "Go deeper",
          nextText: 47,
        }
      ],
    },
    {
      id: 52,
      text: "I found enough carrots for one day and it seems kind of dangerous down there.",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 53,
        },
      ],
    },
    {
      id: 53,
      text: "I probably should be heading back home, its getting dark..",
      options: [
        {
          id: 1,
          text: "End game",
          nextText: 55,
        },
      ],
    },
    {
      id: 54,
      text: "I was waiting for this for so long, I feel ready to go deeper!",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 56,
        },
      ],
    },
    {
      id: 55,
      text: "Eisenhopper safely returned to his village with 'Z' delicious carrots! Maybe next time he will find more...",
      options: [
        {
          id: 1,
          text: "Restart game?",
          nextText: -1,
        },
      ],
    },
    {
      id: 56,
      text: "Mr. Sniffles: Hello there little rabbit! Are you sure you want to go deeper, meow?",
      image: "image7",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 57,
        },
      ],
    },
    {
      id: 57,
      text: "Eisenhopper: Who goes there?",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 58,
        },
      ],
    },
    {
      id: 58,
      text: "Mr. Sniffles: I see, it seems 'player' didn't warn you about the dangers?",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 59,
        },
      ],
    },
    {
      id: 59,
      text: "Well, I my name is Mr. Sniffles and let's say I am the host of this place below the roots of Ecna...",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 60,
        },
      ],
    },
    {
      id: 60,
      text: "Eisenhopper: Wait what? Who is 'player'? You don't make any sense",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 61,
        },
      ],
    },
    {
      id: 61,
      text: "Mr. Sniffles: If answers is what you seek, my mice will help you...",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 62,
        },
      ],
    },
    {
      id: 62,
      text: "You find a piece of cheese and one purple carrot",
      image: "image8a",
      options: [
        {
          id: 1,
          text: "Pick up cheese",
          setState: {'id': 'cheese', 'value': 1},
          nextText: 63,
        },
        {
          id: 2,
          text: "Pick up purple carrot",
          setState: {'id': 'purple carrot', 'value': 1},
          nextText: 63,
        },
      ],
    },
    {
      id: 63,
      text: "Truffles: Where is it! Where is it! I smell it since all morning, I'm sure it is here, squeak!",
      image: "image8b",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 64,
        },
      ],
    },
    {
      id: 64,
      text: "Aaa! A rabbit! ",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 65,
        },
      ],
    },
    {
      id: 65,
      text: "Eisenhopper: Hello, I am Eisenhopper..",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 66,
        },
      ],
    },
    {
      id: 66,
      text: "Truffles: Truffles!",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 67,
        },
      ],
    },
    {
      id: 67,
      text: "Eisenhopper: Where?",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 68,
        },
      ],
    },
    {
      id: 68,
      text: "Truffles: No, Truffles is my name!",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 69,
        },
      ],
    },
    {
      id: 69,
      text: "Eisenhopper: Nice to meet you Truffles!",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 70,
        },
      ],
    },
    {
      id: 70,
      text: "Truffles: Did you find the piece of cheese I dreamt about all morning?",
      options: [
        {
          id: 1,
          text: "Continue",
          requiredState: {'id': 'cheese', 'value': 1},
          nextText: 71,
        },
        {
          id: 1,
          text: "Continue",
          requiredState: {'id': 'purple carrot', 'value': 1},
          nextText: 72,
        }
      ],
    },
    {
      id: 71,
      text: "Eisenhopper: Yes, I have it in my pocket",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 73,
        },
      ],
    },
    {
      id: 72,
      text: "Eisenhopper: No, but I found a pruprle carrot, never seen one before",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 76,
        },
      ],
    },
    {
      id: 73,
      text: "Truffles: Great! Can I have it please, squeak?",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 74,
        },
      ],
    },
    {
      id: 74,
      text: "Eisenhopper: I need your help too, Mr. Sniffles told me you will help me get answers",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 75,
        },
      ],
    },
    {
      id: 75,
      text: "Truffles: Oh..I see...well lets trade then",
      options: [
        {
          id: 1,
          text: "Trade the cheese for 6 carrots",
          setState: {'id': 'carrot', 'value': 6},
          nextText: 76,
        },
        {
          id: 2,
          text: "Trade the cheese for 1 purple carrot",
          setState: {'id': 'purple carrot', 'value': 1},
          nextText: 76,
        }
      ],
    },
    {
      id: 76,
      text: "Eisenhopper: What is this?",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 77,
        },
      ],
    },
    {
      id: 77,
      text: "Truffles: Eat it and you will find your answers",
      options: [
        {
          id: 1,
          text: "Eat it",
          nextText: 85,
        },
        {
          id: 2,
          text: "Don't eat it",
          nextText: 78,
        }
      ],
    },
    {
      id: 78,
      text: "Truffles: She found us! Oh no!",
      image: "image8c",
      options: [
        {
          id: 1,
          text: "Run for your life and leave Truffles behind",
          nextText: 79,
        },
        {
          id: 2,
          text: "Take out the sharp bone and fight!",
          requiredState: {'id': 'bone', 'value': 1},
          nextText: 81,
        }
      ],
    },
    {
      id: 79,
      text: "Eisenhopper safely returned to his village with 'Z' delicious carrots! Maybe next time he will find more...",
      options: [
        {
          id: 1,
          text: "Restart game?",
          nextText: -1,
        },
      ],
    },
    {
      id: 80,
      text: "Eisenhopper safely returned to his village with 1 purple carrot, but he never find out... Maybe Next time...",
      options: [
        {
          id: 1,
          text: "Restart game?",
          nextText: -1,
        },
      ],
    },
    {
      id: 81,
      text: "Eisenhopper: Leave us alone!",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 82,
        },
      ],
    },
    {
      id: 82,
      text: "Fox: Fine, but there is nothing for you down here...except for bitter truth..shi shi shi!",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 83,
        },
      ],
    },
    {
      id: 83,
      text: "The fox leaves, and the mouse is nowhere to be found ",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 84,
        },
      ],
    },
    {
      id: 84,
      text: "Eisenhopper: I am really hungry",
      options: [
        {
          id: 1,
          text: "Eat purple carrot",
          nextText: 85,
        },
      ],
    },
    {
      id: 85,
      text: "Eisenhopper: Woah! What are those colors!",
      image: "image9",
      options: [
        {
          id: 1,
          text: "Hello Eisenhopper",
          nextText: 77,
        },
        {
          id: 2,
          text: "Say nothing",
          nextText: 77,
        }
      ],
    },
    {
      id: 86,
      text: "Eisenhopper got a glimpse of the truth...and it was beautiful...",
      options: [
        {
          id: 1,
          text: "Restart game?",
          nextText: -1,
        },
      ],
    },
    {
      id: 87,
      text: "Eisenhopper: Who is this? Mr. Sniffles?",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 88,
        },
      ],
    },
    {
      id: 88,
      text: "Player: No, I am 'Player'",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 89,
        },
      ],
    },
    {
      id: 89,
      text: "Eisenhopper: Where are you? I can't see you",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 90,
        },
      ],
    },
    {
      id: 90,
      text: "Player: That's because, I am not in your world",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 91,
        },
      ],
    },
    {
      id: 91,
      text: "What do you mean? Where are you?",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 92,
        },
      ],
    },
    {
      id: 92,
      text: "The truth is that I am from a world where a group of people like me created your world",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 93,
        },
      ],
    },
    {
      id: 93,
      text: "Woah! So you are gods!",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 94,
        },
      ],
    },
    {
      id: 94,
      text: "Well, not exactly...",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 95,
        },
      ],
    },
    {
      id: 95,
      text: "But you should know a lot about my world then?",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 96,
        },
      ],
    },
    {
      id: 96,
      text: "For us, your world exists for a brief amount of time and revolves around the day your are now experiencing...",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 97,
        },
      ],
    },
    {
      id: 97,
      text: "Your first day of exploring the borrows below Ecna, at the edge of Pando Forest",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 98,
        },
      ],
    },
    {
      id: 98,
      text: "End when does this day end?",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 99,
        },
      ],
    },
    {
      id: 99,
      text: "Soon...I suppose...",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 100,
        },
      ],
    },
    {
      id: 100,
      text: "This means that I will disappear?",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 101,
        },
      ],
    },
    {
      id: 101,
      text: "Yes...but I will always remember you...",
      options: [
        {
          id: 1,
          text: "End game",
          nextText: 102,
        },
      ],
    },
    {
      id: 102,
      text: "Eisenhopper learned the truth and became a memory",
      options: [
        {
          id: 1,
          text: "Restart game?",
          nextText: -1,
        },
      ],
    },

  ],
};

export default Constants;
