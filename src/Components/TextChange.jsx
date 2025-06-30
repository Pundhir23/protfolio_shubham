import React, { useState, useEffect } from "react";

const TextChange = () => {
  const texts = [
    "Hi, I'm Shubham Pundhir",
    "Hi, I'm Web Developer",
    "Hi, I'm Frontend Developer "
  ];

  const [currenText, setCurrentText] = useState("");
  const [endValue, setendValue] = useState(1); // changed from boolean to number
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(texts[index].substring(0, endValue));

      if (isForward) {
        setendValue((prev) => prev + 1);
        if (endValue >= texts[index].length + 10) {
          setIsForward(false);
        }
      } else {
        setendValue((prev) => prev - 1);
        if (endValue <= 0) {
          setIsForward(true);
          setIndex((prev) => (prev + 1) % texts.length); // cycle correctly
        }
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index, texts]);

  return (
    <div className="transition ease duration-300">{currenText}</div>
  );
};

export default TextChange;
