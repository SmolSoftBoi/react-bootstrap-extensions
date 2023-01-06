import React from 'react';
import classNames from 'classnames';
import { BsPrefixProps, BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';
import { useBootstrapPrefix } from 'react-bootstrap/esm/ThemeProvider';
import PropTypes from 'prop-types';
import BlockTitle from './BlockTitle';

export interface FeaturedListItemProps extends React.HTMLAttributes<HTMLElement>, BsPrefixProps {};

const propTypes = {};

const defaultProps: FeaturedListItemProps = {};

const FeaturedListItem: BsPrefixRefForwardingComponent<'li', FeaturedListItemProps> = React.forwardRef<HTMLElement, FeaturedListItemProps>(
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
