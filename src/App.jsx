import {} from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import StatsSection from './components/stats/StatsSection'
import DigitalTools from './components/digitalTools/DigitalTools'
import Steps from './components/steps/Steps'
import Pricing from './components/pricing/Pricing'
import Workflow from './components/workflow/Workflow'

function App() {

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <StatsSection></StatsSection>
    <DigitalTools></DigitalTools>
    <Steps></Steps>
    <Pricing></Pricing>
    <Workflow></Workflow>
    </>
  )
}

export default App
