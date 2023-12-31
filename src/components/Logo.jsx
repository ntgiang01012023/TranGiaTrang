import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to="/" className='flex items-center'>
            <i className="text-[28px] text-greenMain mr-1 fa-solid fa-circle-nodes"></i>
            <h1 className='
                min-[300px]:text-[20px] 
                sm:text-[23px] 
                md:text-[26px]
                lg:text-[28px]  
                text-textBlack font-bold'>ChuGiaTrang</h1>
        </Link> 
    );
};

export default Logo;