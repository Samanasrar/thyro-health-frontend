import React from 'react'
import HomeHero from '../components/home/HomeHero'
import RootCauses from '../components/home/RootCauses'
import HolisticTreatment from '../components/home/HolisticTreatment'
import Symptoms from '../components/home/Symptoms'
import DifferentFunctionality from '../components/home/DifferentFunctionality'
import ExploreNow from '../components/home/ExploreNow'
import Contact from '../components/home/Contact'
import Footer from '../components/home/Footer'

const Home = () => {
  return (
    <>
    <HomeHero/>
    <RootCauses/>
    <HolisticTreatment/>
    <Symptoms/>
    <DifferentFunctionality/>
    <ExploreNow/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Home