import {IButtonProps} from "@/types";

export default function Button({btnName = "Get in Touch",className, classNameBtn}:IButtonProps){
    return <div className='bg-white border rounded-[30px] px-[6px] py-[18px]'>
        <span className={classNameBtn ? classNameBtn : `text-black `}>
            {btnName}
        </span>
    </div>
}