const swap = (vector, pos1, pos2) => {
    [vector[pos1], vector[pos2]] = [vector[pos2], vector[pos1]];
  };
  
  const shuffle = (vector, swaps) => {
    for (let i = 0; i < swaps; i++) {
      let pos1 = Math.floor(Math.random() * vector.length);
      let pos2 = Math.floor(Math.random() * vector.length);
      swap(vector, pos1, pos2);
    }
  };
  
  const bubbleSort = vector => {
    for (let i = 0; i < vector.length; i++) {
      for (let j = 0; j < vector.length - i - 1; j++) {
        if (vector[j] > vector[j + 1]) {
          swap(vector, j, j + 1);
        }
      }
    }
  };
  
  const selectionSort = vector => {
    for (let i = 0; i < vector.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < vector.length; j++) {
        if (vector[j] < vector[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        swap(vector, i, minIndex);
      }
    }
  };
  
  const quickSort = (vector, start = 0, end = vector.length - 1) => {
    if (start >= end) {
      return;
    }
  
    let pivotIndex = particionamento(vector, start, end);
    quickSort(vector, start, pivotIndex - 1);
    quickSort(vector, pivotIndex + 1, end);
  };
  
  const particionamento = (vector, start, end, pivot = vector[end]) => {
    let i = start - 1;
    for (let j = start; j <= end - 1; j++) {
      if (vector[j] <= pivot) {
        i++;
        swap(vector, i, j);
      }
    }
    swap(vector, i + 1, end);
    return i + 1;
  };