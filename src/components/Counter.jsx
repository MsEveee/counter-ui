import { Minus, Plus, RotateCcw } from "lucide-react"
import { useState } from "react"


const Counter = () => {
    const [number, setNumber] = useState(0)
    const [count, setCount] = useState("Start Count");
    

    function handleClick() {
        if (number < 100) {
            setNumber(number + 1)
            setCount('Adding Count')
        } else setCount("Cannot exceed 100");

    }

    function handleDecrease() {
        if (number > 0) {
            setNumber(number - 1)
            setCount("Reducing Count")
        } else setCount("Limit acheived");

    }

    function handleReset() {
        setNumber(0)
        setCount("Start Count");
    }



    

    return (
        <div className="flex flex-col items-center justify-center min-h-screen m-0 bg-white ">

            <div className="flex flex-col gap-10  shadow-2xl rounded-lg h-72 w-[500px] items-center py-14 bg-white">
                <h2 className="text-3xl font-bold  text-blue-400">{count}</h2>
                <p className="text-3xl font-semibold border rounded-lg w-24 pl-8">{number}</p>


                <div className="flex gap-5 text-white">
                    <button className="border w-14 bg-red-500 text-2xl rounded-lg pl-3 h-8" onClick={handleDecrease}><Minus/></button>
                    <button className="border w-14 bg-[#FCDC94] rounded-lg pl-3 h-8" onClick={handleReset}><RotateCcw/></button>
                    <button className="border w-14 bg-lime-400 text-2xl rounded-lg pl-3 h-8" onClick={handleClick}><Plus/></button>
                </div>
            </div>
        </div>
    )
}

export default Counter