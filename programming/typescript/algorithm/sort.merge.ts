const arr: Array<number> = [90, 3, 34, 1, 39, 2, 22, 34, 67, 54];

function mergeSort(array: number[], left: number, right: number): void {
  if (left <= right) {
    let mid: number = (right - left) / 2;
    mergeSort(array, left, mid);
    mergeSort(array, mid + 1, right);
    merge(array, left, mid, right);
  }
}

function merge(
  array: number[],
  left: number,
  mid: number,
  right: number,
): void {
  let n1 = mid - left + 1;
  let n2 = right - mid;
  let L = [];
  let R = [];
  for (let i = 0; i < n1; i++) {
    L[i] = array[left + i];
  }
  for (let j = 0; j < n2; j++) {
    R[j] = array[left + j + 1];
  }
  let i = 0,
    j = 0,
    k = left;
  while (i < n1 && j < n2) {
    if (L[i] < R[j]) {
      array[k] = L[i];
      i++;
    } else {
      array[k] = R[j];
    }
    k++;
  }
  while (i < n1) {
    array[k] = L[i];
    i++;
    k++;
  }
  while (j < n2) {
    array[k] = R[j];
    j++;
    k++;
  }
}
mergeSort(arr, 0, arr.length);
console.log(arr);
