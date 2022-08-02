import { useContext } from "react";
import TimeContext from "../context/TimeContext";
import Nav from './Nav';

const Header = ({ isThereAClock }) => {
  const { clock, day } = useContext(TimeContext);

  return (
    <header className="flex justify-between bg-light-ocean font-epilogue items-center h-[12vh]
    text-dark-purple font-medium text-lg">
      <Nav />
      <div className="flex flex-col items-end mr-2 text-center">
        <p>
          Have a good
          {' '}
          <span className="font-bold">{day}</span>
          !
        </p>
        {isThereAClock && <p className="bg-soft-purple rounded-2xl p-1 w-20">{clock}</p>}
      </div>
    </header >
  )
}

Header.defaultProps = {
  isThereAClock: false,
}

export default Header;