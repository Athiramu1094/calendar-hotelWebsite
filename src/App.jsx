import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './App.css'



function App() {
  const[selectedDate, setSelectedDate] = useState("")
  const [showCalendar, setshowCalendar] = useState(false)
  const [showCalendar2, setshowCalendar2]= useState(false)
  const[clickedcheckoutDate, setclickedcheckoutDate] = useState("")


  function onClick(value){
    const myDate = String(value.toLocaleDateString('en-US' , { weekday: 'short', day: 'numeric', month: 'long' }).replace(',' , '')
  )
    setSelectedDate(myDate)
    console.log(value.toLocaleDateString())
}

  function onClick2(value){
    const myDate2 = String(value.toLocaleDateString('en-US' , { weekday: 'short', day: 'numeric', month: 'long' }).replace(',' , ''))
    setclickedcheckoutDate(myDate2)
  }  
    

    function toggleCalendar(){
      setshowCalendar(!showCalendar)
}

    function toggleCalendar2(){
      setshowCalendar2(!showCalendar2)
    }

    function checkinDate(){
    const currentDate = new Date()
    return currentDate.toLocaleDateString('en-US' , { weekday: 'short', day: 'numeric', month: 'long' }).replace(',' , '')
  }

  function checkoutDate(){
    const currentDate = new Date()
    currentDate.setDate(currentDate.getDate()+1)
    console.log(currentDate)
    return currentDate.toLocaleDateString('en-US' , { weekday: 'short', day: 'numeric', month: 'long' }).replace(',' , '')
    
  }



return (
    <>
    <div className='container'>
      <div className='checkin-container'>
      <span>Check-In Date</span>
      <button onClick={toggleCalendar}>{selectedDate? selectedDate:checkinDate()} <span class="material-symbols-outlined">
calendar_month
</span></button>
      {showCalendar && (<Calendar
            onClickDay={onClick}
          />)}
      </div>
      <div
      className='checkout-container'>
      <span>Check-Out Date</span>
      <button onClick={toggleCalendar2}>{clickedcheckoutDate? clickedcheckoutDate:checkoutDate()} <span class="material-symbols-outlined">
calendar_month
</span></button>
      {showCalendar2 && (<Calendar
            onClickDay={onClick2}
          />)}
      </div>
      
</div>

    </>
  )
}

export default App

