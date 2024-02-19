import React from 'react';
import classNames from 'classnames';
import { BsPrefixProps } from 'react-bootstrap/esm/helpers';
import { useBootstrapPrefix } from 'react-bootstrap/esm/ThemeProvider';
import StatCardDesc from './StatCardDesc';
import StatCardNumber from './StatCardNumber';

export interface StatCardProps extends React.HTMLAttributes<HTMLElement>, BsPrefixProps {};

const propTypes = {};

const defaultProps: StatCardProps = {};

const StatCard: React.ForwardRefExoticComponent<StatCardProps & React.RefAttributes<HTMLElement>> = React.forwardRef<HTMLElement, StatCardProps>(
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
    bsPrefix = useBootstrapPrefix(bsPrefix, 'statcard');
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

StatCard.propTypes = propTypes;
StatCard.defaultProps = defaultProps;

export default Object.assign(StatCard, {
  Desc: StatCardDesc,
  Number: StatCardNumber
});
