import dynamic from 'next/dynamic'



const Map = dynamic(() => import('components/Map'),{ ssr: false })

export default function Home() {
  return <Map places={[
    {
      id: '1',
      name: 'Maricá',
      slug: 'marica',
      location: {
        latitude: -22.9164733,
        longitude: -42.8311508
      }
    }
  ]} />
}
