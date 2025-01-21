export const questions = {
  questions: [
    // Data Structures - Arrays
    {
      id: 1,
      type: "multiple-choice",
      question: "What is the time complexity of finding the median of two sorted arrays of size m and n?",
      options: ["O(log(min(m,n)))", "O(m+n)", "O(log(m+n))", "O(mn)"],
      correctAnswers: ["O(log(min(m,n)))"],
      multipleAnswers: false,
      note: "Arrays"
    },
    // Data Structures - Linked Lists
    {
      id: 2,
      type: "fill-in-the-blanks",
      question: "In a circular linked list, the last node points to the __ instead of null.",
      blanks: ["head"],
      note: "Linked Lists"
    },
    // Data Structures - Stacks
    {
      id: 3,
      type: "multiple-choice",
      question: "Which of the following data structures can be used to implement an LRU cache?",
      options: ["Stack", "Queue", "Deque", "Hash Table with a Linked List"],
      correctAnswers: ["Hash Table with a Linked List"],
      multipleAnswers: false,
      note: "Stacks"
    },
    // Data Structures - Queues
    {
      id: 4,
      type: "multiple-choice",
      question: "What is the amortized time complexity of an enqueue operation in a queue implemented using two stacks?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
      correctAnswers: ["O(1)"],
      multipleAnswers: false,
      note: "Queues"
    },
    // Data Structures - Trees
    {
      id: 5,
      type: "fill-in-the-blanks",
      question: "The height of a balanced binary search tree with n nodes is __.",
      blanks: ["O(log n)"],
      note: "Trees"
    },
    // Data Structures - Graphs
    {
      id: 6,
      type: "multiple-choice",
      question: "Which algorithm is used to find the shortest path in a weighted graph?",
      options: ["Depth-First Search", "Breadth-First Search", "Dijkstra's Algorithm", "Kruskal's Algorithm"],
      correctAnswers: ["Dijkstra's Algorithm"],
      multipleAnswers: false,
      note: "Graphs"
    },
    // Data Structures - Hash Tables
    {
      id: 7,
      type: "fill-in-the-blanks",
      question: "In a hash table, __ is used to handle collisions by chaining.",
      blanks: ["linked list"],
      note: "Hash Tables"
    },
    // Data Structures - Heaps
    {
      id: 8,
      type: "multiple-choice",
      question: "Which of the following operations can be performed in O(log n) time in a heap?",
      options: ["Insertion", "Search", "Delete maximum", "All of the above"],
      correctAnswers: ["Insertion", "Delete maximum"],
      multipleAnswers: true,
      note: "Heaps"
    },
    // Data Structures - Binary Search Tree (BST)
    {
      id: 9,
      type: "multiple-choice",
      question: "What is the worst-case time complexity for search in an unbalanced binary search tree?",
      options: ["O(log n)", "O(n)", "O(n log n)", "O(1)"],
      correctAnswers: ["O(n)"],
      multipleAnswers: false,
      note: "Binary Search Tree"
    },
    // Data Structures - Complexity
    {
      id: 10,
      type: "fill-in-the-blanks",
      question: "The __ complexity of building a heap from an unsorted array of n elements is O(n).",
      blanks: ["time"],
      note: "Complexity"
    },
    // Data Structures - Trie
    {
      id: 11,
      type: "multiple-choice",
      question: "What is the space complexity of a Trie in terms of the number of words (w) and the average length of words (l)?",
      options: ["O(w)", "O(w * l)", "O(l^w)", "O(w + l)"],
      correctAnswers: ["O(w * l)"],
      multipleAnswers: false,
      note: "Trie"
    },
    // Data Structures - Dynamic Programming
    {
      id: 12,
      type: "multiple-choice",
      question: "Which data structure is commonly used to store the results of subproblems in dynamic programming?",
      options: ["Stack", "Queue", "Array", "Graph"],
      correctAnswers: ["Array"],
      multipleAnswers: false,
      note: "Dynamic Programming"
    }
  ]
};
