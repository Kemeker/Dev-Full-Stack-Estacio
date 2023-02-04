//Funçao SWAP para trocar posiçoes
function swap(arr, posicao1, posicao2) {
    [arr[posicao1], arr[posicao2]] = [arr[posicao2], arr[posicao1]];
}

// Funçao Shuffle para embaralhar elementos
function Shuffle(arr, n){
    for (let i = 0; i < n; i++){
        let randomIndex = math.floor(Math.random() * arr.length)
        [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]]

    }
}


// Funçao BubbleSort para organizar os elementos em ordem
function bubbleSort(arr){
    let n = arr.length
    for (let i = 0; i < n - 1; i++){
        for (let j = 0; j < n - i - 1; j++){
            if (arr[j] > arr[j + 1]){
                let temporaria = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temporaria
            }
        }
    }
    return arr
}

// Funçao Selection Sort para ordenar elementos
function selectionSort(arr){
    let n = arr.length
    for(let i = 0; i < n - 1; i++){
        let minindex = i
        for (let j = i + 1; j < n; j++){
            if (arr[j] < arr[minindex]){
                minindex = j
            }
        }
        let temporaria = arr[minindex]
        arr[minindex] = arr[i]
        arr[i] = temporaria
    }
    return arr
}

//Funçao QuickSort para ordenar os vetores

function quickSort(arr, start, end) {
    if (start >= end) {
      return;
    }
    
    let pivotIndex = partition(arr, start, end);
    quickSort(arr, start, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, end);
  }
  
  function partition(arr, start, end) {
    let pivot = arr[end];
    let pivotIndex = start;
    
    for (let i = start; i < end; i++) {
      if (arr[i] < pivot) {
        swap(arr, i, pivotIndex);
        pivotIndex++;
      }
    }
    
    swap(arr, pivotIndex, end);
    return pivotIndex;
  }
  
  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }