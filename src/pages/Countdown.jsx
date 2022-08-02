import { useContext } from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import TimeContext from "../context/TimeContext";

const Countdown = () => {
  const {
    isOn,
    time,
    handleInputNumber,
    startClock,
    pauseClock,
    stopClock,
    isContinue,
    isClear,
  } = useContext(TimeContext);

  return (
    <>
      <Header isThereAClock={true} />
      <main className="flex font-epilogue flex-col justify-center items-center h-[88vh] text-dark-purple bg-soft-purple">
        <div className="w-full md:w-3/4 flex justify-around md:justify-between items-center">
          <Button
            className="text-2xl md:text-4xl font-semibold text-light-ocean bg-green-ocean p-3 md:p-8 rounded-3xl"
            isDisabled={isOn}
            func={() => handleInputNumber('add')}
            txt="+"
          />
          <span className="text-8xl md:text-9xl font-semibold bg-light-ocean p-4 md:p-8 rounded-3xl">{`${time.minutes}:${time.seconds}`}</span>
          <Button
            className="text-2xl md:text-4xl font-semibold text-light-ocean bg-green-ocean p-3 md:p-8 rounded-3xl"
            isDisabled={isOn}
            func={() => handleInputNumber('remove')}
            txt="-"
          />
        </div>
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

export default Countdown;