import { projects } from '@/data'
import { div } from 'framer-motion/client'
import React from 'react'

const RecentProject = () => {
  return (
    <div className='py-20'>
        <h1 className='heading'>
            My most {' '}
            <span className='text-purple'>recent peojects</span>
        </h1>
        <div className='flex flex-wrap items-center justify-center p-4 gap-16 mt-10'>
            {projects.map((project) => (
                <div>
                    {project.title}
                </div>
            ))}

        </div>
    </div>
  )
}

export default RecentProject