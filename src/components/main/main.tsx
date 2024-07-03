import Cards from "@/components/main/cards";

export default function Main() {
    return (
        <main className='py-[95px] px-[86px] flex flex-col gap-[33px] items-center'>
            <div>
                <h1 className='text-black text-[36px] font-bold'>Our Expertise</h1>
            </div>
            <div>
                <span className='text-[18px] font-normal'>
                Explore our expertise in Design Build, Structural Concrete, and Pre-Construction, where we bring exceptional skill and precision to every phase of your project.
                </span>
            </div>
            <Cards/>
        </main>
    );
}
