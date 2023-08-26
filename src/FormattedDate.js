import React, { useState, useEffect } from "react";

export default function FormattedDate(props) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()]; // Use 'date' from state
  let hours = date.getHours(); // Use 'date' from state

  let dayNumber = date.getDate(); // Use 'date' from state
  let year = date.getFullYear(); // Use 'date' from state

  let months = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let monthName = months[date.getMonth()]; // Use 'date' from state

  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes(); // Use 'date' from state

  const militaryTo12HClock = (hour, minute) => {
    if (hour >= 0 && hour <= 11) {
      return `${hour}:${adjustMinutes(minute)} am`;
    } else if (hour === 12) {
      return `${hour}:${adjustMinutes(minute)} pm`;
    } else {
      return `${hour - 12}:${adjustMinutes(minute)} pm`;
    }
  };

  const adjustMinutes = (minute) => {
    if (minute < 10) {
      return "0" + minute;
    } else {
      return minute;
    }
  };

  return (
    <div>
      Today is {day}, {monthName} {dayNumber} {year} -{" "}
      {militaryTo12HClock(hours, minutes)}
    </div>
  );
}
