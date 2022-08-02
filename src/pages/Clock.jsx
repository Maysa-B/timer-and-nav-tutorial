import { useContext } from "react";
import Header from "../components/Header";
import TimeContext from "../context/TimeContext";
import soundOn from "../assets/images/volume-free-icon-font.png";
import soundOff from "../assets/images/volume-off-free-icon-font .png";
import Button from "../components/Button";

const Clock = () => {
  const { clock, isSoundOn, setIsSoundOn } = useContext(TimeContext);

  return (
    <>
      <Header />
      <main className="flex font-epilogue flex-col justify-center items-center h-[88vh] text-dark-purple bg-soft-purple">
        <p className="text-7xl md:text-9xl font-semibold bg-custom-yellow p-4 md:p-8 rounded-3xl">{clock}</p>
        <Button
          className="mt-10"
          func={() => setIsSoundOn(!isSoundOn)}
          txt={isSoundOn ? <img className="w-9" src={soundOn} alt="sound-on" /> : <img className="w-9" src={soundOff} alt="sound-off" />}
        />
      </main>
    </>
  )
}

export default Clock;