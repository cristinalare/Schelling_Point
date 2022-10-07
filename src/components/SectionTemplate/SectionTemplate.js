import SectionTitle from "./SectionTitle/SectionTitle";
import './SectionTemplate.css';
import React from "react";
import { Element } from 'react-scroll';
import SectionDivider from "../SectionDivider/SectionDivider";

const SectionTemplate = ({title, index, children}) => {

    return (
      <>
        {(title === 'Speakers' || title === 'Afterparty') &&
          <SectionDivider rotate={title === 'Afterparty' ? true : false} />
        }
        <Element id={title.split(' ')[0]} className="section">
          <SectionTitle title={title} index={index} />
          <div className="section-content">
              {children}
          </div>
        </Element>
      </>
    );
};

export default SectionTemplate ;