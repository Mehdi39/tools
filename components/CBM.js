import React, {useState, useEffect} from "react";
import m3 from '../public/m3.svg'

const CBM = () => {
    const [cbm, setCbm] = useState(1)

    const onChange = () => {
        let quantity = document.getElementById('quantity').value;
        let len = document.getElementById('len').value;
        let wid = document.getElementById('wid').value;
        let height = document.getElementById('height').value;
        
        
        let result = ((len * wid * height) / 1000000) * quantity;
        let finalResult = parseFloat(result.toPrecision(3))
        

        setCbm(finalResult);
    }


  return (
    <div className="max-w-2xl">
        <div className="p-5">
        <form className="">
          <div className="flex justify-evenly">
            <div className="flex gap-2">
              <input type="radio" id="cubicMeter"></input>
              <label for="cubicMeter">Cubic Meter</label>
            </div>
            <div className="flex gap-2">
              <input type="radio" id="cubicFeet"></input>
              <label for="cubicFeet">Cubic Feet</label>
            </div>
          </div>
          <div className="flex flex-col gap-5 my-5 text-xl">
            <div className="flex justify-between">
              <label for="uom">Unit of Measurement</label>
              <select
                id="uom"
                name="uom"
                className="border-2 border-gray-500 px-5"
              >
                <option value="mm">mm</option>
                <option value="cm">cm</option>
                <option value="meter">meter</option>
              </select>
            </div>
            <div className="flex justify-between">
              <label for="len">Length</label>
              <input type="number" id="len" className="border-2 border-gray-500 px-5 focus:outline-none focus:ring focus:ring-red-200"></input>
            </div>
            <div className="flex justify-between">
              <label for="wid">Width</label>
              <input type="number" id="wid" className="border-2 border-gray-500 px-5 focus:outline-none focus:ring focus:ring-red-200"></input>
            </div>
            <div className="flex justify-between">
              <label for="height">Height</label>
              <input type="number" id="height" className="border-2 border-gray-500 px-5 focus:outline-none focus:ring focus:ring-red-200"></input>
            </div>
            <div className="flex justify-between">
              <label for="quantity">Quantity</label>
              <input type="number" id="quantity" min="1" onInput={onChange} className="border-2 border-gray-500 px-5 focus:outline-none focus:ring focus:ring-red-200"></input>
            </div>
          </div>
          <div>
            <div className="text-center text-2xl">
                <p>Result: <span className="text-red-600 font-bold">{cbm}</span></p>
            </div>
            <div>

            </div>
          </div>
        </form>
    </div>
    </div>
    
  );
};

export default CBM;
