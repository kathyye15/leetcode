// From mdn docs:
// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

//implement a copycat sort method of js's sort method

class Arr {
  values = [];
  get length() {
    return this.values.length;
  }
  push() {
    for (let element of arguments) {
      this.values.push(element);
    }
    return this.length;
  }
  bubbleSort(cb = this.#compareStrings) {
    let swapped = false;
    for (let i = this.values.length; i > 0; i--) {
      for (let j = 0; j < i - 1; j++) {
        let a = this.values[j];
        let b = this.values[j + 1];
        let res = cb(a, b);
        if (res > 0) {
          this.values[j + 1] = a;
          this.values[j] = b;
          swapped = true;
        }
      }
      if (swapped == false) return;
    }
  }
  mergeSort(cb) {
    this.values = this.recursiveMergeSort(this.values, cb);
  }
  recursiveMergeSort(arr, cb) {
    //base case: arr length 0 or 1, return arr
    if (arr.length < 2) return arr;
    let mid = Math.floor(arr.length / 2);
    //split arr to left and right;
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    let sortedLeft = this.recursiveMergeSort(left, cb);
    let sortedRight = this.recursiveMergeSort(right, cb);
    let sorted = this.mergeSortHelper(sortedLeft, sortedRight, cb);
    return sorted;
  }
  mergeSortHelper(arr1, arr2, cb = this.#compareStrings) {
    let i = 0;
    let j = 0;
    let sortedArr = [];
    while (i < arr1.length && j < arr2.length) {
      let left = arr1[i];
      let right = arr2[j];
      let res = cb(left, right);
      // if res is... 
      if (res < 0) {
        sortedArr.push(left);
        i++;
      } else {
        sortedArr.push(right);
        j++;
      }
    }
    while (i < arr1.length) {
      sortedArr.push(arr1[i]);
      i++;
    }
    while (j < arr2.length) {
      sortedArr.push(arr2[j]);
      j++;
    }
    return sortedArr;
  }
  quickSort(cb = this.#compareStrings, arr = this.values, start = 0, end = arr.length - 1) {

    let index = this.partition(arr, start, end, cb);
    //partition helper function
    //i: arr, left, right, cb
    //o: index representing the partition
    //choose a middle pivot and sort the elements around the pivot accordingly
    //everything less than is sorted left
    //everything more than pivot is sorted right

    //if theres a left window, recursively call quickSort
    if (start < index - 1) {
      this.quickSort(cb, arr, start, index - 1);
    }
    //if theres a right window, recursively call quickSort
    if (index < end) {
      this.quickSort(cb, arr, index, end);
    }
  }
  partition(arr, left, right, cb) {
    let pivot = arr[left + Math.floor((right - left) / 2)];
    while (left <= right) {
      while (cb(arr[left], pivot) < 0) {
        left++;
      }
      while (cb(arr[right], pivot) > 0) {
        right--;
      }
      if (left <= right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
      }
    }
    return left;
  }
  #compareStrings(str1, str2) {
    str1 = str1.toString();
    str2 = str2.toString();
    let length = Math.min(str1.length, str2.length);
    for (let i = 0; i < length; i++) {
      if (str1[i] !== str2[i]) {
        return str1.charCodeAt(i) < str2.charCodeAt(i) ? -1 : 1;
      }
    }
    return str2.length < str1.length ? 1 : 0;
  }
}

let A = new Arr();
A.push(5, 542, 1, -9, 8, 5, 4, 7, 10, 6, 34322);
A.quickSort();
console.log(A.values);

let jsArr = [5, 542, 1, -9, 8, 5, 4, 7, 10, 6, 34322];
jsArr.sort();