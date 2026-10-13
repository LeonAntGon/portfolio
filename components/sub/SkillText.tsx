"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import {useTranslations} from 'next-intl';

const SkillText = () => {
  const t = useTranslations('SkillText');

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[10px] border border-[#7042f88b] opacity-[0.9]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h2 className="Welcome-text text-[13px]">
          {t('title')}
        </h2>
      </motion.div>
      <motion.h2
        variants={slideInFromLeft(0.5)}
        className='text-[34px] md:text-[42px] font-semibold mt-[18px] text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 leading-tight'
      >
        {t('description')}
      </motion.h2>
      <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive text-[20px] text-gray-200 mb-4 mt-[10px] text-center'
      >
        {t('cursive')}
      </motion.div>
    </div>
  )
}

export default SkillText
