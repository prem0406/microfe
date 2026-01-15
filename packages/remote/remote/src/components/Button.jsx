import { useShareContext } from "../myProvider";

export default function Button({ label }) {
  const { count, increment } = useShareContext();
  const buttonLabel = label || "Default label";

  return <button onClick={increment}>{`${buttonLabel}: ${count}`}</button>;
}
