import React from 'react';
import classNames from 'classnames';
import { BsPrefixProps, BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';
import { useBootstrapPrefix } from 'react-bootstrap/esm/ThemeProvider';
import PropTypes from 'prop-types';
import FeaturedListIcon from './FeaturedListIcon';
import FeaturedListItem from './FeaturedListItem';

export interface FeaturedListProps extends React.HTMLAttributes<HTMLElement>, BsPrefixProps {};

const propTypes = {};

const defaultProps: FeaturedListProps = {};

const FeaturedList: BsPrefixRefForwardingComponent<'ul', FeaturedListProps> = React.forwardRef<HTMLElement, FeaturedListProps>(
  (
    {
      bsPrefix,
      // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
      as: Component = 'ul',
      className,
      ...props
    },
    ref
  ) => {
    bsPrefix = useBootstrapPrefix(bsPrefix, 'featured-list');
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

FeaturedList.propTypes = propTypes;
FeaturedList.defaultProps = defaultProps;

export default Object.assign(FeaturedList, {
  Item: FeaturedListItem,
  Icon: FeaturedListIcon
});
