import { useState } from "react";
import logo from '../assets/images/icon.png'
import Button from '../components/Button';
import LinkComponent from "./LinkComponent";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="font-epilogue">
      <Button
          className="w-20"
          func={() => setIsOpen(!isOpen)}
          txt={<img alt="menu-burguer" src={logo} />}
        />
      <div className={isOpen ? "left-[0px] font-epilogue flex top-[12vh] animate-openmenu w-56 absolute flex-col bg-light-ocean p-12 h-[88vh]"
        : "animate-closemenu top-[12vh] left-[-224px] flex w-56 absolute flex-col bg-light-ocean p-12 h-[88vh]"}>
        <LinkComponent path={"/"} txt={"Home Page"} />
        <LinkComponent path={"/countdown"} txt={"Countdown"} />
        <LinkComponent path={"/timer"} txt={"Timer"} />
        <LinkComponent path={"/settings"} txt={"Settings"} />
        <LinkComponent path={"/about"} txt={"About"} />
      </div>
    </nav>
  )
}

export default Nav;