import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { MiniCardEvent } from './mini-card-event'

interface CarpuselEventProps {
  title: string
  data?: any
}

export function CarouselEvent({ title }: CarpuselEventProps) {
  return (
    <>
      <h1 className="text-3xl font-semibold">{title}</h1>
      <Carousel className="mx-12 my-2">
        <CarouselContent className="p-2">
          <CarouselItem className="basis-1/3">
            <MiniCardEvent
              title="Together We RISE"
              banner="../../temp/banner-exemplo.jpeg"
              key="text-1"
              location=" Avenida Governador Jorge Lacerda, Nº 2900 - Balneario Camboriu"
              data="SAB, 06 Julho - 15:30"
              id="a9dasjda99wjdaw0-a-das-da"
            />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <MiniCardEvent
              title="Together We RISE"
              banner="../../temp/banner-exemplo.jpeg"
              key="text-1"
              location=" Avenida Governador Jorge Lacerda, Nº 2900 - Balneario Camboriu"
              data="SAB, 06 Julho - 15:30"
              id="a9dasjda99wjdaw0-a-das-da"
            />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <MiniCardEvent
              title="Together We RISE"
              banner="../../temp/banner-exemplo.jpeg"
              key="text-1"
              location=" Avenida Governador Jorge Lacerda, Nº 2900 - Balneario Camboriu"
              data="SAB, 06 Julho - 15:30"
              id="a9dasjda99wjdaw0-a-das-da"
            />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <MiniCardEvent
              title="Together We RISE"
              banner="../../temp/banner-exemplo.jpeg"
              key="text-1"
              location=" Avenida Governador Jorge Lacerda, Nº 2900 - Balneario Camboriu"
              data="SAB, 06 Julho - 15:30"
              id="a9dasjda99wjdaw0-a-das-da"
            />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <MiniCardEvent
              title="Together We RISE"
              banner="../../temp/banner-exemplo.jpeg"
              key="text-1"
              location=" Avenida Governador Jorge Lacerda, Nº 2900 - Balneario Camboriu"
              data="SAB, 06 Julho - 15:30"
              id="a9dasjda99wjdaw0-a-das-da"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  )
}
