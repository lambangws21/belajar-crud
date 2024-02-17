import { PlusIcon } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"

const ButtonCreate = () => {
  return (
    <Button className="  text-white hover:bg-slate-400 bg-slate-700">
        <Link href="/contacts/create"  className="inline-flex items-center space-x-1">
            <PlusIcon size={20}/>Create
        </Link>
    </Button>
  )
}

export default ButtonCreate