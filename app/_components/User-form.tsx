"use client";

import useUserStore from "@/store/useUserStore";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

const UserForm = () => {
  const supabase = createClient();
  const router = useRouter();

  const {
    age,
    fullName,
    isStudent,
    loading,
    setAge,
    setFullName,
    setIsStudent,
    setLoading,
  } = useUserStore();

  const handleSave = async () => {
    try {
      setLoading(true);
      await supabase
        .from("Users")
        .insert([{ fullName, age: parseInt(age), isStudent }])
        .select("*");
      router.refresh();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="card max-w-[300px] mx-auto">
        <div className="card-header">ADD</div>
        <div className="card-body space-y-2">
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            type="text"
            placeholder="fullname"
            className="form-control"
          />
          <input
            value={age}
            onChange={(e) => setAge(e.target.value)}
            type="number"
            placeholder="age"
            className="form-control mt-2"
          />
          <label htmlFor="isStudent" className="mt-2">
            Is Student{" "}
            <input
              checked={isStudent}
              onChange={(e) => setIsStudent(e.target.checked)}
              id="isStudent"
              type="checkbox"
            />
          </label>
        </div>
        <div className="card-footer">
          <button
            disabled={loading}
            onClick={handleSave}
            className="btn btn-dark w-full"
          >
            {loading ? "loading..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
