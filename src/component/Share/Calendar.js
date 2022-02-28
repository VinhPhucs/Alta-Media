import React, { useState} from 'react'
import { Calendar, Button } from 'antd'
import { FiCalendar } from 'react-icons/fi'
import '../../assets/css/calendar.css'

const PickCalendar = () => {
    const [ isShowCalendar, setIsShowCalendar ] = useState(false)
    const date = new Date()
    const hanldeShowCalendar = () => {
        setIsShowCalendar(!isShowCalendar)
      }
      const onPannelChange = (value, mode) => {
        console.log(value, mode)
      }
  return (
    <div className="calendar">
          <p className="date-now">{`Tháng ${date.getMonth() + 1}, ${date.getFullYear()}`}</p>
          {isShowCalendar ? 
          <Calendar fullscreen={false} onPanelChange={onPannelChange} /> : ""}
          <Button onClick={hanldeShowCalendar} >
            <FiCalendar className="icon__calendar" />
          </Button>
    </div>
  )
}

export default PickCalendar