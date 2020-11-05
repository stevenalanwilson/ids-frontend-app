import Link from 'next/link'
import Card from '../components/Card'

import { getAllServices, getAllSectors, getAllClients } from '../lib/api'

export default function Index({ allServices, allSectors, allClients }) {

  return (
    <>
     
    </>
  )
}


export async function getStaticProps() {
  const allServices = await getAllServices()
  const allSectors = await getAllSectors()
  const allClients = await getAllClients()
  return {
    props: { allServices, allSectors, allClients },
  }
}
