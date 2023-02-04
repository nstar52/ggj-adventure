const Constants = {
  textNodes: [
    {
      id: 1,
      text: "Our character meets Trevor the Frog",
      options: [
        {
          id: 1,
          text: "Continue",
          nextText: 2,
        },
      ],
    },
    {
      id: 2,
      text: "Trevor asks if 'name' knows his way in the rabbit hole network 'y'",
      options: [
        {
          id: 1,
          text: "It's not my first time!",
          nextText: 3,
        },
        {
          id: 2,
          text: "No, but I heard it has lots of carrots!",
          nextText: 4,
        },
      ],
    },
    {
      id: 3,
      text: "That’s great! Can I tag along, ribbit! Promise to not slow you down, ribbit",
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
      text: "Trevor warns about the dangers and wonders if he can tag along. He is trying to reach his family in the swamp but there is a badger preying on him Prompts to go inside",
      options: [
        {
          id: 1,
          text: "Restart",
          nextText: -1,
        },
      ],
    },
    {
      id: 5,
      text: "He is going to the swamp will you join him? It is safer and you could help each other",
      options: [
        {
          id: 1,
          text: "I've never been to the swamp, does it have carrots?",
          nextText: -1,
        },
        {
          id: 2,
          text: "I've heard so much about the network, I really want to explore it!",
          nextText: 2,
        },
      ],
    },
    {
      id: 6,
      text: "You wake up well rested and full of energy ready to explore the nearby castle.",
      options: [
        {
          id: 1,
          text: "Explore the castle",
          nextText: 7,
        },
      ],
    },
    {
      id: 7,
      text: "While exploring the castle you come across a horrible monster in your path.",
      options: [
        {
          id: 1,
          text: "Try to run",
          nextText: 8,
        },
        {
          id: 2,
          text: "Attack it with your sword",
          requiredState: (currentState) => currentState.sword,
          nextText: 9,
        },
        {
          text: "Hide behind your shield",
          requiredState: (currentState) => currentState.shield,
          nextText: 10,
        },
        {
          id: 3,
          text: "Throw the blue goo at it",
          requiredState: (currentState) => currentState.blueGoo,
          nextText: 11,
        },
      ],
    },
    {
      id: 8,
      text: "Your attempts to run are in vain and the monster easily catches.",
      options: [
        {
          id: 1,
          text: "Restart",
          nextText: -1,
        },
      ],
    },
    {
      id: 9,
      text: "You foolishly thought this monster could be slain with a single sword.",
      options: [
        {
          id: 1,
          text: "Restart",
          nextText: -1,
        },
      ],
    },
    {
      id: 10,
      text: "The monster laughed as you hid behind your shield and ate you.",
      options: [
        {
          id: 1,
          text: "Restart",
          nextText: -1,
        },
      ],
    },
    {
      id: 11,
      text: "You threw your jar of goo at the monster and it exploded. After the dust settled you saw the monster was destroyed. Seeing your victory you decide to claim this castle as your and live out the rest of your days there.",
      options: [
        {
          id: 1,
          text: "Congratulations. Play Again.",
          nextText: -1,
        },
      ],
    },
  ],
};

export default Constants;
