import { Link } from 'react-router-dom';

const Most = () => {

    return (
        <section className="bg-textGray3 w-full h-auto py-[20px]">
            <div className="flex flex-col py-[20px] max-w-[1280px] h-auto px-[10px] mx-auto">
                <div className="
                    sm:grid-cols-1
                    md:grid-cols-2
                    lg:grid-cols-2
                    grid gap-8">
                                <div className="
                        sm:w-full sm:h-auto
                        md:h-[200px]
                        lg:w-full lg:h-auto 
                        flex bg-white rounded-[4px] shadow hover:shadow-md">
                        <div className="
                            sm:w-[50%]
                            md:w-[40%]
                            lg:w-[50%] lg:h-full
                            flex flex-col justify-center items-start p-4">
                            <h3 className='md:text-[1.1rem]
                                lg:text-[1.5rem]
                                text-left text-black uppercase font-normal'>Cho thuê và mua bán</h3>
                            <h4 className='md:text-[1.2rem]
                                lg:text-[1.6rem]
                                text-left text-greenMain uppercase font-semibold mb-[20px]'>Bất động sản</h4>
                            <Link to="" className='md:text-[0.9rem]
                                lg:text-[1.1rem]
                                text-textBlack1 hover:text-greenMain hover:font-medium hover:scale-105 ease duration-300'>Xem chi tiết<i className="ml-[8px] fa-regular fa-circle-right"></i></Link>
                        </div>
                        <div className="
                            sm:w-[50%] sm:h-[200px]
                            md:w-[60%] md:h-[200px]
                            lg:w-[50%] lg:h-full">
                            <img className='w-full h-full cover' src="/public/bds3.png" alt="" />
                        </div>
                    </div>
                    <div className="
                        sm:w-full sm:h-auto
                        md:h-[200px]
                        lg:w-full lg:h-auto 
                        flex bg-white rounded-[4px] shadow hover:shadow-md">
                        <div className="
                            sm:w-[50%]
                            md:w-[40%]
                            lg:w-[50%] lg:h-full
                            flex flex-col justify-center items-start p-4">
                            <h3 className='
                                md:text-[1.1rem]
                                lg:text-[1.5rem]
                                text-left text-black uppercase font-normal'>Cho thuê và mua bán</h3>
                            <h4 className='
                                md:text-[1.2rem]
                                lg:text-[1.6rem]
                                text-left text-greenMain uppercase font-semibold mb-[20px]'>Kho xưởng</h4>
                            <Link to="" className='
                                md:text-[0.9rem]
                                lg:text-[1.1rem]
                                text-textBlack1 hover:text-greenMain hover:font-medium hover:scale-105 ease duration-300'>Xem chi tiết<i className="ml-[8px] fa-regular fa-circle-right"></i></Link>
                        </div>
                        <div className="
                            sm:w-[50%] sm:h-[200px]
                            md:w-[60%] md:h-[200px]
                            lg:w-[50%] lg:h-full">
                            <img className='w-full h-full cover' src="/public/ks2.jpg" alt="" />
                        </div>
                    </div>
            
                    <div className="md:h-[200px]
                        lg:w-full lg:h-auto 
                        flex bg-white rounded-[4px] shadow hover:shadow-md">
                        <div className="
                            sm:w-[50%]
                            md:w-[40%]
                            lg:w-[50%] lg:h-full
                            flex flex-col justify-center items-start p-4">
                            <h3 className='md:text-[1.1rem]
                                lg:text-[1.5rem]
                                text-left text-black uppercase font-normal'>Mua bán</h3>
                            <h4 className='md:text-[1.2rem]
                                lg:text-[1.6rem]
                                text-left text-greenMain uppercase font-semibold mb-[20px]'>Sắt thép</h4>
                            <Link to="" className='md:text-[0.9rem]
                                lg:text-[1.1rem]
                                text-textBlack1 hover:text-greenMain hover:font-medium hover:scale-105 ease duration-300'>Xem chi tiết<i className="ml-[8px] fa-regular fa-circle-right"></i></Link>
                        </div>
                        <div className="
                            sm:w-[50%] sm:h-[200px]
                            md:w-[60%] md:h-[200px]
                            lg:w-[50%] lg:h-full">
                            <img className='w-full h-full cover' src="/public/st2.webp" alt="" />
                        </div>
                    </div>
                    <div className="md:h-[200px]
                        lg:w-full lg:h-auto 
                        flex bg-white rounded-[4px] shadow hover:shadow-md">
                        <div className="
                            sm:w-[50%]
                            md:w-[40%]
                            lg:w-[50%] lg:h-full
                            flex flex-col justify-center items-start p-4">
                            <h3 className='md:text-[1.1rem]
                                lg:text-[1.5rem]
                                text-left text-black uppercase font-normal'>Mua bán</h3>
                            <h4 className='md:text-[1.2rem]
                                lg:text-[1.6rem]
                                text-left text-greenMain uppercase font-semibold mb-[20px]'>Sản phẩm nông nghiệp sạch</h4>
                            <Link to="" className='md:text-[0.9rem]
                                lg:text-[1.1rem]
                                text-textBlack1 hover:text-greenMain hover:font-medium hover:scale-105 ease duration-300'>Xem chi tiết<i className="ml-[8px] fa-regular fa-circle-right"></i></Link>
                        </div>
                        <div className="
                            sm:w-[50%] sm:h-[200px]
                            md:w-[60%] md:h-[200px]
                            lg:w-[50%] lg:h-full">
                            <img className='w-full h-full cover' src="/public/ns3.jpeg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Most;