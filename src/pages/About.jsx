import Header from "../components/Header";
import meImg from '../assets/images/me-bitmoji.png'

const About = () => {
  return (
    <>
      <Header isThereAClock={true} />
      <main className="flex font-epilogue flex-col justify-center items-center h-[88vh] text-dark-purple bg-soft-purple">
        <h1 className="text-2xl text-custom-yellow font-semibold p-4 rounded-3xl mb-7">
          Produced by
          {' '}
          <span className="text-2xl font-semibold bg-custom-yellow p-4 rounded-3xl text-dark-purple">Maysa-B</span>
        </h1>
        <div className="sm:flex sm:flex-col md:flex-row justify-around items-center">
          <article className="flex flex-col items-center w-80">
            <p className="text-justify">I am a fullstack dev student at Trybe. For the past months, I've been learning about CSS, HTML, JavaScript, Redux and React. Since I'm about to finish the front-end module, I produced a personal project to learn how to use Tailwind CSS.</p>
            <span className="text-xl font-semibold p-4 rounded-3xl">Contact me!</span>
            <div className="flex justify-around items-center">
              <a href="mailto:maybsalvalaio@gmail.com">
                <img alt="logo-mail" src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" />
              </a>
              <a href="https://www.linkedin.com/in/maysa-b-salvalaio" rel="noreferrer" target="_blank">
                <img alt="logo-linkedin" src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
              </a>
              <a href="https://github.com/Maysa-B" rel="noreferrer" target="_blank">
                <img alt="logo-git" src="https://img.shields.io/badge/-GitHub-311c39?style=for-the-badge&logo=Github&logoColor=ffffff&" /></a>
            </div>
          </article>
          <img className="w-56" src={meImg} alt="me-bitmoji" />
        </div>
      </main>
    </>
  )
}

export default About;