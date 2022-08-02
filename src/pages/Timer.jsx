import { useContext } from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import TimeContext from "../context/TimeContext";

const Timer = () => {
  const {
    time,
    startClock,
    isContinue,
    stopClock,
    pauseClock,
    isClear,
  } = useContext(TimeContext);

  return (
    <>
      <Header isThereAClock={true} />
      <main className="flex font-epilogue flex-col justify-center items-center h-[88vh] text-dark-purple bg-soft-purple">
        <span className="text-8xl md:text-9xl font-semibold bg-light-ocean p-4 md:p-8 rounded-3xl">{`${time.minutes}:${time.seconds}`}</span>
        <div className="flex items-center justify-around md:justify-between w-96 mt-16">
          <Button
            className="text-4xl font-semibold bg-green-ocean text-light-ocean p-4 md:p-8 rounded-3xl"
            func={startClock}
            txt={isContinue ? 'Continue' : 'Start'}
          />
          <Button
            className="text-4xl font-semibold bg-green-ocean text-light-ocean p-4 md:p-8 rounded-3xl"
            func={isClear ? stopClock : pauseClock}
            txt={isClear ? 'Clear' : 'Pause'}
          />
        </div>
      </main>
    </>
  )

}

export default Timer;