import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './ContentTransition.css'; // Import CSS for transitions

const ContentTransition = ({ children, key }) => (
  <TransitionGroup>
    <CSSTransition
      key={key}
      timeout={1000}
      classNames="fade"
    >
      <div>
        {children}
      </div>
    </CSSTransition>
  </TransitionGroup>
);

export default ContentTransition;
