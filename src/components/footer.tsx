import { FaSquareFacebook } from "react-icons/fa6";
import Link from "next/link";
import { IoLogoLinkedin } from "react-icons/io5";


const Footer=()=>{
    return(
    <footer className="text-white bg-gray-800 body-font">
        <div className="container px-3 py-3 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            
            <span className="ml-3 text-3xl text-white font-semibold">Blog</span>
          </a>
          <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 SaraAtif
        </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link href={"https://www.facebook.com/"} target="blank" className="text-white">
            <FaSquareFacebook className="text-4xl hover:text-teal-800" />
            </Link>

            <Link href={"https://www.linkedin.com/in/sara-atif-636852316/"} target="blank" className="text-white">
      <IoLogoLinkedin className="text-4xl hover:text-teal-800 ml-2"/>
      </Link>
      
            
            
            
          </span>
        </div>
      </footer>
      
        

      

    )
}
export default Footer;