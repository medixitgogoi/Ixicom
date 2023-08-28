import { HiOutlineMail } from "react-icons/hi";

const Newsletter = () => {
    return (
        <main className="lg:mx-5 rounded-md bg-[url('/newsletter-bg-mb.jpg')] lg:bg-[url('/newsletter-bg.jpg')] bg-cover bg-center lg:bg-right-top">
            <div className='flex flex-col items-center lg:items-end justify-center text-center gap-1 lg:gap-0 px-7 py-12 lg:px-5'>
                <h1 className='text-xl leading-5 mb-2 lg:mb-0 lg:leading-normal md:text-3xl text-black font-bold'>Subscribe to our newsletter to get updates to our latest collections</h1>
                <h3 className='opacity-70 leading-4 md:text-lg lg:leading-normal text-base'>Get 20% off on your first order by just subscribing to our newsletter</h3>
                <div className='flex gap-2 my-6 relative'>
                    <HiOutlineMail className="absolute top-1/4 lg:top-[26%] left-3 opacity-50 text-2xl" />
                    <input className='bg-slate-300 text-black outline-none font-semibold rounded-md pl-10 md:pl-[43px] md:pr-28 py-3' type="text" placeholder="Enter your email ..." />
                    <button className='bg-black font-semibold text-white rounded-md px-3'>Subscribe</button>
                </div>
                <h3 className='opacity-50 leading-4 md:text-lg md:leading-4 font-bold'>We promise we won't spam you</h3>
                <h3 className='opacity-50 leading-4 md:text-lg font-bold'>You will be able to unsubscribe at any time</h3>
            </div>
        </main>
    );
}

export default Newsletter;
