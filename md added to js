# Data Structures - Simple Crash Guide
by bahnasy

## Kid-Level Master Summary

Imagine you have a giant box of Lego pieces. If you just dump them all in the box, finding the exact piece you need takes forever! A **data structure** is like having special organizers: a tall tube where you stack pieces one by one, a conveyor belt where pieces go in one end and out the other, or a giant family tree showing which piece connects to which. By organizing your pieces (data) using these clever rules, the computer can find, add, or remove exactly what you need in the blink of an eye!

## Quick "Cheat-Sheet" of Core Ideas
- **Arrays**: Like a row of numbered mailboxes; you can jump instantly to any box if you know its number.
- **Linked Lists**: Like a treasure hunt where each clue (node) only tells you where to find the very next clue.
- **Stacks**: Like a stack of heavy pancakes; you have to eat the one on top before you can reach the ones underneath (Last-In-First-Out).
- **Queues**: Like a line at the ice cream truck; the first person to join the line gets their ice cream first (First-In-First-Out).
- **Trees**: Like a family tree with a single great-grandparent at the top branching down to children and grandchildren.
- **Graphs**: Like a map of cities (nodes) connected by roads (edges) going everywhere!
- **Hashing**: Like having a magical librarian who converts a book's title directly into its exact shelf number instantly.
- **Big-O (Complexity)**: A simple grade (like O(1) or O(n)) that tells you how much slower the computer gets when you give it way more work to do.

---

## Lecture-by-Lecture Breakdowns

### Lecture 1: Introduction to Data Structures & Arrays
**Summary:** The basics of how computers measure efficiency and the simplest way to store a list of items.
- **Space and Time Complexity**: A measure of memory used (space) and steps taken (time). Analogy: Does your recipe require a huge kitchen (space) and take 10 hours (time)?
- **Abstract Data Type (ADT)**: The idea of what something does, without worrying about how it's built internally. Analogy: A car's steering wheel (interface) vs the engine (implementation).
- **Array**: Items placed right next to each other in memory, allowing instant access by index. Analogy: A pill box with days of the week.
  ```python
  # Adding elements to an array
  arr = [10, 20, 30]
  print(arr[1]) # Instantly prints 20
  ```
- **Practice Q**: Why are arrays sometimes bad for inserting?
  **A**: Because you have to shift every other element over to make room. Imagine telling everyone in a movie theater row to move one seat to the right!

### Lecture 2: Stacks
**Summary:** A structure where you can only touch the very top item.
- **LIFO**: Last In, First Out. Analogy: A stack of cafeteria trays.
- **Push & Pop**: Push adds to the top, Pop removes from the top.
  ```python
  stack = []
  stack.append(5) # Push
  top = stack.pop() # Pop (returns 5)
  ```
- **Practice Q**: What happens if you try to `pop` an empty stack?
  **A**: You get a "Stack Underflow" error. You can't take a tray from an empty pile!

### Lecture 3: Queues
**Summary:** A structure where lines are fair—first come, first served.
- **FIFO**: First In, First Out. Analogy: Waiting at a grocery checkout.
- **Enqueue & Dequeue**: Enqueue joins the back, Dequeue leaves the front.
- **Circular Queue**: A queue that wraps around in a circle to reuse empty spaces. Analogy: A circular sushi conveyor belt.
  ```python
  queue = []
  queue.append("Alice") # Enqueue
  first = queue.pop(0) # Dequeue (Alice leaves)
  ```
- **Practice Q**: Why do we use a Circular Queue instead of a normal one in arrays?
  **A**: To save space. In a normal array queue, when spaces at the front empty out, they are wasted. A circular queue reuses them!

### Lecture 4: Linked Lists (Singly, Doubly, Circular)
**Summary:** Nodes holding hands in a line, rather than sitting side-by-side in memory.
- **Singly Linked**: Each node holds data and points to the next node. Analogy: Kids holding hands in a one-way line.
- **Doubly Linked**: Nodes point to next AND previous nodes. Analogy: A two-way street.
- **Circular Linked**: The last node points back to the first. Analogy: A game of duck-duck-goose.
  ```python
  class Node:
      def __init__(self, data):
          self.data = data
          self.next = None
  node1 = Node(5)
  node1.next = Node(10)
  ```
- **Practice Q**: What is the main advantage of a Linked List over an Array?
  **A**: Fast insertion and deletion anywhere, because you just change who is holding hands, rather than moving everyone over!

### Lecture 5: Trees & Binary Search Trees (BST)
**Summary:** Branching structures for massive amounts of organized data.
- **Tree/Root/Leaf**: A root at top, leaves at bottom. Analogy: A tournament bracket.
- **Binary Tree**: Every parent has at most 2 children.
- **BST**: Left child is smaller, right child is bigger. Analogy: A guessing game where "less than" goes left, "greater than" goes right.
  ```python
  # Searching a BST
  def search(root, key):
      if root is None or root.val == key: return root
      if root.val < key: return search(root.right, key)
      return search(root.left, key)
  ```
- **Practice Q**: How do you delete a node in a BST that has two children?
  **A**: Find the smallest value in the right sub-tree, swap it, and delete the duplicate. You need a replacement that keeps the tree sorted!

### Lecture 6: AVL Trees
**Summary:** Self-fixing trees to keep them perfectly balanced and incredibly fast.
- **AVL Tree**: A BST where left and right sides never differ in height by more than 1. Analogy: A seesaw that automatically fixes itself if one side gets too heavy.
- **Rotations (LL, RR, LR, RL)**: The moves the tree makes to fix balance. Analogy: Untangling a twisted phone cord with specific twists.
- **Practice Q**: Why do we need an AVL tree if we already have a BST?
  **A**: Because a BST can become a "long straight line" (skewed) and act like a slow array. AVL guarantees it stays fast (O(log n)).

### Lecture 7: Hashing
**Summary:** Magic math to find data instantly.
- **Hash Function / Table**: Math that turns a name into an exact index. Analogy: A magical phonebook where looking at a name instantly tells you the page number.
- **Collisions**: When two items get the same index. Analogy: Two students assigned to the same locker!
- **Chaining vs Probing**: Fixing a collision by making a list IN the locker (chaining) or checking the very next locker (probing).
- **Practice Q**: What is "Linear Probing"?
  **A**: If a spot is taken, just walk one step forward to the next empty spot and put it there.

### Lecture 8: Graphs
**Summary:** Connecting absolutely anything to anything.
- **Graph (Vertices/Edges)**: Dots connected by lines. Analogy: Airplane flight maps.
- **Directed vs Undirected**: One-way roads vs two-way roads.
- **Adjacency Matrix**: A grid showing who connects to who.
- **Practice Q**: When would you use a Graph instead of a Tree?
  **A**: When relationships don't just flow downwards. In a graph, there is no "root", anyone can connect to anyone and you can make loops!

### Lecture 9: Search Algorithms
**Summary:** Finding a needle in the haystack.
- **Linear Search**: Checking every item fully. Analogy: Opening every box until you find the prize.
- **Binary Search**: Cutting sorted data in half. Analogy: Looking in a dictionary, opening the middle, and tearing half the book away instantly.
  ```python
  # Binary Search logic
  mid = (low + high) // 2
  if arr[mid] == key: return mid
  elif arr[mid] < key: low = mid + 1
  else: high = mid - 1
  ```
- **Practice Q**: What requirement is strictly needed for Binary Search?
  **A**: The data MUST be sorted first! You can't guess half the dictionary if the pages are shuffled!

---

## 15 Likely Professor Exam Questions

**Q1: What is the Time Complexity of accessing an item in an Array vs a Linked List?**
*Answer:* Array is O(1), Linked List is O(n). *Why:* Arrays rely on math to jump instantly, Linked Lists require walking through every node from the start.

**Q2: Convert infix `A + B * C` to postfix.**
*Answer:* `A B C * +`. *Why:* Multiplication has higher priority, so `B C *` is done first, then added to A.

**Q3: Describe a situation where a Stack is the best data structure.**
*Answer:* Undo buttons in text editors. *Why:* You want to undo the very *last* action you just performed (LIFO).

**Q4: Compare Linear Probing and Separate Chaining in Hashing.**
*Answer:* Probing finds the next empty slot in the same array; Chaining builds a linked list inside the bucket. *Why:* Probing avoids pointers, chaining handles high traffic better.

**Q5: In a Binary Search Tree, what is the sequence of an In-Order traversal?**
*Answer:* Left, Root, Right. It outputs the items in sorted ascending order. *Why:* You process the smallest stuff first, then parent, then bigger stuff.

**Q6: Trace binary searching for '10' in `[2, 5, 8, 10, 15]`.**
*Answer:* Mid is 8 (<10). Ignore left. New array `[10, 15]`. Mid is 10. Found! *Why:* We slice the problem in half every single step.

**Q7: Explain the 'Load Factor' in Hashing.**
*Answer:* It's the number of items divided by the size of the table. *Why:* It tells you how full the hash table is getting before you need to resize it.

**Q8: What distinguishes an AVL Tree from a normal Binary Search Tree?**
*Answer:* The balance factor restriction. *Why:* The height difference between left and right subtrees of any node can only be -1, 0, or 1.

**Q9: If a Queue is implemented with a linked list, where do we Enqueue and Dequeue?**
*Answer:* Enqueue at the Tail, Dequeue at the Head. *Why:* This ensures both operations are instant O(1).

**Q10: What is a complete graph?**
*Answer:* A graph where every single node is connected directly to every other node. *Why:* Maximum possible edges.

**Q11: How many nodes are in a strictly binary tree with 'N' leaves?**
*Answer:* 2N - 1. *Why:* Because every internal node MUST have exactly two children.

**Q12: In a Circular Queue, how do we advance the 'Rear' pointer?**
*Answer:* `(rear + 1) % MAX_SIZE`. *Why:* Using the modulo operator forces it to smoothly reset to zero when it hits the end of the array.

**Q13: Why is a Doubly Linked List better than Singly Linked List for removing a node?**
*Answer:* You already have a pointer to the previous node. *Why:* In a singly linked list, you have to search from the very beginning to find the "previous" node to fix the broken chain.

**Q14: Explain O(log n) time complexity simply.**
*Answer:* The data is halved each step. *Why:* If you double the workload, the computer only takes 1 extra step to finish.

**Q15: What is an Adjacency Matrix?**
*Answer:* A 2D array representing a graph, where `matrix[row][col] = 1` if an edge connects them. *Why:* It allows extremely fast O(1) checks to see if two dots are connected!

---
*You can do this — focus on the basics and practice the flashcards!*
