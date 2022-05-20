import { useEffect, useState } from 'react'
import { Popover } from '@headlessui/react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { usePopper } from 'react-popper'

const yearsPanelVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
}

const monthName = (date) => {
  return new Intl.DateTimeFormat('es-AR', { month: 'long' })
    .format(date)
    .replace(/^\w/, (firstLetter) => firstLetter.toUpperCase())
}

const monthsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

const yearsArray = () => {
  const currentYear = Number(new Date().getFullYear())
  let yearsArr = []
  let yearToAdd = currentYear
  while (yearToAdd > currentYear - monthsArray.length) {
    yearsArr.push(yearToAdd)
    yearToAdd--
  }
  return yearsArr
}

export default function MonthPicker({ date }) {
  const [dateValue, setDateValue] = useState(new Date(date))
  const [yearsPanelOpen, setYearsPanelOpen] = useState(false)
  const [yearValue, setYearValue] = useState(Number(dateValue.getFullYear()))
  const router = useRouter()
  const [referenceElement, setReferenceElement] = useState()
  const [popperElement, setPopperElement] = useState()
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'bottom',
  })

  useEffect(() => {
    setDateValue(new Date(date))
  }, [date])

  const setDateAndRefresh = (month) => {
    const newDate = new Date(yearValue, month + 1, 0)
    router.push({
      pathname: '/blog',
      query: { date: newDate.toISOString().substring(0, 10) },
    })
    setDateValue(newDate)
  }

  return (
    <Popover>
      <Popover.Button
        ref={setReferenceElement}
        className='flex flex-row px-4 py-2 bg-yellow-500 rounded-sm shadow-md text-neutral-100 bg-opacity-20 hover:bg-opacity-60'
      >
        <p className='text-base font-semibold tracking-wide'>{`${monthName(
          dateValue
        )} ${dateValue.getFullYear()}`}</p>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-6 h-6 ml-5'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
          />
        </svg>
      </Popover.Button>

      <Popover.Panel
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
        className='z-10 opacity-90'
      >
        {({ close }) => (
          <motion.div
            animate={{ y: 5, opacity: [0, 0.2, 1] }}
            transition={{ duration: 0.15, ease: 'easeInOut' }}
            className='flex flex-col justify-center px-1 mt-3 text-base font-semibold text-white bg-gray-800 border rounded-lg shadow-md border-zinc-900 w-60 md:w-96'
          >
            <div className='flex flex-row items-center pt-5 pl-8'>
              <p>{`${monthName(dateValue)} ${dateValue.getFullYear()}`}</p>
              <motion.div
                className='flex justify-center ml-3 rounded-full hover:bg-gray-700 active:bg-gray-500'
                onClick={() => {
                  setYearsPanelOpen(!yearsPanelOpen)
                }}
                animate={yearsPanelOpen ? 'open' : 'closed'}
                variants={yearsPanelVariants}
                transition={{ duration: 0.12 }}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-8 h-8'
                  fill='none'
                  viewBox='-2 -3 28 28'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
              </motion.div>
            </div>
            {!yearsPanelOpen ? (
              <div className='grid grid-cols-3 gap-8 py-5 pl-2 pr-8 mt-1 text-center md:pl-3 md:grid-cols-4'>
                {monthsArray.map((month, index) => (
                  <div
                    key={index}
                    className={`p-2 w-16 md:w-20 hover:bg-yellow-500 hover:bg-opacity-30 bg-opacity-80 rounded-2xl cursor-pointer ${
                      month === dateValue.getMonth() ? 'bg-yellow-500' : ''
                    }`}
                    onClick={(e) => {
                      setDateAndRefresh(month)
                      close()
                    }}
                  >
                    {monthName(new Date(2020, month, 1)).substring(0, 3)}
                  </div>
                ))}
              </div>
            ) : (
              <div className='grid grid-cols-3 gap-8 py-5 pl-2 pr-8 mt-1 text-center md:pl-3 md:grid-cols-4'>
                {yearsArray().map((year, index) => (
                  <div
                    key={index}
                    className={`p-2 w-16 md:w-20 hover:bg-yellow-500 hover:bg-opacity-30 rounded-2xl bg-opacity-80 cursor-pointer ${
                      year === Number(yearValue) ? 'bg-yellow-500' : ''
                    }`}
                    onClick={() => {
                      setYearValue(Number(year))
                    }}
                  >
                    {year}
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </Popover.Panel>
    </Popover>
  )
}
