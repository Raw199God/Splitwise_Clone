import { useState } from "react"
import Addgroupmodal from "./Addgroupmodal";

export default function Addgroup() {
    const [addinggroup ,setaddinggroup] = useState(false) ;
    function loadaddgroup(){
        setaddinggroup(true) ;
    }
  return (
    <>
      <button className="addexpense" onClick={loadaddgroup}>Add group</button>
      {addinggroup && <Addgroupmodal addinggroup={addinggroup} setaddinggroup={setaddinggroup}/>}
    </>
  )
}
