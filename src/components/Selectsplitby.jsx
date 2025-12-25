import { useContext } from "react";
import { splitbycontext } from "../contexts/modifyingexpensecontext";

export default function Selectsplitby({email}) {
  const [splitby, setsplitby] = useContext(splitbycontext);
  return (
    <button
      className={splitby[email] ? "bg-amber-500 w-1/1" : "bg-amber-500 w-1/1 selected"}
      onClick={() => {
            setsplitby((inp) => { return  {...inp,[email]:!inp[email]}} );
      }}
    >
      {email}
    </button>
  );
}
