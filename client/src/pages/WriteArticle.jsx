import { Sparkles } from 'lucide-react'
import React from 'react'

const WriteArticle = () => {
  return (
    <div className='h-full overflow-y-scroll p-6 flex items-start flex-wrap
    gap-4 text-slate-700'>
      {/* left col */}
      <form className='w-full max-w-lg p-4 bg-white rounded-bg-border border-gray-200'>
        <div>
          <Sparkles className='w-6 text-[#4a7aff]' />
          <h1 className='text-xl font-semibold'>Article Configuration</h1>
        </div>
      </form>
      {/* right col */}
      <div>

      </div>
    </div>
  )
}

export default WriteArticle