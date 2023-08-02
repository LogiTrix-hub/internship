interface Props {
  placeholder: string;
  label?: string;
}

export const BaseInput: React.FC<Props> = ({
  label,
  placeholder
}) => {
  return (
    <div>
      {label && <h6>{label}</h6>}
      <input id="test-input" type="text" placeholder={placeholder} />
    </div>
  )
}