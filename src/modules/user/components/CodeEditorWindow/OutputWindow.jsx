import React from "react";
import { OutputWindowWrapper } from "./OutputWindow.styles";
import { BsArrowReturnRight } from "react-icons/bs";
const OutputWindow = ({ outputDetails,customBTN,tryHarderBTn,submitCodebtn }) => {
    const getOutput = () => {
        let statusId = outputDetails?.status?.id;

        if (statusId === 6) {
            // compilation error
            return (
                <pre className="px-2 py-1 font-normal text-xs text-red-500">
                    {atob(outputDetails?.compile_output)}
                </pre>
            );
        } else if (statusId === 3) {
            return (
                <pre className="px-2 py-1 font-normal text-xs text-green-500">
                    {atob(outputDetails.stdout) !== null
                        ? `${atob(outputDetails.stdout)}`
                        : null}
                </pre>
            );
        } else if (statusId === 5) {
            return (
                <pre className="px-2 py-1 font-normal text-xs text-red-500">
                    {`Time Limit Exceeded`}
                </pre>
            );
        } else {
            return (
                <pre className="px-2 py-1 font-normal text-xs text-red-500">
                    {atob(outputDetails?.stderr)}
                </pre>
            );
        }
    };
    return (
        <>
            <OutputWindowWrapper>
                <div className="outputWindow-btns">
                    <div className="outputWindow-btns-left">
                        <button className="outputWindow-btns-left-showsolution"><BsArrowReturnRight />   show solution</button>
                    </div>
                    <div className="outputWindow-btns-right">
                        <div className="btn-one">
                            <button className="outputWindow-btns-right-run">{tryHarderBTn} try harder btn here</button>
                        </div>
                    {customBTN}
                    {submitCodebtn}
                    </div>
                </div>
                <h1 className="output-title">
                    Output
                </h1>
                <div className="w-full h-56 bg-[#1e293b] rounded-md text-white font-normal text-sm overflow-y-auto">
                    {outputDetails ? <>{getOutput()}</> : null}
                </div>
            </OutputWindowWrapper>
        </>
    );
};

export default OutputWindow;