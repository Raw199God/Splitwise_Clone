import { createPortal } from "react-dom";
import Addexpenseform from "./AddExpenseform";
export default function AddExpensemodal({ addingexpense, setaddingexpense }) {
  function closeaddinexpensemodal(e) {
    setaddingexpense(false);
  }
  return createPortal(
    <div id="modal-root" onClick={closeaddinexpensemodal}>
      <Addexpenseform
        setaddingexpense={setaddingexpense}
        addingexpense={addingexpense}
      />
    </div>,
    document.body
  );
}
