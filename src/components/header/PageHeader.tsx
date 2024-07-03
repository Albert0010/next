import MainLogo from "~/logos/main-logo.svg";
import NavBar from "@/components/header/NavBar";
import Button from "@/reusable/Button";

export default function PageHeader() {
    return (
        <main className="bg-black py-[36.5px] px-[86px] flex justify-between items-center">
            <div className="h-max">
                <MainLogo/>
            </div>
            <NavBar/>
            <Button classNameBtn='text-white'/>
        </main>
    );
}
