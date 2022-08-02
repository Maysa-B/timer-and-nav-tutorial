import { useEffect, useState } from "react";
import sounds from "../helpers/data";
import TimeContext from "./TimeContext"

const Provider = ({ children, location: { pathname } }) => {
  const [clock, setClock] = useState('00:00:00');
  const [numbers, setNumbers] = useState('seconds');
  const [time, setTime] = useState({
    minutes: '00',
    seconds: '00',
  });
  const [isOn, setIsOn] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(true);
  const [isContinue, setIsContinue] = useState(false);
  const [isClear, setIsClear] = useState(false);
  const [playAlert, setPlayAlert] = useState(false);
  const [alarm, setAlarm] = useState(sounds.alarm[0].src);
  const [tiking, setTik] = useState(sounds.ticking.digital);
  const [day, setDay] = useState('Monday');
  const [currentPath, setCurrentPath] = useState('/');
  const ONE_SECOND = 1000;

  const alarmSound = new Audio(alarm);
  const tictac = new Audio(tiking);

  const findDay = () => {
    const numberDay = new Date().getDay();
    let newDay = '';
    if (numberDay === 0) newDay = 'Sunday';
    if (numberDay === 1) newDay = 'Monday';
    if (numberDay === 2) newDay = 'Tuesday';
    if (numberDay === 3) newDay = 'Wednesday';
    if (numberDay === 4) newDay = 'Thursday';
    if (numberDay === 5) newDay = 'Friday';
    if (numberDay === 6) newDay = 'Saturday';

    setDay(newDay);
  }

  if (playAlert) {
    alarmSound.play();
    setPlayAlert(false);
  }

  const formateNumber = (number) => number < 10 ? `0${number}` : number;

  const startClock = () => {
    setIsOn(true);
    setIsClear(false);
  }
  const pauseClock = () => {
    setIsClear(true);
    setIsContinue(true);
    setIsOn(false);
  }

  const stopClock = () => {
    setIsContinue(false);
    setTime({ minutes: '00', seconds: '00' });
    setIsOn(false);
  }

  const handleInputNumber = (operation) => {
    let value = 0;
    if (operation === 'add') {
      value = Number(time.minutes) + 1;
    } else {
      if (Number(time.minutes) !== 0) {
        value = Number(time.minutes) - 1;
      }
    }

    value = formateNumber(value);

    setTime({ ...time, minutes: value })
  }

  useEffect(() => {
    const changecountdown = () => {
      if (time.minutes === '00' && time.seconds === '00') {
        stopClock();
        setPlayAlert(true);
      } else if (time.seconds === '00') {
        setTime({ minutes: formateNumber(Number(time.minutes) - 1), seconds: '59' })
      } else {
        setTime({ ...time, seconds: formateNumber(Number(time.seconds) - 1) })
      }
    }

    const changetimer = () => {
      if (time.seconds === '59') {
        setTime({ minutes: formateNumber(Number(time.minutes) + 1), seconds: '00' })
      } else {
        setTime({ ...time, seconds: formateNumber(Number(time.seconds) + 1) })
      }
    }

    setTimeout(() => {
      if (isOn) {
        if (pathname === '/timer') {
          changetimer();
        } else {
          changecountdown();
        }
      }
    }, ONE_SECOND);

  }, [time, isOn, pathname]);

  useEffect(() => {
    setCurrentPath(pathname)
  }, [pathname])

  useEffect(() => {
    setTime({ minutes: '00', seconds: '00', })
  }, [pathname])

  useEffect(() => {
    const atualizeClock = () => setTimeout(() => {
      const horario = new Date().toLocaleTimeString();
      const split = horario.split(':');
      if (numbers === 'seconds') {
        setClock(horario);
      } else {
        setClock(`${split[0]}:${split[1]}`);
      }
    }, ONE_SECOND);
    atualizeClock();
    findDay();
  }, [clock, numbers]);

  useEffect(() => {
    if (pathname === '/' && isSoundOn) tictac.play();
  });

  const changeAudio = (func, soundPath) => {
    const audio = new Audio(soundPath);
    audio.play();
    func(soundPath);
  }

  const contextValue = {
    clock,
    setTik,
    setAlarm,
    changeAudio,
    isOn,
    time,
    handleInputNumber,
    startClock,
    pauseClock,
    stopClock,
    isContinue,
    setNumbers,
    day,
    isClear,
    isSoundOn,
    setIsSoundOn,
    currentPath
  }

  return (
    <TimeContext.Provider value={contextValue}>
      {children}
    </TimeContext.Provider>
  )
}

export default Provider;