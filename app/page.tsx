import Banner from "@/components/banner/Banner";
import Csr from "@/components/cSR/Csr";
import SelectedProjects from "@/components/selected-Projects/SelectedProjects";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <div className="">
      <div className="pt-[64px] sm:pt-[120px]">
        <Banner />
      </div>
      <div className="pt-[80px]">
        <Skills />
      </div>
      <div id="works" className="pt-[64px] sm:pt-[120px]">
        <SelectedProjects />
      </div>
      <div className="pt-[64px] sm:pt-[120px]">
        <Csr />
      </div>
    </div>
  );
}
