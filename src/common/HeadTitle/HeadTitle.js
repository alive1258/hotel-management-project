import React from "react"
import "./HeadTitle.css"
import { useLocation, Link } from "react-router-dom"

const HeadTitle = () => {
  const location = useLocation()

  return (
    <>
      <section className='image-heading bg-center -z-10 h-1/3 relative bg-cover bg-no-repeat text-white'>
        <div className='container flex justify-between items-center text-center'>
          {/*<h1>{location.pathname.slice(1, -2, -1)}</h1>*/}
          <h1 className="text-2xl capitalize">{location.pathname.split("/")[1]}</h1>
          {/*<h1>{location.pathname.replace(/ /, "")}</h1>*/}

          <button >
            <Link className="text-[#31b675] cursor-pointer" to='/'> Home / </Link>
            <span className="capitalize tracking-wider">{location.pathname.split("/")[1]}</span>
            {/*<span>{location.pathname.replace("/", " ")}</span>*/}
          </button>
        </div>
      </section>
    </>
  )
}

export default HeadTitle
