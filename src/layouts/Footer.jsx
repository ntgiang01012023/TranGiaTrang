import { Link } from 'react-router-dom';

const Footer = () => {

    return (

        <section className="min-[300px]:w-[100%] bg-greenMain w-full h-auto py-[20px]">
            <div className="
                min-[300px]:w-[116%]
                sm:grid-cols-1
                md:grid-cols-2
                lg:grid-cols-4
                grid py-[20px] max-w-[1280px] h-auto px-[10px] mx-auto">
                
                <div className="
                    min-[300px]:py-[10px] min-[300px]:pl-[30px]
                    sm:flex sm:flex-col sm:items-center
                    md:flex md:flex-col md:items-start
                    lg:block
                    py-[30px] 
                ">
                    <div className="mb-3">
                        <Link to="/" className='flex items-center'>
                            <i className="min-[300px]:text-[0.8rem] text-[28px] text-white mr-1 fa-solid fa-circle-nodes"></i>
                            <h1 className='min-[300px]:text-[0.8rem] text-[28px] text-white font-bold'>ChuGiaTrang</h1>
                        </Link>  
                    </div>
                    
                    <div className="flex">
                        <i className="min-[300px]:text-[0.8rem] mr-3 w-[35px] h-[35px] flex justify-center items-center text-[1.2rem] text-textGray3 border-[1px] border-textGray3 rounded-[50%] fa-brands fa-facebook"></i>
                        <i className="min-[300px]:text-[0.8rem] mr-3 w-[35px] h-[35px] flex justify-center items-center text-[1.2rem] text-textGray3 border-[1px] border-textGray3 rounded-[50%] fa-brands fa-twitter"></i>
                        <i className="min-[300px]:text-[0.8rem] mr-3 w-[35px] h-[35px] flex justify-center items-center text-[1.2rem] text-textGray3 border-[1px] border-textGray3 rounded-[50%] fa-brands fa-youtube"></i>
                        <i className="min-[300px]:text-[0.8rem] mr-3 w-[35px] h-[35px] flex justify-center items-center text-[1.2rem] text-textGray3 border-[1px] border-textGray3 rounded-[50%] fa-brands fa-linkedin-in"></i>
                    </div>
                </div>
                <div className="
                    min-[300px]:py-[10px] min-[300px]:pl-[30px]
                    sm:flex sm:flex-col sm:items-center
                    md:flex md:flex-col md:items-start
                    lg:block
                    py-[30px]
                    ">
                    <div className="flex justify-start items-center text-white mb-[20px]">
                        <h2 className='min-[300px]:text-[0.8rem] text-[1.1rem] font-bold uppercase'>Thông tin</h2>
                    </div>                    
                    <div className="flex justify-start items-center text-white mb-[10px]">
                        <i className="min-[300px]:text-[0.8rem] mr-2 fa-solid fa-location-dot"></i>
                        <h3 className='min-[300px]:text-[0.8rem]'>Bắc Từ Liêm, Hà Nội</h3>
                    </div>
                    <div className="flex justify-start items-center text-white mb-[10px]">
                        <i className="min-[300px]:text-[0.8rem] mr-2 fa-solid fa-phone"></i>
                        <h3 className='min-[300px]:text-[0.8rem]'>0123 456 789</h3>
                    </div>
                    <div className="flex justify-start items-center text-white mb-[10px]">
                        <i className="min-[300px]:text-[0.8rem] mr-2 fa-solid fa-envelope"></i>
                        <h3 className='min-[300px]:text-[0.8rem]'>trangiatrang@gmail.com</h3>
                    </div>
                </div>
                <div className="
                    min-[300px]:py-[10px] min-[300px]:pl-[30px]
                    sm:flex sm:flex-col sm:items-center
                    md:flex md:flex-col md:items-start
                    lg:block
                    py-[30px]
                    ">
                    <div className="flex justify-start items-center text-white mb-[20px]">
                        <h2 className='min-[300px]:text-[0.8rem] marker:text-[1.1rem] font-bold uppercase'>Tất cả trang nổi bật</h2>
                    </div>                    
                    <div className="flex justify-start items-center text-white mb-[10px]">
                        <h3 className='min-[300px]:text-[0.8rem]'>Bản tin</h3>
                    </div>
                    <div className="flex justify-start items-center text-white mb-[10px]">
                        <h3 className='min-[300px]:text-[0.8rem]'>Giới thiệu</h3>
                    </div>
                    <div className="flex justify-start items-center text-white mb-[10px]">
                        <h3 className='min-[300px]:text-[0.8rem]'>Liên hệ</h3>
                    </div>
                    <div className="flex justify-start items-center text-white mb-[10px]">
                        <h3 className='min-[300px]:text-[0.8rem]'>Hỗ trợ</h3>
                    </div>
                </div>
                <div className="
                    min-[300px]:flex min-[300px]:flex-col min-[300px]:items-start min-[300px]:py-[10px] min-[300px]:pl-[30px]
                    sm:flex sm:flex-col sm:items-center
                    md:flex md:flex-col md:items-start
                    lg:block
                    py-[30px]
                    ">
                    <div className="flex justify-end items-center text-white mb-[20px]">
                        <h2 className='min-[300px]:text-[0.8rem] text-[1.1rem] font-bold uppercase'>Tính năng nổi bật</h2>
                    </div>                    
                    <div className="flex justify-end items-center text-white mb-[10px]">
                        <h3 className='min-[300px]:text-[0.8rem]'>Cho thuê và mua bán Bất động sản</h3>
                    </div>
                    <div className="flex justify-end items-center text-white mb-[10px]">
                        <h3 className='min-[300px]:text-[0.8rem]'>Cho thuê và mua bán Kho xưởng</h3>
                    </div>
                    <div className="flex justify-end items-center text-white mb-[10px]">
                        <h3 className='min-[300px]:text-[0.8rem]'>Mua bán Sắt thép</h3>
                    </div>
                    <div className="flex justify-end items-center text-white mb-[10px]">
                        <h3 className='min-[300px]:text-[0.8rem]'>Mua bán Nông sản sạch</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;