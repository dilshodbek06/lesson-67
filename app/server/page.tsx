import { createClient } from "@/utils/supabase/server";
import UserForm from "../_components/User-form";
import UsersData from "../_components/Users-data";

const Page = async () => {
  const supabase = await createClient();

  const { data: users } = await supabase.from("Users").select("*");

  return (
    <div>
      <div className="container">
        <UserForm />
        <UsersData data={users!} />
      </div>
    </div>
  );
};

export default Page;
