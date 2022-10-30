import {FaRegUser} from "react-icons/fa"
import {MdLockOutline} from "react-icons/md"
import image from "./img/anpr7glow.png"
function App() {
  return (
    <div className="min-h-screen bg-sky-900">
      <div className="container flex flex-col justify-center items-center gap-4 p-4 md:flex-row ">
          <form className="flex flex-col gap-4 rounded-lg bg-sky-800 text-white p-8 w-full md:basis-1/2 lg:basis-1/3">
            <h1 className="text-4xl">خودنگار</h1>
              <h3 className="lg:text-xl mb-8">سامانه هوشمند تشخیص پلاک</h3>
              <h3 className="text-2xl">ورود</h3>
              <div className="w-full border-2 border-blue-400 rounded-lg flex items-center gap-3 px-3 py-2">
                <FaRegUser size={20}/>
                  <input type="text" placeholder="نام کاربری" className="w-full placeholder:text-white bg-transparent outline-0"/>
              </div>
              <div className="w-full border-2 border-blue-400 rounded-lg flex items-center gap-3 px-3 py-2">
                  <MdLockOutline size={25}/>
                  <input type="text" placeholder="رمز عبور" className="w-full placeholder:text-white bg-transparent outline-0"/>
              </div>
              <div className="flex items-center gap-4 mb-4">
                  <input type="checkbox" className="check border-2 border-blue-400"/>
                  <p>مرا به خاطر بسپار</p>
              </div>
              <button className="bg-blue-400 rounded-lg py-2 text-xl transition-all duration-300 hover:bg-blue-300">ورود</button>
          </form>
          <div className="md:basis-1/2 lg:basis-2/3 flex justify-center items-center">
              <img src={image} alt="image" className="lg:max-w-lg md:max-w-md object-cover"/>
          </div>
      </div>
        <div className="flex flex-col justify-center items-center gap-2 text-white">
            <p className="text-xl">هوش داده مهتاب</p>
            <p className="text-lg">www.datamoon.ir</p>
        </div>
    </div>
  );
}

export default App;
