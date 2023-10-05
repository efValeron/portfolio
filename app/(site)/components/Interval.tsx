"use effect"

import {useEffect, useState} from "react";
import {Card, CardHeader, Divider, CardBody} from "@nextui-org/react";
import {motion} from "framer-motion";

export const Interval = () => {
  const [time, setTime] = useState<number[]>([]);

  const [totalYears, totalDays, totalHours, totalMinutes, totalSeconds] = time


  const START_DATE = 1689835980 * 1000  // Jul 20 2023 09:53:00 GMT+03 -- must be 13 digits


  useEffect(() => {
    const interval = setInterval(() => {
      const millisecondsDifference = new Date().getTime() - START_DATE

      let totalSeconds = Math.floor(millisecondsDifference / 1000)
      let totalMinutes = Math.floor(totalSeconds / 60)
      let totalHours = Math.floor(totalMinutes / 60)
      let totalDays = Math.floor(totalHours / 24)
      const totalYears = Math.floor(totalDays / 365)
      // const totalYears = 12  // hard coded for testing

      totalSeconds %= 60
      totalMinutes %= 60
      totalHours %= 24
      totalDays %= 365

      if (isLeapYear(new Date().getFullYear())) {
        totalDays++; // increment if leap year
      }

      setTime([totalYears, totalDays, totalHours, totalMinutes, totalSeconds])
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const isLeapYear = (year: number) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }

  // const cardWidth = totalYears > 0 ? "w-1/5" : "w-1/4"

  return (
    <motion.section
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 1, delay: 1.25, ease: "backOut"}}
      className={`grid grid-cols-2 ${totalYears > 0 ? "lg:grid-cols-3" : "lg:flex"} md:max-lg:flex 2xl:flex gap-2 w-full`}>
      {
        totalYears > 0 &&
        <IntervalCard key="years" gridLayout="col-span-2" title="Years" value={totalYears}/>
      }
      <IntervalCard key="days" title="Days" value={totalDays}/>
      <IntervalCard key="hours" title="Hours" value={totalHours}/>
      <IntervalCard key="minutes" title="Minutes" value={totalMinutes}/>
      <IntervalCard key="seconds" title="Seconds" value={totalSeconds}/>
    </motion.section>
  )
}

const IntervalCard = ({title, value, gridLayout}: {
  title: string,
  value: number,
  gridLayout?: string
}) => {
  return (
    // lg:${width}
    <Card className={`w-full ${gridLayout ? gridLayout : ""}`}>
      <CardHeader
        className={`text-sm md:text-medium flex justify-center ${title === "Years" ? "font-bold tracking-wide" : ""}`}>
        {title}
      </CardHeader>
      <Divider/>
      <CardBody
        // default is flex-col
        className={`text-center p-3 md:p-5 text-lg md:text-2xl ${title === "Years" ? "text-gradient font-extrabold" : "font-bold"}`}
      >
        {value}
      </CardBody>
    </Card>
  )
}