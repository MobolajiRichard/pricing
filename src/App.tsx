
import './App.css'
import Table from './components/Table'

function App() {

  return (
<div className='flex flex-col items-center bg-[#f2f2f2] py-[2%] md:px-[10%] min-h-screen w-full overflow-y-auto overflow-x-hidden'>
  <p className='text-center text-5xl font-fira'>Transparent pricing</p>
  <p className='text-center md:w-[46%] font-source mb-[50px] mt-[10px] px-[10%] md:px-0'>On the “Regular” plan you will get the maximum savings,
on "Plus" there will be an opportunity to reschedule and cancel lessons,
and on "Flexi" you will be accompanied by a mentor.</p>
<Table/>
</div>
  )
}

export default App
