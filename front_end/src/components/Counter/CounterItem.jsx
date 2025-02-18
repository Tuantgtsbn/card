import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import useInView from '../../hooks/useInView';
const CounterItem = ({ label, endValue, className }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView();
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true;
      const duration = 2000;
      const steps = 60;
      const stepValue = endValue / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += 1;
        setCount(Math.min(Math.floor(stepValue * current), endValue));

        if (current >= steps) {
          clearInterval(timer);
          setCount(endValue);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [inView, endValue]);

  return (
    <div ref={ref} className={classNames("text-center p-6 bg-gray-50 rounded-lg shadow-sm", className)}>
      <div className="text-4xl font-bold text-blue-600 mb-2">
        {count.toLocaleString()}
      </div>
      <div className="text-gray-600 font-medium">
        {label}
      </div>
    </div>
  );
};
export default CounterItem;