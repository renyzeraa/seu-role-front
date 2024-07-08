import { MiniEventData } from '@/@types/global'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import { Button } from './ui/button'
import { Calendar, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

interface BigCarouselEventProps {
  title: string
  data: MiniEventData[]
}

export function BigCarouselEvent({ data, title }: BigCarouselEventProps) {
  return (
    <>
      <h1 className="text-3xl font-semibold">{title}</h1>
      <Carousel className="my-1">
        <CarouselContent className="p-2">
          {data.map((data) => (
            <CarouselItem key={data.id}>
              <div className="grid grid-cols-[1fr_240px] rounded-lg bg-slate-200 dark:bg-gray-900">
                <img
                  className="h-full w-full rounded-l-lg object-contain"
                  src={data.banner}
                  alt="Banner do evento"
                />
                <div className="relative flex flex-col gap-2 p-4">
                  <h2
                    className="text-3xl font-bold uppercase"
                    title="Data do Evento"
                  >
                    {data.tituloEvento}
                  </h2>
                  <span
                    className="mt-2 flex w-full items-center text-lg font-bold text-primary"
                    title="Data do Evento"
                  >
                    <Calendar size={24} className="mr-1" />
                    {data.dataEvento}
                  </span>
                  <span
                    className="mt-2 flex w-full items-center text-base font-bold"
                    title="Local do Evento"
                  >
                    <MapPin size={24} className="mr-1" />
                    {data.location}
                  </span>
                  <footer className="absolute bottom-4 left-4">
                    <Link to={`/evento/${data.id}`}>
                      <Button title="Acessar mais detalhes sobre o evento">
                        Mais detalhes
                      </Button>
                    </Link>
                  </footer>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  )
}
