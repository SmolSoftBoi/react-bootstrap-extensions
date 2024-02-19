import React from 'react';
import classNames from 'classnames';
import { BsPrefixProps } from 'react-bootstrap/esm/helpers';
import { useBootstrapPrefix } from 'react-bootstrap/esm/ThemeProvider';

export interface IconListProps extends React.HTMLAttributes<HTMLElement>, BsPrefixProps {};

const propTypes = {};

const defaultProps: IconListProps = {};

const IconList: React.ForwardRefExoticComponent<IconListProps & React.RefAttributes<HTMLElement>> = React.forwardRef<HTMLElement, IconListProps>(
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
    bsPrefix = useBootstrapPrefix(bsPrefix, 'list-icon');
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

IconList.propTypes = propTypes;
IconList.defaultProps = defaultProps;

export default IconList;
