import Button from "@/reusable/Button";

export default function Content(){
    return <div className='absolute left-[83px] top-[140px] flex gap-10 flex-col'>
        <div className='flex gap-1 flex-col'>
                    <span className='text-[56px] font-bold text-white'>
                        Excellence. Precision. Quality.
                    </span>
            <span className='text-[18px]  text-white'>
                        Ferrocrete Builders is a commercial and structural concrete contracting company composed of builders and engineers who have been providing construction services all over California for over two decades. We provide a comprehensive set of construction services, custom-tailored to meet each client’s unique needs, and ensure our proactive approach leads to a successful project from start to finish.
                    </span>
        </div>
        <div className='flex gap-6'>
            <Button/>
            <Button btnName='View Projects' className='bg-transparent border border-white'/>
        </div>
    </div>
}