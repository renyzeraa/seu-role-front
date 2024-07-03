interface InputTextProps extends React.ComponentProps<'input'> {
  icon?: React.ReactNode
}

export function InputText({ icon, ...props }: InputTextProps) {
  const hasIcon = !!icon

  return (
    <div className="relative flex items-center">
      {hasIcon && icon}
      <input
        type="text"
        className={
          'ml-3 w-96 rounded-md p-2 text-base font-medium text-gray-900 outline-none' +
          (hasIcon ? ' pl-9' : '')
        }
        {...props}
      />
    </div>
  )
}
