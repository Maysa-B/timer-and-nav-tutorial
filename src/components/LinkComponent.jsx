import { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom"

const LinkComponent = ({ path, txt }) => {
  const pathname = useRouteMatch();
  const [isCurrent, setIsCurent] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    setCurrentPath(pathname.path)
  }, [pathname])


  useEffect(() => {
    const changeIsCurrent = () => {
      if (currentPath === path) {
        setIsCurent(true);
      } else {
        setIsCurent(false);
      }
    }

    changeIsCurrent();
  }, [currentPath, path])

  return (
    <Link
      className={isCurrent ? (
        "mb-3 text-dark-purple font-bold bg-soft-purple p-2 text-center rounded-2xl"
      ): (
          "mb-3 text-dark-purple hover:font-bold p-2 text-center"
        )}
      to={path}
    >
      {txt}
    </Link>
  )
}

export default LinkComponent;