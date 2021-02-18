export const DefaultTips = [
  {
    "title": "1 Meet the Dot Command",
    "description": "The dot command lets us repeat the last change. It is the most powerful and versatile command in Vim.<br/><a target='_blank' href='https://vimhelp.org/repeat.txt.html#'>Repeat</a>"
  },
  {
    "title": "2 Don't Repeat Yourself",
    "description": "For such a common use case as appending a semicolon at the end of a series of lines, Vim provides a dedicated command that combines two steps into one."
  },
  {
    "title": "3 Take One Step Back, Then Three Forward",
    "description": "We can pad a single character with two spaces (one if front, the other behind) by using an idiomatic Vim solution. At first it might look slightly odd, but the solution has the benefit of being repeatable, which allows us to complete the task effortlessly."
  },
  {
    "title": "4 Act, Repeat, Reverse",
    "description": "When facing a repetitive task, we can achieve an optimal editing strategy by making both the motion and the change repeatable. Vim has a knack for this. It remembers our actions and keeps the most common ones within close reach so that we can easily replay them."
  },
  {
    "title": "5 Find and Replace by Hand",
    "description": "Vim has a :substitute command for find-and-replace tasks, but with this alternative technique, we'll change the first occurence by hand and then find and replace every other match one by one. The dot command will save us from labor, but we'll meet another nifty one-key command that makes jumpting bwetween matches a snap."
  },
  {
    "title": "6 Meet the Dot Formula",
    "description": "We've considered three simple editing tasks so far. Even though each problem was different, we found a solution using the dot command for each one. In this tip, we'll compare each solution and identify a common pattern-an optimal editing strategy that I call the Dot Formula."
  },
  {
    "title": "7 Pause with Your Brush Off the Page",
    "description": "For those unused to Vim, Normal mode can seem like an odd default. But experienced Vim users have difficulty imagining it any other way. This tip uses an analogy to illustrate the Vim way."
  },
  {
    "title": "8 Chunk Your Undos",
    "description": "In other text editors, invoking the undo command after typing a few words might revert the last typed word or character. However, in Vim we can control the granularity of the undo command."
  },
  {
    "title": "9 Compose Repeatable Changes",
    "description": "Vim is optimized for repetition. In order to exploit this, we have to be mindful of how we compose our changes.",
    "code": "Delete a word: daw"
  }
];
