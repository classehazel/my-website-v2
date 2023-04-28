import React from 'react'
import MainSection from '../components/MainSection'
import MemCard from '../components/MemCard'
import PhotoCard from '../components/PhotoCard'
import Location from '../components/Location'
import ProgCard from '../components/ProgCard'
import { Divider } from '@mui/material'

const Home = () => {
  return (
    <>
        <MainSection />
        <MemCard />
        <Divider />
        <ProgCard />
        <PhotoCard />
        <Location />
    </>
  )
}

export default Home
