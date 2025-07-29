// import { Button } from "@/components/ui/button"
// import { ChevronRight } from "lucide-react"

// export default function ViewAllBatchesButton() {
//   return (
//     <Button
//       variant="secondary"
//       className="bg-purple-100 hover:bg-purple-200 text-purple-600 hover:text-purple-700 font-medium px-9 py-6 rounded-lg transition-colors duration-200 text-[17px]"
//     >
//       <span className="">
//       View All Batches
//       <ChevronRight className="h-4 w-4" />
//       </span>
//     </Button>
//   )
// }
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function ViewAllBatchesButton() {
  return (
    <Button
      variant="secondary"
      className="inline-flex items-center bg-purple-100 hover:bg-purple-200 text-purple-600 hover:text-purple-700 font-medium px-9 py-6 rounded-lg transition-colors duration-200 text-[17px]"
    >
      <span className="ml-5">View All Batches</span>
      <ChevronRight className="h-6 w-6 mr-5"/>
    </Button>
  )
}