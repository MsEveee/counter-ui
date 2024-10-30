import { useState } from "react"


const Counter = () => {
    const [number, setNumber] = useState(0)

    function handleClick() {
        if (number < 100) {
            setNumber(number + 1)
        }

    }

    function handleDecrease() {
        if (number > 0) {
            setNumber(number - 1)
        }

    }

    function handleReset() {
        setNumber(0)
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen m-0 bg-blue-400  ">

            <div className="flex flex-col gap-10 border rounded-lg h-72 w-80 items-center py-10 bg-white">
                <h2 className="text-4xl font-bold">Counter</h2>
                <p className="text-5xl text-green-500 font-semibold">{number}</p>


                <div className="flex gap-5 text-white">
                    <button className="border w-14 bg-lime-400 text-2xl rounded-lg" onClick={handleDecrease}>-</button>
                    <button className="border w-14 bg-lime-400 rounded-lg" onClick={handleReset}>Reset</button>
                    <button className="border w-14 bg-lime-400 text-2xl rounded-lg" onClick={handleClick}>+</button>
                </div>
            </div>
        </div>
    )
}

export default Counter