import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Loading from "./loading";

type Props = {
  src: string | StaticImageData;
  alt: string;
};

const ImageWithLoader = ({ src, alt }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Loading />}
      <Image src={src} alt={alt} onLoad={handleLoad} fill sizes={"35vw"} />
    </>
  );
};

export default ImageWithLoader;
