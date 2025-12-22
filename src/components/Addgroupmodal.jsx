import { createPortal } from "react-dom";
import Addgroupform from "./Addgroupform";
export default function Addgroupmodal({ addinggroup, setaddinggroup }) {
  function closeaddingroupmodal(e) {
    setaddinggroup(false);
  }
  return createPortal(
    <div id="modal-root" onClick={closeaddingroupmodal}>
      <div
        className="addexpensemodalbox"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <header>
          Add group<button onClick={closeaddingroupmodal}>Close</button>
        </header>
        <Addgroupform/>
      </div>
    </div>,
    document.body
  );
}
