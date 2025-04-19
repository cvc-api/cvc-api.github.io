"use client"
// import { useState } from 'react'
// import { Typewriter } from 'react-simple-typewriter'
function WrittenComponent(){
    // const [blink, setBlink] = useState(false)
    // const turnOff = () =>{
    //     const timer = setTimeout(() => {
    //         setBlink(false)
    //       }, 2000); 
    //     clearTimeout(timer)
    // }
    return(
        <div className="mb-4 md:mb-24 text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-600">
            Supercharge your course hunt with real-time data.
        </div>
        // <div className='h-64'>
        //     <Typewriter
        //     words={['']}
        //     loop={false}
        //     cursor={blink}
        //     cursorStyle='|'
        //     typeSpeed={0}
        //     deleteSpeed={-1}
        //     delaySpeed={0}
        //     cursorBlinking = {blink}
        //     onLoopDone={turnOff}
        // />
        // </div>
    )
}
export {WrittenComponent}