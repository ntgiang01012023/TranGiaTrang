import { Link } from 'react-router-dom';

const News = () => {

    const newData = [
        {
            img: '/Hero.png',
            title: 'Nông sản sạch: Ưu điểm và cách nhận biết',
            description: 'Tìm hiểu về lợi ích của nông sản sạch và cách nhận biết những sản phẩm chất lượng cao.',
            author: 'John Doe',
            date: '14/07/2023',
        },
        {
            img: '/ns1.jpg',
            title: 'Thông báo: Hội chợ nông sản sạch diễn ra vào ngày 20/07/2023',
            description: 'Hội chợ nông sản sạch lớn nhất trong năm sẽ diễn ra vào ngày 20/07/2023 tại Trung tâm Hội nghị Thống Nhất. Đây là cơ hội để người dân tiếp cận và mua sắm nông sản sạch chất lượng cao.',
            author: 'Admin',
            date: '15/07/2023',
          },
          {
            img: '/bds1.jpg',
            title: 'Nông sản sạch - Xu hướng mua sắm của người tiêu dùng',
            description: 'Nông sản sạch đang trở thành xu hướng mua sắm phổ biến của người tiêu dùng hiện nay. Bài viết này sẽ giúp bạn hiểu rõ hơn về lợi ích và cách nhận biết nông sản sạch.',
            author: 'Jane Doe',
            date: '16/07/2023',
          },
          {
            img: '/ks1.jpg',
            title: 'Những lợi ích của việc sử dụng nông sản sạch',
            description: 'Nông sản sạch không chỉ có lợi ích cho sức khỏe của con người mà còn đóng góp tích cực vào bảo vệ môi trường và phát triển nông nghiệp bền vững. Hãy tìm hiểu những lợi ích của việc sử dụng nông sản sạch.',
            author: 'John Smith',
            date: '17/07/2023',
          },
          {
            img: '/ns2.jpg',
            title: 'Cách nhận biết nông sản sạch chất lượng cao',
            description: 'Việc nhận biết nông sản sạch chất lượng cao là một kỹ năng quan trọng giúp bạn lựa chọn những sản phẩm an toàn và chất lượng. Hãy tìm hiểu những chỉ dẫn đơn giản để nhận biết nông sản sạch.',
            author: 'Emily Johnson',
            date: '18/07/2023',
          },
          {
            img: '/st1.jpg',
            title: 'Nông sản sạch và sự phát triển của nông nghiệp bền vững',
            description: 'Nông sản sạch đóng góp quan trọng vào sự phát triển của nông nghiệp bền vững. Bài viết này sẽ phân tích vai trò của nông sản sạch trong bảo vệ môi trường, tạo thu nhập cho nông dân và đáp ứng nhu cầu của người tiêu dùng.',
            author: 'David Williams',
            date: '19/07/2023',
          },
    ];

    return (
        <section className="bg-white w-full h-auto py-[20px]">
            <div className="flex flex-col bg- max-w-[1280px] h-full px-[10px] mx-auto">
                <div className="w-full h-16 bg-">
                    <div className="w-[180px] hover:w-[220px] h-full flex justify-start items-center border-b-[5px] border-greenMain ease duration-300">
                        <h3 className="sm:text-[1rem] text-[1.3rem] uppercase">Bản tin <span>nổi bật</span></h3>
                    </div>
                </div>
                <div className="md:h-auto w-full flex-grow py-5">
                    <div className="
                        sm:grid-cols-1 sm:w-full sm:h-auto 
                        md:grid-cols-2 md:h-full
                        lg:grid-cols-3 lg:h-auto
                        w-full h-auto grid grid-cols-3 gap-4">

                        {newData.map((item, index) => (
                            <div className="
                                sm:h-auto sm:flex-row
                                md:h-auto md:flex md:flex-col md:justify-start
                                max-w-full h-auto flex flex-col p-[20px] bg-white rounded-[4px] border-[1px] border-t-slate-100 hover:shadow-lg hover:shadow-slate-400 ease duration-300"
                                key={index}
                                >
                                <div className="
                                    sm:w-[40%] sm:h-full
                                    md:w-full md:h-[230px]
                                    w-full h-[230px]
                                    ">
                                    <img className='
                                        sm:w-full sm:h-full
                                        md:w-full md:h-full
                                        w-full h-[230px] cover mb-3' src={item.img} alt="" />       
                                </div>

                                <div className="
                                    sm:w-[60%] sm:h-auto sm:px-4 sm:flex sm:flex-col sm:justify-between
                                    md:w-full md:h-auto md:px-0
                                    px-0 pt-[20px] flex-grow
                                    ">
                                    <div className="">
                                        <h3 className='text-left text-[0.9rem] font-medium uppercase'>{item.title}</h3>
                                        <p className="text-left text-[0.7rem] font-normal">{item.description}</p>
                                        <div className="w-full h-10 flex justify-between items-center mb-2">
                                            <span className="text-textBlack1 text-left text-[0.7rem] font-medium">Tác giả: {item.author}</span>
                                            <span className="text-textBlack1 text-left text-[0.7rem] font-medium">Ngày đăng: {item.date}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="relative w-full h-[56px]">
                                        <Link to="/" className="absolute top-0 left-0 px-10 py-4 bg-greenMain text-[0.9rem] text-white font-medium uppercase rounded-md">Đọc thêm</Link>
                                    </div>
                                </div>
                                
                                
                            </div>
                        ))}    
                        
                    </div>
                </div>
                <div className="">
                    
                </div>
            </div>
        </section>
    );
};

export default News;