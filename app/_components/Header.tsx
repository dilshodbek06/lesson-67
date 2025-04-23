import Link from "next/link";

const Header = async () => {
  return (
    <div className="h-[80px]  border-b flex items-center">
      <div className="container mx-auto flex items-center justify-between">
        <h3>Logo</h3>
        <Link className="text-white" href={"/sign-in"}>
          <button className="px-4 py-2 rounded bg-green-500 cursor-pointer">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
