export default function Button({text="Follow"}){
    return (
        <button className="bg-slate-400 w-fit h-fit p-2 rounded-md self-center hover:bg-slate-500">{text}</button>
    )
}