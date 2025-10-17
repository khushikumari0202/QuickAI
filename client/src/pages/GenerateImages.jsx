import { Image, Sparkles } from 'lucide-react'
import React, {useState} from 'react'

const GenerateImages = () => {

  const imageStyle = [
      'Realistic', '3D Render', 'Cartoon', 'Pixel Art', 'Line Art', 'Isometric', 'Vector Art', 'Low Poly', 'Flat Design'
    ]

    const [selectedStyle, setSelectedStyle] = useState('Realistic')
    const [input, setInput] = useState('')
    const [publish, setPublish] = useState(false)

    const onSubmitHandler = async (e) => {
      e.preventDefault();
    }

  return (
    <div className='h-full overflow-y-scroll p-6 flex items-start flex-wrap
    gap-4 text-slate-700'>
      {/* left col */}
      <form onSubmit={onSubmitHandler} className='w-full max-w-lg p-4 bg-white rounded-bg-border border-gray-200'>
        <div>
          <Sparkles className='w-5 text-[#00ad25]' />
          <h1 className='text-lg font-semibold'>AI Image Generator</h1>
        </div>
        <p className='mt-5 text-sm font-medium'>Describe your image</p>
        <textarea onChange={(e) => setInput(e.target.value)} value={input} rows={4} className='w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300'
         placeholder='Describe what you want to see in the image' required/>
         <p className='mt-4 text-sm font-medium'>Style</p>
         <div className='mt-3 flex gap-3 flex-wrap sm:max-w-9/11'>
          {imageStyle.map((item) => (
            <span onClick={() => setSelectedStyle(item)} className={`text-xs px-4 py-1 border rounded-full cursor-pointer
               ${selectedStyle === item ? 'bg-green-50 text-green-700' : 'text-gray-500 border-gray-300'}`} key={item}>{item}</span>
          ))}
         </div>
         <div className='my-6 flex items-center gap-2'>
           <label className='relative cursor-pointer'>
            <input type='checkbox' onChange={(e) => setPublish(e.target.checked)} checked={publish} className='sr-only peer' />
            <div className='w-9 h-5 bg-slate-300 rounded-full peer-checked:bg-green-500 transition'></div>
            <span className='absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition peer-checked:translate-x-4'></span>
           </label>
           <p className='text-sm'>Publish this image publically</p>
         </div>
         
         <button className='w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#00ad25] to-[#04ff50] text-white px-4 py-2 mt-6 text-sm
         rounded-lg cursor-pointer'>
          <Image className='w-4' />
          Generate Image
         </button>
      </form>
      {/* right col */}
      <div className='w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 '>
        <div className='flex items-center gap-2'>
          <Image className='w-5 h-5 text-[#00ad25]' />
          <h2 className='text-lg font-semibold'>Generated Images</h2>
        </div>
        <div className='flex-1 flex justify-center items-center'>
          <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
            <Image className='w-5 h-5' />
            <p>Start by entering a description and clicking on "Generate Image"</p>
          </div>
        </div>
          
      </div>
    </div>
  )
}

export default GenerateImages