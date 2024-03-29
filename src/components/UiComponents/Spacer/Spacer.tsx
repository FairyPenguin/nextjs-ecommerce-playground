interface Props {
  space: number;
}

export default function Spacer({ space }: Props) {
  return <div className={`spacer${space}`}></div>;
}
