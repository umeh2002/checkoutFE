

const Header = () => {
  return (
    <div className="w-full h-[70px] flex justify-center items-center">
      <div className="w-[80%] h-full flex justify-between items-center small:w-[95%] small:p-[5px]">
        <div className="text-[20px] small:hidden">Checkout</div>
        <div className="text-[30px] font-bold text-green-600 small:text-[22px]">
          abeg{" "}
        </div>
        <div
          className="hover:cursor-pointer w-[100px] h-[40px]
            rounded-md flex items-center justify-center bg-black text-white
           small:w-[80px] small:h-[30px] "
        >
          Sign Up
        </div>
      </div>
    </div>
  );
};

export default Header;
