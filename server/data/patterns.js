const patterns = [
  {
    id: 2,
    name: 'Fast and Slow Pointers',
    difficulty: 'Medium',
    category: 'Two pointers',
    summary: 'Use two pointers moving at different speeds to detect cycles or find midpoints.',
    tips: 'Useful for linked lists and array cycles; if they meet, there is a cycle.',
    example: 'Linked List Cycle Detection',
    image: '/public/images/fast-slow-pointers.png'
  },
  {
    id: 3,
    name: 'Merge Intervals',
    difficulty: 'Medium',
    category: 'Intervals',
    summary: 'Efficiently handle overlapping intervals by sorting them first.',
    tips: 'Sort by start time; keep track of end times to merge or find gaps.',
    example: 'Merge overlapping meeting times',
    image: '/public/images/merge-intervals.png'
  },
  {
    id: 4,
    name: 'Top K Elements',
    difficulty: 'Medium',
    category: 'Heaps/Sorting',
    summary: 'Maintain a heap of size K to keep track of the largest or smallest elements.',
    tips: 'Use a Min-Heap to find top K largest; Max-Heap for top K smallest.',
    example: 'Kth largest element in an array',
    image: '/public/images/top-k-elements.png'
  },
  {
    id: 5,
    name: 'Subsets',
    difficulty: 'Medium',
    category: 'Backtracking/Recursion',
    summary: 'Generate all possible combinations or permutations of a set.',
    tips: 'Use recursion to build paths; remember to backtrack (remove last element) after each step.',
    example: 'Generate all power sets of an array',
    image: '/public/images/subsets.png'
  },
  {
    id: 6,
    name: 'Modified Binary Search',
    difficulty: 'Medium',
    category: 'Binary Search',
    summary: 'Search a sorted structure without checking every element.',
    tips: 'Look for sorted segments; verify the search condition in each half to discard the other.',
    example: 'Search in a rotated sorted array',
    image: '/public/images/modified-binary-search.png'
  }
];

export default patterns