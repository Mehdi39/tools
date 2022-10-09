import CBM from '../components/CBM'
import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <div className="container mx-auto flex justify-center">
      <div>
        <div>
          <NavBar/>
        </div>
        <h2 className="font-bold text-3xl text-blue-700 text-center my-5">Blue Ocean Freight System Ltd.</h2>
        <h3 className="text-center text-red-600 border-2 border-red-200">Under Development! Works only for CM</h3>
        <CBM/>
      </div>
    </div>
  )
}
