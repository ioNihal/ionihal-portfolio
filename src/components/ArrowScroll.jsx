import React, { useState, useEffect } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import '../styles/ArrowScroll.css'

const ArrowScroll = ({ sectionIds }) => {
    const [currentSection, setCurrentSection] = useState(0);
    const [isBottom, setIsBottom] = useState(false);

    useEffect(() => {
        // Reset scroll state if the user scrolls manually
        const handleScroll = () => {
            const atBottom = `${window.scrollY} Body Height: ${document.body.offsetHeight}`;
            //console.log("Scrolled: ", atBottom);

        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToNext = () => {
        //console.log("Current section before scroll:", currentSection);
        //console.log("Is at bottom:", isBottom);

        if (isBottom) {
            //console.log("Scrolling to the top section:", sectionIds[0]);
            document.getElementById(sectionIds[0])?.scrollIntoView({ behavior: "smooth" });
            setCurrentSection(0);
            setIsBottom(false); // Reset isBottom after scrolling to the top
        } else {
            const nextSection = currentSection + 1;
            //console.log("Scrolling to the next section:", sectionIds[nextSection]);

            const targetElement = document.getElementById(sectionIds[nextSection]);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
                setCurrentSection(nextSection);


                if (nextSection >= sectionIds.length - 1) {
                    //console.log("Reached the last section. Setting isBottom to true.");
                    setIsBottom(true);
                }
            } else {
                //console.error("Target element not found for section ID:", sectionIds[nextSection]);
            }
        }
    };

    return (
        <button
            onClick={scrollToNext}
            className="arrow-btn"
            title={isBottom ? "Scroll to top" : "Scroll to next section"}
        >
            {isBottom ? <FaArrowUp size={15}/> : <FaArrowDown size={15} />}
        </button>
    );
};

export default ArrowScroll;
