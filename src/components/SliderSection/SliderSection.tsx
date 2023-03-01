import { API_KEY } from "@/utils/constants";

type props = {
  title: string;
};

const SliderSection: React.FC<props> = ({ title }) => {
  return (
    <section className="text-white">
      <h2>{title}</h2>
    </section>
  );
};

export default SliderSection;
