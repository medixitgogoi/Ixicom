import { TbDiscountCheckFilled } from "react-icons/tb";

const Deal = () => {
    return (
        <div className='h-max flex justify-center items-start sm:items-center sm:gap-1 bg-green-500 text-center font-medium text-xs sm:text-sm'>
            <TbDiscountCheckFilled className=" text-sm sm:text-lg"/>
            <p>Flash sale: upto 50% off. Hurry up! It's your day</p>
        </div>
    );
}

export default Deal;
