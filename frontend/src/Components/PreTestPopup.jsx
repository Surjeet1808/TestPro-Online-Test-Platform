import React from 'react'
import { useNavigate } from 'react-router-dom'

const PreTestPopup = ({setExamindex,examindex,startExam,testdetails}) => {

    const navigate=useNavigate()
    const handelStart=()=>{
       startExam(examindex);
    }
    
  return (
          <div className='w-full h-full overflow-auto rounded bg-[#F3F3F4] px-10 flex flex-col justify-center gap-4'>
               <div className='bg-white rounded-lg px-10 py-5 mt-20'>
               <h1 className='text-xl font-semibold text-center pb-2'>Get Ready to Shine!</h1>
                    <h1 className='text-lg font-semibold'>Before You Begin</h1>
                    <ul className='list-disc gap-2 flex flex-col'>
                        <li>Stay Focused: This is your time to prove what you've learned. Find a quiet place where you can concentrate.</li>
                        <li>Manage Your Time: Test has a timer. Keep an eye on it, but don't rush—quality over speed!</li>
                        <li>Be Honest: Remember, this test is for your growth. Avoid distractions and focus on doing your best.</li>
                        <li>Use Your Resources Wisely: If you're stuck, think it through. Trust what you've studied!</li>
                    </ul>
               </div>
               <div className='flex justify-center gap-4'>
               <div className=' w-[39%] bg-white rounded-lg px-10 py-5'>
                    <h1 className='text-lg font-semibold'>Test Details:</h1>
                    <ul className='list-disc gap-2 flex flex-col'>
                        <li>Test: {testdetails.title}</li>
                        <li>Total Questions: {testdetails.ques}</li>
                        <li>Time Allotted: {testdetails.time}</li>
                        <li>Test Category: {testdetails.category}</li>
                    </ul>
               </div>
               <div className='w-[60%] bg-white rounded-lg px-10 py-5'>
                    <h1 className='text-lg font-semibold'>
                    Instructions:</h1>
                    <ul className='list-disc gap-2 flex flex-col'>
                        <li>Read Each Question Carefully: Make sure you understand what's being asked before answering.</li>
                        <li>Plan Your Time: Don't spend too long on any one question. Move on if you're unsure and come back later.</li>
                        <li>Stay Calm and Confident: You've got this! Take deep breaths if you feel stressed</li>
                    </ul>
               </div>
               </div>
                
        <div className='bg-white rounded-lg py-5'>
                <p className='text-center font-semibold text-lg pb-5'>Question Status Icons</p>  
           <div className='flex justify-around py-3'>
             <div className='flex gap-2'>
             <div className='h-5 w-5 rounded-full bg-white border-2 border-zinc-400'></div>
              <h1>Not Attemted</h1>
             </div>
             <div className='flex gap-2'>
                <div className='h-5 w-5 rounded-full bg-green-500'></div>
                <h1>Answered</h1>
             </div>
             <div className='flex gap-2'>
                <div className='h-5 w-5 rounded-full bg-blue-500'></div>
                <h1>Current Question</h1>
             </div>
              <div className='flex gap-2'>
                <div className='h-5 w-5 rounded-full bg-purple-500'></div>
                <h1>Marked For Review</h1>
              </div>
              <div className='flex gap-2'>
                  <div className='h-5 w-5 rounded-full bg-red-500 relative'></div>
                   <h1>Not Answered</h1>
               </div>
            </div>
        </div>

                <div className='flex justify-end mb-5'>
                <button className='px-4 py-1 rounded border-2 border-[#01b4dc] font-semibold mx-2'onClick={()=>{setExamindex()}}>Cancel</button>
                <button className='px-4 py-1 rounded bg-[#01b4dc] font-semibold text-zinc-100 mx-2' onClick={handelStart}>Start </button>
                </div>
          </div>
  )
}

export default PreTestPopup