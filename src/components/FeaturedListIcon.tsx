import React from 'react';
import classNames from 'classnames';
import { BsPrefixProps } from 'react-bootstrap/esm/helpers';
import { useBootstrapPrefix } from 'react-bootstrap/esm/ThemeProvider';

export interface FeaturedListIconProps extends React.HTMLAttributes<HTMLElement>, BsPrefixProps {};

const propTypes = {};

const defaultProps: FeaturedListIconProps = {};

const FeaturedListIcon: React.ForwardRefExoticComponent<FeaturedListIconProps & React.RefAttributes<HTMLElement>> = React.forwardRef<HTMLElement, FeaturedListIconProps>(
  (
    {
      bsPrefix,
      // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
      as: Component = 'div',
      className,
      ...props
    },
    ref
  ) => {
    bsPrefix = useBootstrapPrefix(bsPrefix, 'featured-list-icon');
    const bsBlockPrefix = `${bsPrefix}`;

    return (
      <Component
        ref={ref}
        {...props}
        className={classNames(
          className,
          bsBlockPrefix
        )}
      />
    );
  }
);

FeaturedListIcon.propTypes = propTypes;
FeaturedListIcon.defaultProps = defaultProps;

export default FeaturedListIcon;
