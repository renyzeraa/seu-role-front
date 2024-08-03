import { DatePicker } from '@/components/date-picker'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { MapComponent } from '@/components/ui/location-marker'
import { Separator } from '@/components/ui/separator'
import { Editor } from '@/components/ui/tiny-editor'
import { Label } from '@radix-ui/react-dropdown-menu'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs'
import { LatLng } from 'leaflet'
import { CalendarPlus2 } from 'lucide-react'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'

interface CreateEventForm {
  titulo: string
  local: string
  data_inicio: string
  data_fim: string
  descricao: string
  banner: string
  latitude: string
  longitude: string
}

export function CreateEvent() {
  const [location, setLocation] = useState<LatLng | null>(null)
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<CreateEventForm>()

  function handleSendDadosSubmit(data: CreateEventForm) {
    data.latitude = String(location?.lat)
    data.longitude = String(location?.lng)
    console.log(data)
  }

  // function handleSendIngressosSubmit(data: CreateEventForm) {
  //   console.log(data)
  // }

  return (
    <div>
      <Helmet title="Criar Evento" />
      <h1 className="mb-1 text-3xl font-semibold">Criar Evento</h1>
      <Separator />
      <div className="my-8">
        <Tabs defaultValue="dados">
          <TabsList className="mb-4 grid w-full grid-cols-2 gap-x-2 rounded-md border bg-muted-foreground/20 p-1">
            <TabsTrigger
              value="dados"
              className="rounded-md border p-1.5 hover:border-muted-foreground/50 aria-[selected='true']:bg-muted"
            >
              Dados do Evento
            </TabsTrigger>
            <TabsTrigger
              value="ingressos"
              className="rounded-md border p-1.5 hover:border-muted-foreground/50 aria-[selected='true']:bg-muted"
            >
              Ingressos
            </TabsTrigger>
          </TabsList>
          <TabsContent value="dados">
            <Card>
              <CardHeader>
                <CardDescription>
                  Campos marcados com{' '}
                  <span className="font-bold text-red-600">*</span> é
                  obrigatório o preenchimento
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <form
                  className="flex flex-col gap-4"
                  action=""
                  onSubmit={handleSubmit(handleSendDadosSubmit)}
                >
                  <div className="max-w-[36rem] space-y-1">
                    <Label>Título</Label>
                    <Input
                      id="titulo"
                      required
                      placeholder="Título do evento"
                      {...register('titulo')}
                    />
                  </div>
                  <div className="flex gap-4">
                    <div className="space-y-1">
                      <Label>Data Início</Label>
                      <DatePicker
                        handleCallback={(date) =>
                          register('data_inicio', { value: String(date) })
                        }
                      />
                    </div>
                    <div className="space-y-1">
                      <Label>Data Fim</Label>
                      <DatePicker
                        handleCallback={(date) =>
                          register('data_fim', { value: String(date) })
                        }
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <Label>Localização</Label>
                    <CardDescription>
                      Para escolher a localização do evento, clique no mapa.
                    </CardDescription>
                    <MapComponent setLocation={setLocation} />
                  </div>
                  <div className="space-y-1">
                    <Label>Descrição</Label>
                    <Editor />
                  </div>
                  <Button
                    disabled={isSubmitting}
                    type="submit"
                    className="w-24"
                  >
                    <CalendarPlus2 size={24} className="mr-1" />
                    Criar
                  </Button>
                </form>
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="ingressos">
            <Card>
              <CardHeader>
                <CardDescription>
                  Campos marcados com{' '}
                  <span className="font-bold text-red-600">*</span> é
                  obrigatório o preenchimento
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2"></CardContent>
              <CardFooter>
                <Button>Salvar dados</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
