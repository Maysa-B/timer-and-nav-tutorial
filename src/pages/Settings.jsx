import { useContext } from "react";
import Header from "../components/Header";
import TimeContext from "../context/TimeContext";
import sounds from "../helpers/data";

const Settings = () => {
  const { setTik, setAlarm, changeAudio, setNumbers } = useContext(TimeContext);

  return (
    <>
      <Header isThereAClock={true} />
      <main className="flex font-epilogue flex-col justify-center items-center h-[88vh] text-dark-purple bg-soft-purple text-lg">
        <label className="flex items-center justify-between w-[350px] mb-5" htmlFor="select-alarm">
          <p className="font-semibold">Choose the timer's alarm</p>
          <select
            onChange={({ target }) => changeAudio(setAlarm, target.value)}
            id="select-alarm"
            className="p-1 rounded"
          >
            {sounds.alarm.map((tik) => (
              <option key={tik.name} value={tik.src}>{tik.name}</option>
            ))}
          </select>
        </label>
        <p className="font-semibold">Choose the clock's ticking</p>
        <div className="flex w-[350px] justify-between mb-5">
          <label className="flex items-center" htmlFor="analogic-tik">
            <p className="mr-2">Analogic</p>
            <input
              id="analogic-tik"
              type="radio"
              name="tiking"
              value={sounds.ticking.analogic}
              onChange={({ target }) => changeAudio(setTik, target.value)}
            />
          </label>
          <label className="flex items-center" htmlFor="digital-tik">
            <p className="mr-2">Digital</p>
            <input
              id="digital-tik"
              type="radio"
              name="tiking"
              value={sounds.ticking.digital}
              onChange={({ target }) => changeAudio(setTik, target.value)}
            />
          </label>
        </div>
        <p className="font-semibold text-center">Choose how many numbers the clock has</p>
        <div className="flex w-[350px] justify-between mb-5">
          <label className="flex items-center" htmlFor="four">
            <p className="mr-2">HH:MM:SS</p>
            <input
              id="four"
              type="radio"
              name="number"
              value="seconds"
              onChange={({ target }) => setNumbers(target.value)}
            />
          </label>
          <label className="flex items-center" htmlFor="six">
            <p className="mr-2">HH:MM</p>
            <input
              id="six"
              type="radio"
              name="number"
              value="minutes"
              onChange={({ target }) => setNumbers(target.value)}
            />
          </label>
        </div>
      </main>
    </>
  )
}

export default Settings;