"use client";

import { useEffect, useState } from "react";
import { breakpoints } from "../constants";

export const useBreakpoint = (breakpoint?: number) => {
    const [windowWidth, setWindowWidth] = useState(0);
    const [breakpointWidth, setBreakpointWidth] = useState(
        breakpoint || breakpoints.md
    );

    const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        setBreakpointWidth(breakpoint || breakpoints.md);
    }, [breakpoint]);

    useEffect(() => {
        handleWindowResize();
        window.addEventListener("resize", handleWindowResize);
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return !!windowWidth && windowWidth <= breakpointWidth;
};
