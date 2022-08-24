import SectionTitle from "./SectionTitle/SectionTitle";
import './SectionTemplate.css';
import React from "react";
import { Element } from 'react-scroll'

const SectionTemplate = ({title, index, children}) => {

    return (
        <Element id={title} className="section">
            <SectionTitle title={title} index={index} />
            <div className="section-content">
                {children}
            </div>
        </Element>
    );
};

export default SectionTemplate ;