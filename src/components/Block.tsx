import React from 'react';
import classNames from 'classnames';
import { BsPrefixProps, BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';
import { useBootstrapPrefix } from 'react-bootstrap/esm/ThemeProvider';
import PropTypes from 'prop-types';
import BlockBackground from './BlockBackground';
import BlockForeground from './BlockForeground';
import BlockTitle from './BlockTitle';

export interface BlockProps extends React.HTMLAttributes<HTMLElement>, BsPrefixProps {
  variant?: 'dark' | string;
};

const propTypes = {

  /**
   * The general visual variant a the Block.
   */
  variant: PropTypes.string
};

const defaultProps: BlockProps = {};

const Block: BsPrefixRefForwardingComponent<'div', BlockProps> = React.forwardRef<HTMLElement, BlockProps>(
  (
    {
      bsPrefix,
      // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
      as: Component = 'div',
      className,
      variant,
      ...props
    },
    ref
  ) => {
    bsPrefix = useBootstrapPrefix(bsPrefix, 'block');
    const bsBlockPrefix = `${bsPrefix}`;

    return (
      <Component
        ref={ref}
        {...props}
        className={classNames(
          className,
          bsBlockPrefix,
          variant && `${bsPrefix}-${variant}`
        )}
      />
    );
  }
);

Block.propTypes = propTypes;
Block.defaultProps = defaultProps;

export default Object.assign(Block, {
  Background: BlockBackground,
  Foreground: BlockForeground,
  Title: BlockTitle
});
