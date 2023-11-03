# Algorithms

## Search

### Linear Search

```
  repeat starting at first element:
	if element is target → stop
	otherwise move to next element
```

### Binary Search

```
repeat until (sub)array is size 0:
	calculate middle point of current (sub)array
	if target is in middle → stop
	otherwise if target is less than middle → repeat changing end to to be just left of middle
	otherwise if target is greater than middle → repeat changing start to be just right of middle
```

## Sort

### Selection Sort

```
repeat until no unsorted elements remain:
	search unsorted part to find smallest element
	swap smallest found element with first element of unsorted part
```
