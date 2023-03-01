type props = {
  title: string;
};

const Section: React.FC<props> = ({ title }) => {
  return (
    <section>
      <h2>{title}</h2>
    </section>
  );
};

export default Section;
