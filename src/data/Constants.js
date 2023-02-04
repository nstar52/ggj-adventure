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
          setState: {'trevor': 1},
          nextText: 13,
        },
        {
          id: 2,
          text: "Go deeper",
          setState: {'deeper': 1},
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
          setState: {'bone': 1},
          nextText: 18,
        },
        {
          id: 2,
          text: "pick up carrot",
          setState: {'carrot': 1},
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
      text: "Player: Who are you?",
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
          requireState: {'trevor': 1},
          nextText: 27,
        },
        {
          id: 2,
          text: "Continue",
          requireState: {'deeper': 1},
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
          requireState: {'bone': 1},
          nextText: 33,
        },
        {
          id: 2,
          text: "Continue",
          requireState: {'carrot': 1},
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

  ],
};

export default Constants;
