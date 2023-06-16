import React, { useState, useEffect } from "react";

type Props = {
  text: string;
};

const Countdown = ({ text }: Props) => {
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => {
        setCount(count - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [count]);

  return (
    <div>
      <p>
        {text}
        {count}
      </p>
    </div>
  );
};

export default Countdown;
