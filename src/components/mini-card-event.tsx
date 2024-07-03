import { Link } from 'react-router-dom'

interface MiniCardEventProps {
  title: string
  data: string
  location: string
  banner: string
  id: string
}

export function MiniCardEvent({
  title,
  data,
  location,
  banner,
  id,
}: MiniCardEventProps) {
  return (
    <Link to={`/evento/${id}`}>
      <div className="flex flex-col rounded-md border border-muted hover:shadow-md hover:shadow-primary/30 hover:transition-shadow">
        <img
          src={banner}
          alt="banner do evento"
          className="h-[155px] max-h-full w-[270px] max-w-full rounded-t-md object-center"
        />
        <div className="flex flex-col p-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <span className="w-full text-sm font-semibold text-primary">
            {data}
          </span>
          <span className="mt-0.5 text-sm">{location}</span>
        </div>
      </div>
    </Link>
  )
}
