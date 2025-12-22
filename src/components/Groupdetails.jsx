import { useParams } from "react-router"

export default function Groupdetails({id}) {
    const params = useParams() ; 
  return (
    <div>groupdetails {params.gid}</div>
  )
}
