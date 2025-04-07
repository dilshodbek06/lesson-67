const Header = () => {
  return (
    <div className="h-[80px] bg-black text-white flex items-center">
      <div className="container mx-auto flex items-center justify-between">
        <h3>Logo</h3>
        <button className="px-4 py-2 rounded bg-green-500 cursor-pointer">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Header;
