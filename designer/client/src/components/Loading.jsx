import { ImSpinner10 } from "react-icons/im";

export const Loading = () => {
  return (
    <div className="fixed inset-0 bg-yellow-600/50 flex justify-center items-center z-50 gap-x-0.5">
        <ImSpinner10 className="text-3xl text-white animate-spin"/>
        <p className="text-white text-base">loding...</p>  
    </div>
  )
}
