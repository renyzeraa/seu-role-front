import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { MiniCardEvent } from './mini-card-event'

interface EventData {
  tituloEvento: string
  banner: string
  location: string
  dataEvento: string
  id: string
}

interface CarpuselEventProps {
  title: string
  data: EventData[]
}

export function CarouselEvent({ data, title }: CarpuselEventProps) {
  return (
    <>
      <h1 className="text-3xl font-semibold">{title}</h1>
      <Carousel className="mx-12 my-2">
        <CarouselContent className="p-2">
          {data.map(({ banner, dataEvento, id, location, tituloEvento }) => (
            <CarouselItem key={id} className="basis-1/3" title="Acessar Evento">
              <MiniCardEvent
                tituloEvento={tituloEvento}
                banner={banner}
                location={location}
                dataEvento={dataEvento}
                id={id}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  )
}
