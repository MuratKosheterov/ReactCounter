import React, { useState } from 'react'

function Counter() {

    const [count, setCount] = useState(0)

    function decreament () {
        setCount(count -1 )
    }

    function increament () {
        setCount(count +1 )
    }

    
    function reset () {
        setCount(0)
    }


  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col text-center mt-5">
            <h1 >Counter with React JS</h1>
            <div className="row">
              <div className="col mt-5 d-flex justify-content-center  border-bottom  border-1 border-black pb-3">
                <button onClick={decreament} className=" bg-danger  border-0 px-3 py-2 text-light rounded-pill">decreament (-)</button>
                <p className=" justify-content-center d-flex align-items-center my-auto mx-3 px-4 fs-4 ">{count}</p>
                <button  onClick={increament} className=" bg-success  border-0  px-3 py-2 text-light rounded-pill">increament (+)</button>
              </div>
            </div>
            <button  onClick={reset} className=" bg-warning  border-0  mt-5  mt-5 px-5 py-2">Reset</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Counter
