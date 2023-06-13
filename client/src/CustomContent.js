
import React from 'react';
import { Link } from 'react-scroll';
import { IconContext } from 'react-icons';
import { IoMdArrowDroprightCircle } from 'react-icons/io';
import styled from 'styled-components';
import './customComponent.css'

const CustomContent = () => {
  return (
    <div className="custom-container">
      <h1 className="custom-h1">
        <span className="custom-bracket">&#123;</span>
        <br />
        <span className="custom-key">firstName:</span>{' '}
        <span className="custom-value">"Stephen"</span>,
        <br />
        <span className="custom-key">lastName:</span>{' '}
        <span className="custom-value">"Gloade"</span>,
        <br />
        <span className="custom-key">status:</span>{' '}
        <span className="custom-value">418</span>,
        <br />
        <StyledLink to="section1" smooth={true} duration={500}>
          <IconContext.Provider
            value={{ className: 'arrow-icon' }}
          >
            <IoMdArrowDroprightCircle />
          </IconContext.Provider>
        </StyledLink>
        <span className="custom-key-no-margin">about:</span>{' '}
        <span className="custom-value">
          ["Full-Stack Web Developer"],
        </span>
        <br />
        <Link to="section2" smooth={true} duration={500}>
          <IconContext.Provider
            value={{ className: 'arrow-icon' }}
          >
            <IoMdArrowDroprightCircle />
          </IconContext.Provider>
        </Link>
        <span className="custom-key-no-margin">experience:</span>{' '}
        <span className="custom-value">
          ["Node.js", "React", "React Native"],
        </span>
        <br />
        <span className="custom-bracket">&#125;</span>
      </h1>
    </div>

  );
};

const StyledLink = styled(Link)`
cursor: pointer;
`

export default CustomContent;