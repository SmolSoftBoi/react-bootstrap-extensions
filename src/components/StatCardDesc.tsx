import React from 'react';
import classNames from 'classnames';
import { BsPrefixProps, BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';
import { useBootstrapPrefix } from 'react-bootstrap/esm/ThemeProvider';

export interface StatCardDescProps extends React.HTMLAttributes<HTMLElement>, BsPrefixProps {};

const propTypes = {};

const defaultProps: StatCardDescProps = {};

const StatCardDesc: BsPrefixRefForwardingComponent<'span', StatCardDescProps> = React.forwardRef<HTMLElement, StatCardDescProps>(
  (
    {
      bsPrefix,
      // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
      as: Component = 'span',
      className,
      ...props
    },
    ref
  ) => {
    bsPrefix = useBootstrapPrefix(bsPrefix, 'statcard-desc');
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

StatCardDesc.propTypes = propTypes;
StatCardDesc.defaultProps = defaultProps;

export default StatCardDesc;
