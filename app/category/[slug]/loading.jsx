"use client"

import { ThreeCircles } from "react-loader-spinner";

const loading = () => {
    return (
        <div className="h-screen w-full flex items-center justify-center">
            <ThreeCircles
                height="70"
                width="70"
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor=""
                innerCircleColor=""
                middleCircleColor=""
            />
        </div>
    );
}

export default loading;
