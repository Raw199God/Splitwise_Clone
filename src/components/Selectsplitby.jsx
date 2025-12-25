import { useContext } from "react";
import { splitbycontext } from "../contexts/modifyingexpensecontext";

export default function Selectsplitby({email}) {
  const [splitby, setsplitby] = useContext(splitbycontext);
  return (
    <button
      className={splitby[email] ? "bg-blue-300 w-3/5 h-15  rounded-2xl" : "bg-fuchsia-300 w-3/5 h-15 selected rounded-2xl"}
      onClick={() => {
            setsplitby((inp) => { return  {...inp,[email]:!inp[email]}} );
      }}
    >
      {email}
    </button>
  );
}
