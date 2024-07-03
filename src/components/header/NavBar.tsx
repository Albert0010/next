import {NAVBAR_ITEMS} from "@/components/header/constants";

export default function NavBar() {
    return (
        <nav className="flex gap-[33px] ">
            {NAVBAR_ITEMS.map(({name,icon},idx)=><div key={idx} className="flex gap-2.5 h-max">
                <span className="text-white">
                    {name}
                </span>
                {icon}
            </div>)}
        </nav>
    );
}
