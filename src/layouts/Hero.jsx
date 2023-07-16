import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="sm:h-auto mt-[80px] w-full h-[500px]">
            <div className="          
                sm:grid-cols-1
                md:grid-cols-2
                lg:grid-cols-2
                grid max-w-[1280px] h-full px-[10px] mx-auto
                ">
                <div className="                   
                    sm:py-[20px] sm:items-center                     
                    md:items-start 
                    lg:items-start 
                    flex flex-col justify-center pr-[10px]
                    ">
                    <h1 className="
                        sm:text-[1rem] 
                        md:text-[1.2rem] 
                        text-[1.5rem] text-greenMain font-medium
                        ">
                            Tìm kiếm và kết nối với
                    </h1>
                    <h1 className="
                        sm:text-center sm:text-[1.8rem]
                        md:text-[2.3rem] md:text-left
                        lg:text-left
                        text-[3rem] text-textGray mb-[15px]
                        ">
                            Kho xưởng, Bất động sản, Sắt thép và Sản phẩm nông sản sạch
                    </h1>
                    <p className="
                        sm:text-center sm:text-[0.5rem]
                        md:text-left md:text-[0.7rem]
                        text-[1rem] font-light mb-[40px]                       
                        ">
                            Khám phá nguồn cung ứng đáng tin cậy và chất lượng trong lĩnh vực của bạn
                    </p>
                    <Link to="" className="w-[157px] px-[20px] py-[12px] bg-greenMain text-white font-medium uppercase rounded-[4px] hover:shadow-lg hover:shadow-slate-400 ease duration-300">Bắt đầu ngay</Link>                
                </div>
                <div className="w-full h-full">
                    <img className="w-full h-full object-cover" src="../../build/commercial-image.webp" alt="" />
                </div>
            </div>
        </section>
    );
};

export default Hero;