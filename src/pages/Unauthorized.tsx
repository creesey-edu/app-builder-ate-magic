import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const RADIUS = 180;
const STROKE_WIDTH = 14;
const FULL_DASH_ARRAY = 2 * Math.PI * RADIUS; // ≈ 1130.97
const TOTAL_TIME = 30;

const Unauthorized = () => {
  const navigate = useNavigate();
  const [secondsLeft, setSecondsLeft] = useState(TOTAL_TIME);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      navigate("/");
    }, TOTAL_TIME * 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [navigate]);

  const strokeDashoffset = FULL_DASH_ARRAY - (FULL_DASH_ARRAY * secondsLeft) / TOTAL_TIME;

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="relative w-[600px] h-[600px]">
        <svg className="w-full h-full rotate-[-90deg]">
          <circle
            cx="50%"
            cy="50%"
            r={RADIUS}
            stroke="#e5e7eb"
            strokeWidth={STROKE_WIDTH}
            fill="none"
          />
          <circle
            cx="50%"
            cy="50%"
            r={RADIUS}
            stroke="#3b82f6"
            strokeWidth={STROKE_WIDTH}
            fill="none"
            strokeDasharray={FULL_DASH_ARRAY}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000"
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl font-bold text-red-600 dark:text-red-400 mb-3">
            403 - Unauthorized
          </h1>
          <p className="text-base text-muted-foreground mb-6">
            Redirecting in{" "}
            <span className="font-bold animate-pulse">{secondsLeft}</span> second
            {secondsLeft !== 1 && "s"}...
          </p>
          <Link to="/">
            <Button size="lg">Return to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
