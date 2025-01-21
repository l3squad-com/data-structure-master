export const questions = {
  questions: [
    // Data Structures - Arrays
    {
      id: 1,
      type: "multiple-choice",
      question: "What is the time complexity of inserting an element at the end of a dynamic array (amortized)?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
      correctAnswers: ["O(1)"],
      multipleAnswers: false,
      note: "Arrays"
    },
    // Data Structures - Linked Lists
    {
      id: 2,
      type: "fill-in-the-blanks",
      question: "In a singly linked list, each node contains a data field and a __ field that points to the next node.",
      blanks: ["next"],
      note: "Linked Lists"
    },
    // Data Structures - Stacks
    {
      id: 3,
      type: "multiple-choice",
      question: "Which of the following operations is not typical for a stack?",
      options: ["push", "pop", "enqueue", "peek"],
      correctAnswers: ["enqueue"],
      multipleAnswers: false,
      note: "Stacks"
    },
    // Data Structures - Queues
    {
      id: 4,
      type: "fill-in-the-blanks",
      question: "A __ queue allows insertion and deletion from both ends.",
      blanks: ["deque"],
      note: "Queues"
    },
    // Data Structures - Trees
    {
      id: 5,
      type: "multiple-choice",
      question: "In a binary tree, what is the maximum number of nodes at level 'l'?",
      options: ["2^l", "2^(l-1)", "2^(l+1)", "l^2"],
      correctAnswers: ["2^l"],
      multipleAnswers: false,
      note: "Trees"
    },
    // Data Structures - Graphs
    {
      id: 6,
      type: "fill-in-the-blanks",
      question: "In an undirected graph, the degree of a vertex is the number of __ connected to it.",
      blanks: ["edges"],
      note: "Graphs"
    },
    // Data Structures - Hash Tables
    {
      id: 7,
      type: "multiple-choice",
      question: "What is the average time complexity of search, insert, and delete operations in a hash table?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
      correctAnswers: ["O(1)"],
      multipleAnswers: false,
      note: "Hash Tables"
    },
    // Data Structures - Heaps
    {
      id: 8,
      type: "fill-in-the-blanks",
      question: "In a max heap, the parent node is always __ than its child nodes.",
      blanks: ["greater"],
      note: "Heaps"
    },
    // Data Structures - Binary Search Tree (BST)
    {
      id: 9,
      type: "multiple-choice",
      question: "Which traversal of a binary search tree outputs the elements in sorted order?",
      options: ["Preorder", "Inorder", "Postorder", "Level-order"],
      correctAnswers: ["Inorder"],
      multipleAnswers: false,
      note: "Binary Search Tree"
    },
    // Data Structures - Complexity
    {
      id: 10,
      type: "fill-in-the-blanks",
      question: "The __ complexity of searching an element in a balanced binary search tree is O(log n).",
      blanks: ["time"],
      note: "Complexity"
    },
    // Data Structures - Trie
    {
      id: 11,
      type: "multiple-choice",
      question: "What is a common use case for a Trie data structure?",
      options: ["Storing integers", "String searching", "Graph traversal", "Sorting algorithms"],
      correctAnswers: ["String searching"],
      multipleAnswers: false,
      note: "Trie"
    },
    // Data Structures - Dynamic Programming
    {
      id: 12,
      type: "fill-in-the-blanks",
      question: "Dynamic programming is used to solve problems by breaking them down into overlapping __ subproblems.",
      blanks: ["smaller"],
      note: "Dynamic Programming"
    }
  ]
};
