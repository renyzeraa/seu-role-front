'use client'

import * as React from 'react'
import { addDays, format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import { ptBR } from 'date-fns/locale'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface DatePickerProps {
  handleCallback?: (date: Date | undefined) => void
  useSelect?: boolean
}

export function DatePicker({
  handleCallback,
  useSelect = false,
}: DatePickerProps) {
  const [date, setDate] = React.useState<Date>()

  function handleDate(value: Date | undefined) {
    handleCallback && handleCallback(value)
    setDate(value)
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-[280px] justify-start text-left font-normal',
            !date && 'text-muted-foreground',
          )}
        >
          <CalendarIcon className="mr-2 size-6 pr-1" />
          {date ? (
            format(date, 'PPP', { locale: ptBR })
          ) : (
            <span>Selecione uma data</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex w-auto flex-col space-y-2 p-2">
        {useSelect && (
          <Select
            onValueChange={(value) =>
              setDate(addDays(new Date(), parseInt(value)))
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Irá acontecer ..." />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="0">Hoje</SelectItem>
              <SelectItem value="1">Amanhã</SelectItem>
              <SelectItem value="3">Daqui 3 dias</SelectItem>
              <SelectItem value="7">Daqui uma semana</SelectItem>
            </SelectContent>
          </Select>
        )}
        <div className={cn('rounded-md', useSelect && 'border')}>
          <Calendar
            mode="single"
            lang="pt-BR"
            selected={date}
            onSelect={handleDate}
            locale={ptBR}
          />
        </div>
      </PopoverContent>
    </Popover>
  )
}
