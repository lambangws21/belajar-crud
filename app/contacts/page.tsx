import ButtonCreate from "@/components/ButtonCreate";
import Search from "@/components/Search";
import TabelContact from "@/components/TabelContact";

const Contacts = () => {
  return (
    <div className="max-w-screen-md mx-auto mt-5">
      <div className="flex items-center justify-between gap-1">
        <Search />
        <ButtonCreate />
      </div>
      <TabelContact />
    </div>
  );
};

export default Contacts;
