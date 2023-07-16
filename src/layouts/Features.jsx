
const Features = () => {

    const featuresData = [
        {
            title: 'Tìm kiếm và lọc thông tin',
            icon: 'fa-magnifying-glass-dollar',
        },
        {
            title: 'Hiển thị thông tin chi tiết',
            icon: 'fa-circle-info',
        },
        {
            title: 'Giao dịch trực tuyến',
            icon: 'fa-credit-card',
        },
        {
            title: 'Chứng chỉ và chất lượng',
            icon: 'fa-certificate',
        },
    ];

    return (
        <section className="sm:h-auto md:h-auto w-full h-[230px] py-[20px]">
            <div className="
                sm:grid-cols-2
                md:grid-cols-2
                lg:grid-cols-4
                grid grid-cols-4 max-w-[1280px] h-full px-[10px] mx-auto">
                
                    {featuresData.map((items, index) => (
                        <div className="
                            sm:py-[20px]
                            md:py-[20px]
                            flex flex-col justify-center items-center bg-textGray3 gap-y-[20px] hover:scale-110 hover:shadow-lg hover:text-greenMain hover:rounded-[6px] ease duration-300"
                             key={index}>
                                <div className="
                                    sm:w-[3.5rem] sm:h-[3.5rem] 
                                    md:w-[4rem] md:h-[4rem] 
                                    w-[5rem] h-[5rem] bg-green2 flex justify-center items-center rounded-[50%]">
                                    <i className={`fa-solid ${items.icon} text-greenMain text-[2rem]
                                        sm:text-[1.5rem]
                                        md:text-[1.7rem]
                                    `}></i>
                                </div>
                            <h3 className="sm:text-[0.6rem] md:text-[0.8rem] text-[1rem] font-semibold">{items.title}</h3>
                        </div>
                    ))}

            </div>
        </section>
    );
};

export default Features;