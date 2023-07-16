import '../main.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../components/Logo';

const Header = () => {

    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
    };

    const [option, setOption] = useState(false)

    const toggleOption = () => {
        setOption(!option);
    }

    const [rotateIcon, setRotateIcon] = useState(false);
  const [hoverList, setHoverList] = useState(false);

  const handleMouseEnter = () => {
    setRotateIcon(true);
  };

  const handleMouseLeave = () => {
    if (!hoverList) {
      setRotateIcon(false);
    }
  };

  const handleListMouseEnter = () => {
    setHoverList(true);
  };

  const handleListMouseLeave = () => {
    setHoverList(false);
  };

    const menuData = [
        {
            name: 'Bản tin',
            link: '/'
        },
        {
            name: 'Giới thiệu',
            link: '/'
        },
        {
            name: 'Liên hệ',
            link: '/'
        },
        {
            name: 'Hổ trợ',
            link: '/'
        },
    ];

    const mostData = [
        {
            name: 'Kho xưởng',
            link: '/'
        },
        {
            name: 'Bất động sản',
            link: '/'
        },
        {
            name: 'Vật tư Sắt thép',
            link: '/'
        },
        {
            name: 'Sản phẩm nông nghiệp',
            link: '/'
        },
    ];

    return (
        <header className='fixed z-50 top-0 left-0 w-full h-[80px] bg-white shadow shadow-shadow'>
            <div className="sm:w-full md:w-full lg:w-full bg-white max-w-[1280px] h-full px-[10px] mx-auto flex justify-between items-center">
                <div className="">
                    <Logo />
                </div>
                <div className="sm:hidden md:hidden lg:block">
                    <ul className='flex items-center text-[15px] text-textBlack gap-x-8'>
                        <li className="relative group">
                            <Link 
                                to=""
                                className="group-hover:text-greenMain hover:font-medium ease duration-300"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                Nổi bật 
                                <i
                                    className={`ml-2 fa-solid fa-chevron-down transition-transform duration-300 transform ${
                                        rotateIcon || hoverList ? 'rotate-180' : 'rotate-0'
                                      }`}
                                    id="chevron-icon"
                                    ></i>                    
                            </Link>
                            <ul
                                className="w-[260px] absolute mt-4 px-0 py-3 bg-white shadow shadow-slate-350 rounded-[4px] text-left text-textGray font-extralight group-hover:opacity-[1] opacity-[0] transition-opacity duration-500"
                                onMouseEnter={handleListMouseEnter}
                                onMouseLeave={handleListMouseLeave}
                            >
                                <li className='hover:bg-greenMain hover:text-white px-4 py-2 ease-linear duration-200'><Link>Kho xưởng</Link></li>
                                <li className='hover:bg-greenMain hover:text-white px-4 py-2 ease-linear duration-200'><Link>Bất động sản</Link></li>
                                <li className='hover:bg-greenMain hover:text-white px-4 py-2 ease-linear duration-200'><Link>Vật tư Sắt thép</Link></li>
                                <li className='hover:bg-greenMain hover:text-white px-4 py-2 ease-linear duration-200'><Link>Sản phẩm nông nghiệp</Link></li>
                            </ul>
                        </li>
                        <li><Link to="" className='hover:text-greenMain ease duration-300'>Bản tin</Link></li>
                        <li><Link to="" className='hover:text-greenMain ease duration-300'>Giới thiệu</Link></li>
                        <li><Link to="" className='hover:text-greenMain ease duration-300'>Liên hệ</Link></li>
                        <li><Link to="" className='hover:text-greenMain ease duration-300'>Hổ trợ</Link></li>
                    </ul>
                </div>
                <div className="sm:hidden md:hidden lg:block">
                    <ul className='flex items-center text-[15px] text-textBlack gap-x-5'>
                        <li><Link to="" className='block px-[20px] py-[12px] text-white font-medium uppercase bg-greenMain border-[1px] border-greenMain rounded-[4px] hover:shadow-lg hover:shadow-greenMain ease duration-300'>Đăng ký</Link></li>
                        <li><Link to="" className='block px-[20px] py-[12px] text-textBlack border-[1px] border-slate-200 font-medium uppercase bg-blue rounded-[4px] hover:shadow-lg hover:shadow-slate-400 ease duration-300'>Đăng nhập</Link></li>
                    </ul>
                </div>
                <div className={`
                    ${menu ? 'tablet:nav-show' : 'tablet:nav-hide'}
                    fixed top-0 left-0 w-full h-full bg-slate-900 sm:block md:block lg:hidden`}
                    >
                    <div className="w-full h-full flex justify-between items-start">
                        <ul className='sm:w-[50%] sm:px-[30px] w-[40%] h-full bg-white text-[15px] p-[20px]'>
                            <li className='w-full mb-6'><Logo /></li>
                            <li className='w-full text-left text-textBlack font-semibold py-2'>
                                <Link to="" className='w-full flex justify-between items-center'>
                                    Nổi bật
                                    <i className={`
                                    ${option ? "fa-solid fa-chevron-down" : "fa-solid fa-chevron-right"}`} onClick={toggleOption}></i>
                                </Link>
                                <ul className={`
                                    ${option ? 'option-show' : 'option-hide'}
                                     w-full px-5
                                `}>
                                    {mostData.map(items => (
                                        <li key={items.name} className='w-full text-left text-textBlack font-normal py-2'><Link to={items.link}>{items.name}</Link></li>
                                    ))}
                                </ul>
                            </li>

                            {menuData.map(items => (
                                <li key={items.name} className='w-full text-left text-textBlack font-semibold py-2'><Link to={items.link}>{items.name}</Link></li>
                            ))}
                        </ul>                 
                    </div>                
                </div>
                <div className={`
                    ${menu ? 'tablet:icon-show' : 'tablet:icon-show'}
                    w-12 h-12 flex justify-center items-center 
                    lg:hidden
                `}>
                    <i className={`
                    ${menu ? "fa-solid fa-xmark text-white" : "fa-solid fa-bars text-black"}`} onClick={toggleMenu}></i>
                </div>
            </div>
        </header>
    );
};

export default Header;
