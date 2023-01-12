import React, {useState, useReducer} from 'react';

const initialState = {
  counters: [
    { id: 1, count: 0 },
    { id: 2, count: 0 },
    { id: 3, count: 0 },
  ]
}

const App = () => {
  const [end, setEnd] = useState(true);
  const [fixed, setFixed] = useState(false);
  const [cube1, setCube1] = useState(1);
  const [cube2, setCube2] = useState(1);
  const [cube3, setCube3] = useState(1);

 
const roll = () => {
    if(!fixed){
        setCube1(Math.floor(Math.random() * 6) + 1);
        // setCube2(Math.floor(Math.random() * 6) + 1);
        // setCube3(Math.floor(Math.random() * 6) + 1);
    }else if(!end){
        if(cube1 === cube2 && cube1 === cube3){
          setEnd(true);
          return;
        }
        setCube2(Math.floor(Math.random() * 6) + 1);
        setCube3(Math.floor(Math.random() * 6) + 1);
    }
  }

  return (
    <div>
      {/* <h2 className='text-2xl'>Roll It!</h2> */}
        <div className='flex w-screen h-screen flex-col justify-center items-center gap-5'>
          <section className='flex gap-7'>
              <div className='cube-1 w-28 h-28 flex justify-center items-center border border-black p-2 rounded-xl cursor-pointer' onClick={()=>setFixed(true)}>
                  <img src={`./images/dice-${cube1}.png`} alt="" />
              </div>
              <div className='cube-2 w-28 h-28 flex justify-center items-center border border-black p-2 rounded-xl'>
                  <img src={`./images/dice-${cube2}.png`} alt="" />
              </div>
              <div className='cube-3 w-28 h-28 flex justify-center items-center border border-black p-2 rounded-xl'>
                  <img src={`./images/dice-${cube3}.png`} alt="" />
              </div>
          </section>
          <div>
            <button className='px-3 py-2 border border-b-4 border-l-2 border-r border-black bg-red-400 text-white rounded-xl' onClick={() => roll()}>Roll</button>
          </div>
        </div>
        {
          end && (
            <div className='absolute top-0 h-screen w-screen backdrop-blur-md' onClick={() => setEnd(false)}>
              <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] mx-auto bg-red-300 text-black text-xl px-4 py-8 rounded-xl flex flex-col justify-center items-center gap-5'>
                {/* <div className='absolute left-[-20px] cursor-pointer' >X</div>   */}
                <div>
                  🎉 Congratulations! You've Won the Game 🎉 
                </div>
                <div onClick={()=>{
                  setEnd(false);
                  setCube1(1);
                  setCube2(1);
                  setCube3(1);
                }} className='px-3 py-2 border border-b-4 border-l-2 border-r border-black bg-red-400 text-white rounded-xl inline-block cursor-pointer'>Reset Game</div>
              </div>
            </div>
            
          )
        }
    </div>
  )
}

export default App

