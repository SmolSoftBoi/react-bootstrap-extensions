import React from 'react';
import { BsPrefixProps } from 'react-bootstrap/esm/helpers';

export interface FeaturedListItemProps extends React.HTMLAttributes<HTMLElement>, BsPrefixProps {};

const propTypes = {};

const defaultProps: FeaturedListItemProps = {};

const FeaturedListItem: React.ForwardRefExoticComponent<FeaturedListItemProps & React.RefAttributes<HTMLElement>> = React.forwardRef<HTMLElement, FeaturedListItemProps>(
  (
    {
      // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
      as: Component = 'li',
      ...props
    },
    ref
  ) => (
    <Component
      ref={ref}
      {...props}
    />
  )
);

FeaturedListItem.propTypes = propTypes;
FeaturedListItem.defaultProps = defaultProps;

export default FeaturedListItem;
