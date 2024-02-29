import React, { useEffect } from 'react';

function Example() {

  useEffect(() => {
    for (let i = 0; i < 100; i++){
        document.querySelector(`#div${i}`).style.height = `${arr[i]}px`;
    }
  });

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  let arr = [100];
  
  function fileArray(len){
    for(let i = 0; i < len; i++){
        arr.push(randomIntFromInterval(5,100));
    }
  }

  // call fill array function 
  fileArray(100);

  return (
    <div className='flex justify-center p-4 items-end'>
        {arr.map((value, index) => {
            return <div key={index} className='m-1'  id={`div${index}`} style={{width: 5, height: value, backgroundColor: 'black'}}></div>
        })}
    </div>
  );
}

function SortingVisualizer(){
    return (
        <div className=''>
            <Example/>
        </div>
    );
}

export default Example;