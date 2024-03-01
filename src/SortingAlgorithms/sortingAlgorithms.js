function bubbleSort(arr, callback) {
    // alert box
    const newArr = arr;

    for(let i = 0; i < newArr.length; i++){
        for(let j = 0; j < newArr.length - i - 1; j++){
            setTimeout(() => {
                if (newArr[j] > newArr[j + 1]) {
                    // Swap elements
                    let temp = newArr[j];
                    newArr[j] = newArr[j + 1];
                    newArr[j + 1] = temp;

                    // Invoke callback function with the updated array after each swap
                    callback(newArr);
                }
            }, 10); // Multiply by 1000 for milliseconds delay
        }
    }

    return newArr;

}

export default bubbleSort;