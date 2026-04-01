import {useState, Suspense} from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import StatsSection from './components/stats/StatsSection'
import DigitalTools from './components/digitalTools/DigitalTools'
import Steps from './components/steps/Steps'
import Pricing from './components/pricing/Pricing'
import Workflow from './components/workflow/Workflow'
import Footer from './components/footer/Footer'
import Products from './components/product/Products'
import Carts from './components/cart/Carts'

const fetchProductsData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};
const productsPromise = fetchProductsData();

function App() {
   const [activeTab, setActiveTab] = useState("product");
  const [carts, setCarts] = useState([]);
  // console.log(carts);

  return (
    <>
    <Navbar carts={carts}></Navbar>
    <Banner></Banner>
    <StatsSection></StatsSection>
    <DigitalTools
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      carts={carts}
    ></DigitalTools>

      {activeTab === "product" ? (
        // <Suspense
        //   fallback={
        //     <div className="flex justify-center items-center h-[50vh]">
        //       <span className="loading loading-spinner text-primary"></span>
        //     </div>
        //   }
        // >
        //   <Products
        //     productsPromise={productsPromise}
        //     carts={carts}
        //     setCarts={setCarts}
        //   />
        // </Suspense>

    <Products
      productsPromise={productsPromise}
      carts={carts}
      setCarts={setCarts}
    ></Products>) : 
    (<Carts
    carts={carts} setCarts={setCarts} 
    ></Carts>
    )}

    <Steps></Steps>
    <Pricing></Pricing>
    <Workflow></Workflow>
    <Footer></Footer>
    </>
  )
}

export default App
