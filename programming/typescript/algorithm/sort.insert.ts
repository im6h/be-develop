const arr: Array<number> = [90, 3, 34, 1, 39, 2, 22, 34, 67, 54];

function insertSort(arr: number[]): Array<number> {
  for (let i: number = 1; i < arr.length; i++) {
    let j: number = i - 1;
    let key: number = arr[i];
    while (j >= i && arr[j] > key) {
      arr[j + 1] = arr[j];
      j -= 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}

console.log(insertSort(arr));
