"use client"
import { useState, useEffect, useRef } from "react";

export const useIsInViewport = ({ withOptions }: { withOptions: { threshold: number } }) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    // console.log('withOptions', withOptions)
    const elementRef = useRef(null);

    let options = withOptions ? withOptions : {
        root: document.querySelector("#scrollArea"),
        rootMargin: "0px",
        threshold: 1.0,
    };


    const observer = useRef(
        new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // console.log('entry', entry)
                    setIsIntersecting(entry.isIntersecting);
                }
            });
        }, options)
    );

    useEffect(() => {
        const { current: currentObserver } = observer;
        if (elementRef.current) {
            currentObserver.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                currentObserver.unobserve(elementRef.current);
            }
        };
    }, []);

    return { elementRef, isIntersecting };
};
