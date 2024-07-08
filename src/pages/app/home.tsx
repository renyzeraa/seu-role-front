import { Separator } from '@/components/ui/separator'
import { Helmet } from 'react-helmet-async'

export function Home() {
  return (
    <div>
      <Helmet title="Encontre aqui o evento que voçê deseja" />
      {/* <CarouselEvent title="Novidades"></CarouselEvent> */}
      <Separator className="my-6" />
      {/* <CarouselEvent title="Mais Buscados"></CarouselEvent> */}
      {/* <BigCardEvent></BigCardEvent> */}
      {/* <BigCarouselEvent title="Em destaque"></BigCarouselEvent> */}
    </div>
  )
}
