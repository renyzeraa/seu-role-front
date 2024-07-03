import { CarouselEvent } from '@/components/carousel-events'
import { Helmet } from 'react-helmet-async'

export function Home() {
  return (
    <div className="">
      <Helmet title="Encontre aqui o evento que voçê deseja" />
      <CarouselEvent></CarouselEvent>
    </div>
  )
}
