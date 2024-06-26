interface InputTextProps extends React.ComponentProps<'input'> {
  icon?: React.ReactNode;
}

export function InputText({ icon, ...props }: InputTextProps) {
  const hasIcon = !!icon;

  return (
    <div className="flex items-center relative">
      {hasIcon && icon}
      <input
        type="text"
        className={"ml-3 p-2 rounded-md text-gray-900 outline-none text-base w-96 font-medium" + (hasIcon ? " pl-9" : "")}
        {...props}
      />
    </div>
  )
}