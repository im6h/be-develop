let arrayNeedSort: Array<number> = [];

for (let i: number = 0; i < 40; i++) {
  arrayNeedSort.push(Math.round(Math.random() * 40))
}

function selectionSort(arr: Array<number>): Array<number> {
  for (let i: number = 0; i < arr.length - 1; i++) {
    let min: number = i;
    for (let j: number = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j
      }
    }
    let temp: number = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}

console.log(selectionSort(arrayNeedSort))