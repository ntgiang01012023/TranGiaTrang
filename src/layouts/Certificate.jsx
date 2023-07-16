import { useState } from "react";

const Certificate = () => {

    const [currentImage, setCurrentImage] = useState(1);

    const handleRightClick = () => {
        if (currentImage < 3) {
          setCurrentImage(currentImage + 1);
        }
      };
    
      const handleLeftClick = () => {
        if (currentImage > 1) {
          setCurrentImage(currentImage - 1);
        }
      };

    return (

        <section className="bg-textGray3 w-full h-auto py-[20px]">
            <div className="
                sm:grid-cols-1
                md:grid-cols-2
                lg:grid-cols-2
                grid py-[20px] max-w-[1280px] h-auto px-[10px] mx-auto">
                <div className="flex flex-col">
                    <div className="w-full h-[160px] text-left">
                        <h3 className="text-greenMain text-[1.1rem] font-[600] uppercase mb-5">Chứng chỉ và Thành tựu</h3>
                        <p className="text-textBlack1 text-[0.8rem] font-normal">Các chứng chỉ này đánh dấu sự thành công và nỗ lực không ngừng của những người đã nắm vững kiến thức về bất động sản, các quy trình lưu trữ, quản lý kho, kiểm soát chất lượng và an toàn trong lĩnh vực nông nghiệp sạch và sản xuất sắt thép</p>
                    </div>
                    <div className="grid grid-cols-3 gap-x-7">
                        <img className="w-full h-full cover shadow-lg" src="/cc1.jpg" alt="" />
                        <img className="w-full h-full cover shadow-lg" src="/cc2.jpg" alt="" />
                        <img className="w-full h-full cover shadow-lg" src="/public/cc3.jpg" alt="" />
                    </div>
                    <div className="w-full h-[100px] flex justify-center items-center gap-x-2">
                        <button className="text-greenMain w-[40px] h-[40px] flex justify-center items-center bg-none border-[2px] border-greenMain rounded-[50%] hover:text-white hover:bg-greenMain ease-in duration-300"onClick={handleLeftClick} disabled={currentImage === 1}>
                            <i className="fa-solid fa-angle-left"></i>
                        </button>
                        <button className="text-greenMain w-[40px] h-[40px] flex justify-center items-center bg-none border-[2px] border-greenMain rounded-[50%] hover:text-white hover:bg-greenMain ease-in duration-300" onClick={handleRightClick} disabled={currentImage === 3}>
                            <i className="fa-solid fa-angle-right"></i>
                        </button>
                    </div>
                </div>
                <div className="
                    sm:hidden
                    md:block
                    lg:block">
                    <div className="           
                        md:h-[400px]
                        lg:h-[500px]
                        show w-full grid grid-cols-1 pl-[50px]">
                        <div className="flex justify-end items-end">
                            <div className="
                                md:h-[140px]
                                lg:h-[300px]
                                relative w-[100%] bg-greenMain rounded-[4px] shadow-xl">
                                <img className="
                                    md:w-[250px] md:h-auto md:bottom-[30px]
                                    lg:w-[320px] lg:h-auto lg:bottom-[30px]
                                    absolute left-[50%] transform translate-x-[-50%] shadow-lg" src={`/cc${currentImage}.jpg`} alt="" />
                            </div>
                        </div>                    
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default Certificate;