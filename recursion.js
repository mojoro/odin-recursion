function fibs(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    if (i == 0) arr.push(i);
    else if (i == 1) arr.push(i);
    else if (i > 1) arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr;
}

console.log(fibs(10));

function fibsRec(n, arr = [0, 1]) {
  if (n <= 1) {
    return arr.slice(0, n + 1);
  } else if (arr.length < n) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return fibsRec(n, arr);
  }
  return arr;
}

console.log(fibsRec(4));

function fibsRecursive(n, arr = []) {
  if (n < 2) {
    return n;
  } else {
    return fibsRec(n - 1) + fibsRec(n - 2);
  }
}

function mergeSort(arr, sortedArray = []) {
  if (arr.length == 1) {
    console.log(arr.length);
    return arr;
  } else if (arr.length > 1) {
    console.log(arr.length);

    const left = arr.slice(0, arr.length / 2);
    const right = arr.slice(arr.length / 2, arr.length);
    const leftSorted = mergeSort(left);
    const rightSorted = mergeSort(right);

    let i = 0,
      j = 0,
      k = 0;

    while (i <= leftSorted.length - 1 && j <= rightSorted.length - 1) {
      if (leftSorted[i] < rightSorted[j]) {
        sortedArray[k++] = leftSorted[i++];
      } else {
        sortedArray[k++] = rightSorted[j++];
      }
    }
    for (i = i; i <= leftSorted.length - 1; i++) {
      sortedArray[k++] = leftSorted[i];
    }
    for (j = j; j <= rightSorted.length - 1; j++) {
      sortedArray[k++] = rightSorted[j];
    }
  }
  return sortedArray;
}

console.log(
  mergeSort([3, 2, 1, 13, 8, 5, 0, 1, 10, 424, 24, 64, 36, 363, 150, 4242])
);
