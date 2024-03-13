"use client";
import { Josephin_sans, kanit } from "../utils/fonts";

const Fonts = () => {
    return (
        <style jsx global>{`
            :root {
                --kanit: ${kanit.style.fontFamily};
                --josephin_sans: ${Josephin_sans.style.fontFamily};
            }
        `}</style>
    )
}

export default Fonts;