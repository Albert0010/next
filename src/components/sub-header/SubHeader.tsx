import Content from "@/components/sub-header/Content";

export default function SubHeader() {
    return (
        <aside className='relative'>
            <div className='w-full h-[785px]'>
                <img src='/icons/background-banner.png'/>
            </div>
            <Content/>
        </aside>
    );
}
