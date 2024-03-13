"use client";

import { useEffect, useState } from "react";
import { useIsInViewport } from "../hooks/useIsInViewport";

interface FadeInArgumentModel {
    children: React.ReactNode,
    fromRight?: boolean,
    fromBottom?: boolean,
    fromLeft?: boolean,
    fromTop?: boolean
    threshold?: number
}

const Fadeinsection = ({ children, fromRight = false, fromBottom = false, fromLeft = false, fromTop = false, threshold = 0.2 }: FadeInArgumentModel) => {
    const [translateClasses, setTranslateClasses] = useState('')
    const { elementRef, isIntersecting } = useIsInViewport({
        withOptions: { threshold: threshold }
    });

    useEffect(() => {
        setTranslateClasses(`${fromRight && 'translate-x-[20vh]'} ${fromLeft && 'translate-x-[-20vh]'} && ${fromBottom && 'translate-y-[20vh]'} && ${fromTop && 'translate-y-[-20vh]'}`)
    }, []);

    return (
        <div
            className={`transform duration-600 ease-out transition-transform duration-[1200ms]
             will-change-opacity will-change-visibility ${isIntersecting ? 'opacity-100 transform-none visible' : `opacity-0 invisible ${translateClasses}`}`}
            ref={elementRef}
        >
            {children}
        </div>
    );
}

export default Fadeinsection;