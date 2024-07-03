import {CARDS} from "@/components/main/constants";
import Button from "@/reusable/Button";

export default function Cards() {
    return (
            <div className='flex gap-[54px] h-[654px]'>
                    {CARDS.map(({image,title,content}) => <div className='rounded-[24px] px-[32px] py-[56px] flex flex-col border border-black' key={content}>
                        <div className="flex justify-center">
                            {image}
                        </div>
                        <span className='text-[28px] font-bold'>{title}</span>
                        <span className='text-[18px]'>{content}</span>
                        <Button classNameBtn='text-white' btnName='Learn more' className=' border border-black rounded-[18px]'/>
                    </div>)}
            </div>
    );
}
