import { FileText, Sparkles } from 'lucide-react';
import React, { useState } from 'react'

const ReviewResume = () => {
  const [_input, setInput] = useState('')
  const onSubmitHandler = async (e) => {
    e.preventDefault();
  }
  return (
    <div className='h-full overflow-y-scroll p-6 flex items-start flex-wrap
    gap-4 text-slate-700'>
      {/* left col */}
      <form onSubmit={onSubmitHandler} className='w-full max-w-lg p-4 bg-white rounded-bg-border border-gray-200'>
        <div>
          
          <Sparkles className='w-5 text-[#00da83]' />
          <h1 className='text-lg font-semibold'> Resume Review</h1>
        </div>
        <p className='mt-5 text-sm font-medium'>Upload Resume</p>
        <input onChange={(e) => setInput(e.target.files[0])} type='file' accept='application/pdf' 
        className='w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 text-gray-600' required/>
         <p className='text-xs text-gray-500 font-light mt-1'>Supports PDF format only</p>
         <button className='w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#00da83] to-[#009bb3]
         text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer'>
          <FileText className='w-4' />
          Review Resume
         </button>
      </form>
      {/* right col */}
      <div className='w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 max-h-[600px]'>
        <div className='flex items-center gap-2'>
          <FileText className='w-5 h-5 text-[#00da83]' />
          <h2 className='text-lg font-semibold'>Analysis Results</h2>
        </div>
        <div className='flex-1 flex justify-center items-center'>
          <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
            <FileText className='w-5 h-5' />
            <p>Start by uploading a resume and clicking on "Review Resume"</p>
          </div>
        </div>   
      </div>
    </div>
  )
}

export default ReviewResume