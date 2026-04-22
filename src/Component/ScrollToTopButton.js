import React, { useEffect, useState } from "react";

export default function ScrollToTopButton() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShow(true);
            } else {
                setShow(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <>
            {show && (
                <div className="scroll-top" onClick={scrollTop}>
                    <i className="fa fa-arrow-up"></i>
                </div>
            )}
        </>
    );
}