function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {

        let current = arr[i];
        
        let j = i - 1;

        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        

        arr[j + 1] = current;
    }
    
    return arr;
}


let array = [12, 7, 29, 3, 16];
console.log("Original array:", array);
let sortedArray = insertionSort(array);
console.log("Sorted array:", sortedArray);
