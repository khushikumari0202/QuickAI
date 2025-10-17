import { Scissors, Sparkles } from 'lucide-react'
import React, { useState } from 'react'

const RemoveObject = () => {
  const [_input, setInput] = useState('')
  const [object, setObject] = useState('')
  const onSubmitHandler = async (e) => {
    e.preventDefault();
  }
  return (
    <div className='h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700'>
      {/* left col */}
      <form onSubmit={onSubmitHandler} className='w-full max-w-lg p-4 bg-white rounded-bg-border border-gray-200'>
        <div>
          <Sparkles className='w-5 text-[#4a7aff]' />
          <h1 className='text-lg font-semibold'>Object Removal</h1>
        </div>
        <p className='mt-5 text-sm font-medium'>Upload Image</p>
        <input onChange={(e) => setInput(e.target.files[0])} type='file' accept='image/*' className='w-full p-2 px-3 mt-2 
        outline-none text-sm rounded-md border border-gray-300 text-gray-600' required/>

        <p className='mt-6 text-sm font-medium'>Describe your object to remove</p>
        <textarea onChange={(e) => setObject(e.target.value)} value={object} rows={4} className='w-full p-2 px-3 mt-2 
        outline-none text-sm rounded-md border border-gray-300'
        placeholder='e.g., watch or spoon, Only single object name' required/>
        
        <button className='w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#417df6] to-[#8e37eb] 
        text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer'>
          <Scissors className='w-4' />
          Remove Object
        </button>
      </form>
      {/* right col */}
      <div className='w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 '>
        <div className='flex items-center gap-2'>
          <Scissors className='w-5 h-5 text-[#4a7aff]' />
          <h2 className='text-lg font-semibold'>Processed Image</h2>
        </div>
        <div className='flex-1 flex justify-center items-center'>
          <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
            <Scissors className='w-5 h-5' />
            <p>Get Started by uploading an image and clicking on "Remove Object"</p>
          </div>
        </div>   
      </div>
    </div>
  )
}

export default RemoveObject