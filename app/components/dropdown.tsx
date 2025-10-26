import Link from "next/link";


const dropDownItems = {
    '/dashboard': {
        name: 'dashboard'
    },
    '/chess': {
    name: 'chess',
    },
    '/reading': {
    name: 'reading',
    },
}



export function Dropdown() {
    return(
        <div className="relative inline-block group font-[Futura]">
            <button className="px-4 py-2 hover:bg-neutral-800/60 rounded-md">
                <span className="underline">more</span><span> </span> <span className="text-xs"> ▼ </span>
            </button>
            <div className="absolute left-0 mt-0 hidden group-hover:block shadow-lg rounded border z-50 backdrop-blur-md bg-neutral-800/60">
                <div className="flex flex-col">
                    {Object.entries(dropDownItems).map(([path, { name }]) => (
                            <Link
                            key={path}
                            href={path}
                            className="px-4 py-2 hover:bg-neutral-800/60 whitespace-nowrap"
                            >
                            {name}
                            </Link>
                    )
                    )}
                </div>
            </div>
        </div>
    )
}