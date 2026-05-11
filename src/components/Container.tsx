import React from 'react';
import { Container as BsContainer, ContainerProps as BsContainerProps } from "react-bootstrap";
import classNames from 'classnames';
import { BsPrefixProps } from "react-bootstrap/esm/helpers";
import { useBootstrapPrefix } from 'react-bootstrap/esm/ThemeProvider';
import PropTypes from 'prop-types';

export interface ContainerProps extends BsContainerProps, BsPrefixProps {

  /**
   * Fill height.
   */
  fillHeight?: boolean;

  /**
   * Content middle.
   */
  contentMiddle?: boolean;
  as?: React.ElementType;
}

const propTypes = {

  /**
   * Fill height.
   */
  fillHeight: PropTypes.bool,

  /**
   * Content middle.
   */
  contentMiddle: PropTypes.bool
}

const defaultProps: ContainerProps = {};

const Container: React.ForwardRefExoticComponent<ContainerProps & React.RefAttributes<HTMLElement>> = React.forwardRef<HTMLElement, ContainerProps>(
  (
    {
      bsPrefix,
      as: Component = 'div',
      className,
      fillHeight,
      contentMiddle,
      ...props
    },
    ref
  ) => {
    bsPrefix = useBootstrapPrefix(bsPrefix, 'container');

    return (
      <BsContainer
        as={Component}
        ref={ref}
        {...props}
        className={classNames(
          className,
          fillHeight && `${bsPrefix}-fill-height`,
          contentMiddle && `${bsPrefix}-content-middle`
        )}
      />
    );
  }
)

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

export default Container;
