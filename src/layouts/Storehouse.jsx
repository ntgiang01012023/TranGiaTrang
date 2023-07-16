import { Link } from 'react-router-dom';

const Storehouse = () => {

    return (

        <section className="bg-white w-full h-auto py-[20px]">
            <div className="
                sm:grid-cols-2
                md:grid-cols-2
                lg:grid-cols-4
                grid py-[20px] max-w-[1280px] h-auto px-[10px] mx-auto ">
                
                <div className="
                    flex flex-col justify-center bg-greenMain px-[20px] py-[100px] border-[2px] border-greenMain">
                    <h3 className='text-left text-[1.7rem] text-white font-bold mb-[10px] uppercase'>Bất động sản</h3>
                    <p className='text-left text-[1rem] text-textGray3 font-normal mb-[35px]'>Cung cấp thông tin đầy đủ về giá cả, diện tích, vị trí và tiện ích của các bất động sản</p>
                    <div className="
                        
                        relative w-full h-[60px]">
                        <Link to="" className='
                            
                            absolute block px-[30px] py-[15px] border-[2px] border-white text-[1rem] text-white font-medium rounded-[4px] hover:bg-white hover:text-greenMain ease-in duration-300'>Xem tất cả</Link>
                    </div>
                </div>
                <div className="flex flex-col border-t-[1px] border-r-[1px] border-b-[1px] border-textGray2">
                    <div className="
                        h-[50%]
                        ">
                        <img className='w-full h-full' src="../../build/ch1.jpg" alt="" />
                    </div>
                    <div className="flex flex-grow flex-col justify-between text-left px-[10px] py-[20px]">
                        <div className="">
                        <span className='text-[0.8rem] text-red-500 font-bold bg-red-100 px-[10px] py-[3px] border-[3px] border-red-300 rounded-[20px]'>Sắp mở. Dự kiến: 20/07/2023</span>
                            <h4 className='text-textBlack text-[1rem] font-bold mt-[10px]'>Căn hộ cao cấp A</h4>
                            <h4 className='text-textBlack text-[1rem] font-normal'>Bắc Từ Liêm, Hà Nội</h4>
                            <h4 className='text-textBlack text-[1rem] font-normal'>100m²</h4>
                            <p className='text-greenMain text-[0.9rem] font-bold'>Giá: 3 tỷ</p>
                        </div>
                        <div className="relative w-full h-[60px]">
                            <Link to="" className='absolute bottom-0 left-0 text-[1rem] text-textBlack font-medium rounded-[4px] hover:text-greenMain ease-in duration-300'>Liên hệ<i className="ml-[8px] fa-regular fa-circle-right"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="
                    md:border-l-[1px]
                    lg:border-l-[0px]
                    flex flex-col border-t-[1px] border-r-[1px] border-b-[1px] border-textGray2">
                    <div className="
                        h-[50%]
                        ">
                        <img className='w-full h-full' src="../../build/ch2.jpg" alt="" />
                    </div>
                    <div className="flex flex-grow flex-col justify-between text-left px-[10px] py-[20px]">
                        <div className="">
                            <span className='text-[0.8rem] text-red-500 font-bold bg-red-100 px-[10px] py-[3px] border-[3px] border-red-300 rounded-[20px]'>Sắp mở. Dự kiến: 20/07/2023</span>
                            <h4 className='text-textBlack text-[1rem] font-bold mt-[10px]'>Căn hộ cao cấp A</h4>
                            <h4 className='text-textBlack text-[1rem] font-normal'>Bắc Từ Liêm, Hà Nội</h4>
                            <h4 className='text-textBlack text-[1rem] font-normal'>100m²</h4>
                            <p className='text-greenMain text-[0.9rem] font-bold'>Giá: 3 tỷ</p>
                        </div>
                        <div className="relative w-full h-[60px]">
                            <Link to="" className='absolute bottom-0 left-0 text-[1rem] text-textBlack font-medium rounded-[4px] hover:text-greenMain ease-in duration-300'>Liên hệ<i className="ml-[8px] fa-regular fa-circle-right"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col border-t-[1px] border-r-[1px] border-b-[1px] border-textGray2">
                    <div className="
                        h-[50%]
                        ">
                        <img className='w-full h-full' src="../../build/ch6.jpg" alt="" />
                    </div>
                    <div className="flex flex-grow flex-col justify-between text-left px-[10px] py-[20px]">
                        <div className="">
                            <span className='text-[0.8rem] text-green-500 font-bold bg-green-100 px-[10px] py-[3px] border-[3px] border-green-300 rounded-[20px]'>Đang mở</span>
                            <h4 className='text-textBlack text-[1rem] font-bold mt-[10px]'>Căn hộ cao cấp A</h4>
                            <h4 className='text-textBlack text-[1rem] font-normal'>Bắc Từ Liêm, Hà Nội</h4>
                            <h4 className='text-textBlack text-[1rem] font-normal'>100m²</h4>
                            <p className='text-greenMain text-[0.9rem] font-bold'>Giá: 3 tỷ</p>
                        </div>
                        <div className="relative w-full h-[60px]">
                            <Link to="" className='absolute bottom-0 left-0 text-[1rem] text-textBlack font-medium rounded-[4px] hover:text-greenMain ease-in duration-300'>Liên hệ<i className="ml-[8px] fa-regular fa-circle-right"></i></Link>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="
                sm:grid-cols-2
                md:grid-cols-2
                lg:grid-cols-4
                grid py-[20px] max-w-[1280px] h-auto px-[10px] mx-auto ">
                
                <div className="
                    flex flex-col justify-center bg-greenMain px-[20px] py-[100px] border-[2px] border-greenMain">
                    <h3 className='text-left text-[1.7rem] text-white font-bold mb-[10px] uppercase'>Kho xưởng lớn</h3>
                    <p className='text-left text-[1rem] text-textGray3 font-normal mb-[35px]'>Dịch vụ cho thuê kho xưởng cung cấp không gian lưu trữ và sản xuất chuyên nghiệp</p>
                    <div className="
                        
                        relative w-full h-[60px]">
                        <Link to="" className='
                            
                            absolute block px-[30px] py-[15px] border-[2px] border-white text-[1rem] text-white font-medium rounded-[4px] hover:bg-white hover:text-greenMain ease-in duration-300'>Xem tất cả</Link>
                    </div>
                </div>
                <div className="flex flex-col border-t-[1px] border-r-[1px] border-b-[1px] border-textGray2">
                    <div className="h-[50%]">
                        <img className='w-full h-full' src="../../build/ks1.jpg" alt="" />
                    </div>
                    <div className="flex flex-grow flex-col justify-between text-left px-[10px] py-[20px]">
                        <div className="">
                            <span className='text-[0.8rem] text-green-500 font-bold bg-green-100 px-[10px] py-[3px] border-[3px] border-green-300 rounded-[20px]'>Đang mở</span>
                            <h4 className='text-textBlack text-[1rem] font-bold mt-[10px]'>Kho xưởng lớn nhất A</h4>
                            <h4 className='text-textBlack text-[1rem] font-normal'>Bắc Từ Liêm, Hà Nội</h4>
                            <p className='text-greenMain text-[0.9rem] font-bold'>Giá thuê: 10.000.000 VNĐ/tháng</p>
                        </div>
                        <div className="relative w-full h-[60px]">
                            <Link to="" className='absolute bottom-0 left-0 text-[1rem] text-textBlack font-medium rounded-[4px] hover:text-greenMain ease-in duration-300'>Liên hệ<i className="ml-[8px] fa-regular fa-circle-right"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="
                    md:border-l-[1px]
                    lg:border-l-[0px]
                    flex flex-col border-t-[1px] border-r-[1px] border-b-[1px] border-textGray2">
                    <div className="h-[50%]">
                        <img className='w-full h-full' src="../../build/ks3.jpg" alt="" />
                    </div>
                    <div className="flex flex-grow flex-col justify-between text-left px-[10px] py-[20px]">
                        <div className="">
                            <span className='text-[0.8rem] text-red-500 font-bold bg-red-100 px-[10px] py-[3px] border-[3px] border-red-300 rounded-[20px]'>Sắp mở. Dự kiến: 20/07/2023</span>
                            <h4 className='text-textBlack text-[1rem] font-bold mt-[10px]'>Kho xưởng lớn nhất A</h4>
                            <h4 className='text-textBlack text-[1rem] font-normal'>Bắc Từ Liêm, Hà Nội</h4>
                            <p className='text-greenMain text-[0.9rem] font-bold'>Giá thuê: 10.000.000 VNĐ/tháng</p>
                        </div>
                        <div className="relative w-full h-[60px]">
                            <Link to="" className='absolute bottom-0 left-0 text-[1rem] text-textBlack font-medium rounded-[4px] hover:text-greenMain ease-in duration-300'>Liên hệ<i className="ml-[8px] fa-regular fa-circle-right"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col border-t-[1px] border-r-[1px] border-b-[1px] border-textGray2">
                    <div className="h-[50%]">
                        <img className='w-full h-full' src="../../build/ks2.jpg" alt="" />
                    </div>
                    <div className="flex flex-grow flex-col justify-between text-left px-[10px] py-[20px]">
                        <div className="">
                            <span className='text-[0.8rem] text-green-500 font-bold bg-green-100 px-[10px] py-[3px] border-[3px] border-green-300 rounded-[20px]'>Đang mở</span>
                            <h4 className='text-textBlack text-[1rem] font-bold mt-[10px]'>Kho xưởng lớn nhất A</h4>
                            <h4 className='text-textBlack text-[1rem] font-normal'>Bắc Từ Liêm, Hà Nội</h4>
                            <p className='text-greenMain text-[0.9rem] font-bold'>Giá thuê: 10.000.000 VNĐ/tháng</p>
                        </div>
                        <div className="relative w-full h-[60px]">
                            <Link to="" className='absolute bottom-0 left-0 text-[1rem] text-textBlack font-medium rounded-[4px] hover:text-greenMain ease-in duration-300'>Liên hệ<i className="ml-[8px] fa-regular fa-circle-right"></i></Link>
                        </div>
                    </div>
                </div>
                
            </div>         
            <div className="
                sm:grid-cols-2
                md:grid-cols-2
                lg:grid-cols-4
                grid py-[20px] max-w-[1280px] h-auto px-[10px] mx-auto ">
                
                <div className="
                    flex flex-col justify-center bg-greenMain px-[20px] py-[100px] border-[2px] border-greenMain">
                    <h3 className='text-left text-[1.7rem] text-white font-bold mb-[10px] uppercase'>Sắt thép</h3>
                    <p className='text-left text-[1rem] text-textGray3 font-normal mb-[35px]'>Dễ dàng tìm kiếm và mua sắm các vật liệu xây dựng chất lượng và đáng tin cậy cho các dự án</p>
                    <div className="
                        
                        relative w-full h-[60px]">
                        <Link to="" className='
                            
                            absolute block px-[30px] py-[15px] border-[2px] border-white text-[1rem] text-white font-medium rounded-[4px] hover:bg-white hover:text-greenMain ease-in duration-300'>Xem tất cả</Link>
                    </div>
                </div>
                <div className="flex flex-col border-t-[1px] border-r-[1px] border-b-[1px] border-textGray2">
                    <div className="h-[50%]">
                        <img className='w-full h-full' src="../../build/st3.jpg" alt="" />
                    </div>
                    <div className="flex flex-grow flex-col justify-between text-left px-[10px] py-[20px]">
                        <div className="">
                            <span className='text-[0.8rem] text-green-500 font-bold bg-green-100 px-[10px] py-[3px] border-[3px] border-green-300 rounded-[20px]'>Còn hàng</span>
                            <h4 className='text-textBlack text-[1rem] font-bold mt-[10px]'>Sắt thép cuộn xây dựng</h4>
                            <h4 className='text-textBlack text-[1rem] font-normal'>Bắc Từ Liêm, Hà Nội</h4>
                            <p className='text-greenMain text-[0.9rem] font-bold'>Giá: 18,6 triệu đồng/tấn</p>
                        </div>
                        <div className="relative w-full h-[60px]">
                            <Link to="" className='absolute bottom-0 left-0 text-[1rem] text-textBlack font-medium rounded-[4px] hover:text-greenMain ease-in duration-300'>Liên hệ<i className="ml-[8px] fa-regular fa-circle-right"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="
                    md:border-l-[1px]
                    lg:border-l-[0px]
                    flex flex-col border-t-[1px] border-r-[1px] border-b-[1px] border-textGray2">
                    <div className="h-[50%]">
                        <img className='w-full h-full' src="../../build/st4.jpg" alt="" />
                    </div>
                    <div className="flex flex-grow flex-col justify-between text-left px-[10px] py-[20px]">
                        <div className="">
                            <span className='text-[0.8rem] text-red-500 font-bold bg-red-100 px-[10px] py-[3px] border-[3px] border-red-300 rounded-[20px]'>Sắp về hàng</span>
                            <h4 className='text-textBlack text-[1rem] font-bold mt-[10px]'>Sắt thép ống xây dựng</h4>
                            <h4 className='text-textBlack text-[1rem] font-normal'>Bắc Từ Liêm, Hà Nội</h4>
                            <p className='text-greenMain text-[0.9rem] font-bold'>Giá: 15,4 triệu đồng/tấn</p>
                        </div>
                        <div className="relative w-full h-[60px]">
                            <Link to="" className='absolute bottom-0 left-0 text-[1rem] text-textBlack font-medium rounded-[4px] hover:text-greenMain ease-in duration-300'>Liên hệ<i className="ml-[8px] fa-regular fa-circle-right"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col border-t-[1px] border-r-[1px] border-b-[1px] border-textGray2">
                    <div className="h-[50%]">
                        <img className='w-full h-full' src="../../build/st5.png" alt="" />
                    </div>
                    <div className="flex flex-grow flex-col justify-between text-left px-[10px] py-[20px]">
                        <div className="">
                            <span className='text-[0.8rem] text-green-500 font-bold bg-green-100 px-[10px] py-[3px] border-[3px] border-green-300 rounded-[20px]'>Còn hàng</span>
                            <h4 className='text-textBlack text-[1rem] font-bold mt-[10px]'>Sắt thép tấm xây dựng</h4>
                            <h4 className='text-textBlack text-[1rem] font-normal'>Bắc Từ Liêm, Hà Nội</h4>
                            <p className='text-greenMain text-[0.9rem] font-bold'>Giá: 18 triệu đồng/tấn</p>
                        </div>
                        <div className="relative w-full h-[60px]">
                            <Link to="" className='absolute bottom-0 left-0 text-[1rem] text-textBlack font-medium rounded-[4px] hover:text-greenMain ease-in duration-300'>Liên hệ<i className="ml-[8px] fa-regular fa-circle-right"></i></Link>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="
                sm:grid-cols-2
                md:grid-cols-2
                lg:grid-cols-4
                grid py-[20px] max-w-[1280px] h-auto px-[10px] mx-auto ">
                
                <div className="
                    flex flex-col justify-center bg-greenMain px-[20px] py-[100px] border-[2px] border-greenMain">
                    <h3 className='text-left text-[1.7rem] text-white font-bold mb-[10px] uppercase'>Nông sản sạch</h3>
                    <p className='text-left text-[1rem] text-textGray3 font-normal mb-[35px]'>Dễ dàng tìm kiếm và mua sắm những sản phẩm nông nghiệp an toàn và chất lượng cao cho sức khỏe và phong cách sống lành mạnh của họ.</p>
                    <div className="
                        
                        relative w-full h-[60px]">
                        <Link to="" className='
                            
                            absolute block px-[30px] py-[15px] border-[2px] border-white text-[1rem] text-white font-medium rounded-[4px] hover:bg-white hover:text-greenMain ease-in duration-300'>Xem tất cả</Link>
                    </div>
                </div>
                <div className="flex flex-col border-t-[1px] border-r-[1px] border-b-[1px] border-textGray2">
                    <div className="
                        h-[50%]
                        ">
                        <img className='w-full h-full' src="../../build/ns5.jpg" alt="" />
                    </div>
                    <div className="flex flex-grow flex-col justify-between text-left px-[10px] py-[20px]">
                        <div className="">
                            <h4 className='text-textBlack text-[1rem] font-bold mt-[10px]'>Cà chua Sông Mỹ</h4>
                            <h4 className='text-textBlack text-[0.8rem] font-normal'>Cà chua chất lượng cao, được trồng bằng phương pháp hữu cơ, không sử dụng hóa chất</h4>
                            <p className='text-greenMain text-[0.9rem] font-bold'>Giá: 20.000 VND/kg</p>
                        </div>
                        <div className="relative w-full h-[60px]">
                            <Link to="" className='absolute bottom-0 left-0 text-[1rem] text-textBlack font-medium rounded-[4px] hover:text-greenMain ease-in duration-300'>Liên hệ<i className="ml-[8px] fa-regular fa-circle-right"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="
                    md:border-l-[1px]
                    lg:border-l-[0px]
                    flex flex-col border-t-[1px] border-r-[1px] border-b-[1px] border-textGray2">
                    <div className="
                        h-[50%]
                        ">
                        <img className='w-full h-full' src="../../build/ns6.jpg" alt="" />
                    </div>
                    <div className="flex flex-grow flex-col justify-between text-left px-[10px] py-[20px]">
                        <div className="">
                            <h4 className='text-textBlack text-[1rem] font-bold mt-[10px]'>Khoai lang Tím Đà Lạt</h4>
                            <h4 className='text-textBlack text-[0.8rem] font-normal'>Một loại khoai lang đặc biệt, có màu tím đậm và hương vị độc đáo. Khoai lang này có thịt mềm, ngọt và giàu chất xơ</h4>
                            <p className='text-greenMain text-[0.9rem] font-bold'>Giá: 15.000 VND/kg</p>
                        </div>
                        <div className="relative w-full h-[60px]">
                            <Link to="" className='absolute bottom-0 left-0 text-[1rem] text-textBlack font-medium rounded-[4px] hover:text-greenMain ease-in duration-300'>Liên hệ<i className="ml-[8px] fa-regular fa-circle-right"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col border-t-[1px] border-r-[1px] border-b-[1px] border-textGray2">
                    <div className="
                        h-[50%]
                        ">
                        <img className='w-full h-full' src="../../build/ns8.jpg" alt="" />
                    </div>
                    <div className="flex flex-grow flex-col justify-between text-left px-[10px] py-[20px]">
                        <div className="">
                            <h4 className='text-textBlack text-[1rem] font-bold mt-[10px]'>Dứa Cayenne</h4>
                            <h4 className='text-textBlack text-[0.8rem] font-normal'>Một loại dứa có hương vị đặc trưng, chua ngọt và hơi cay. Trái dứa có thể có màu vàng hoặc cam, thịt giòn và mật ngọt</h4>
                            <p className='text-greenMain text-[0.9rem] font-bold'>Giá: 30.000 VND/quả</p>
                        </div>
                        <div className="relative w-full h-[60px]">
                            <Link to="" className='absolute bottom-0 left-0 text-[1rem] text-textBlack font-medium rounded-[4px] hover:text-greenMain ease-in duration-300'>Liên hệ<i className="ml-[8px] fa-regular fa-circle-right"></i></Link>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default Storehouse;