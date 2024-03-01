import React, { useEffect, useState } from 'react';
import bubbleSort from '../SortingAlgorithms/sortingAlgorithms';
import BubbleSort from '../SortingAlgorithms/sortingAlgorithms';
function Example() {
  const [arr, setArr] = useState([]);
  const [range, setRange] = useState(10);
  const [selectedAlgo, setSelectedAlgo] = useState('');
  const [sortingInProgress, setSortingInProgress] = useState(false);
  
  function fillArray(len){
    const newArr = [];
    for(let i = 0; i < len; i++){
      newArr.push(randomIntFromInterval(5,700));
    }
    
    return newArr;
  }
  
  
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


  useEffect(() => {
    if(range){
      const newArr = fillArray(range);
      setArr(newArr);
    }
  }, [range]);

  useEffect(() => {
    for (let i = 0; i < arr.length; i++) {
      document.querySelector(`#div${i}`).style.height = `${arr[i]}px`;
    }
  }, [arr]);

  const RangeChange = (event) => {
    const newRange = event.target.value;
    setRange(newRange);
  };

  const fillNewArray = () => {
    const newArr = fillArray(range);
    setArr(newArr);
  };
  
  const sortArray = (algo) => {
    if (algo === 'bubble') {
      // Clone the current array to avoid mutating the state directly
      const arrayCopy = [...arr];
      
      // Define a callback function to update the array in the state
      const bubbleSortCallback = (sortedArray) => {
        // Update the array in the state with a delay
          setArr(sortedArray);
      };

      // Call the bubbleSort function with the array and the callback function
      bubbleSort(arrayCopy, bubbleSortCallback);
    }
  };

  const handleAlgo = () => {
      const algo = document.getElementById('algo');
      setSelectedAlgo(algo.value);
  }

  function showArr(arr){
    return arr.map((value, index) => (
        <div key={index} className='m-1'  id={`div${index}`} style={{width: 5, height: value, backgroundColor: 'black'}}></div>
    ));
  }
  
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
        <input type="range" min="20" max="100" id='range' value={range} onChange={RangeChange} className="w-40 h-1/5"/>
        <div className='flex items-end h-4/5'>
          {showArr(arr)}
        </div>
        <button onClick={fillNewArray} className='bg-blue-500 text-white p-2 rounded-lg'>Generate New Array</button>
        {/* options for sorting agorithms */}
        <select className='m-2' id='algo' onChange={handleAlgo}>
          <option value="">Select Algorithm</option>
          <option value="bubble">Bubble Sort</option>
          <option value="quick">Quick Sort</option>
          <option value="merge">Merge Sort</option>
        </select>
        <button onClick={() => {sortArray(selectedAlgo)}} className='bg-blue-500 text-white p-2 rounded-lg'>Sort</button>
    </div>
  );
}



function SortingVisualizer(){
  
  return (
        <div>
            <Example/>
        </div>
    );
}

export default SortingVisualizer;