const arr: Array<number> = [90, 2, 34, 1, 39, 2, 22, 34, 67, 54];

function bubbleSort(array: Array<number>): Array<number> {
  for (let i: number = 0; i < array.length; i++) {
    for (let j: number = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        let temp: number = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

console.log(bubbleSort(arr));
