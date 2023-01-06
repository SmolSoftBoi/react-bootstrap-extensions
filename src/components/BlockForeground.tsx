import React from 'react';
import classNames from 'classnames';
import { BsPrefixProps, BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';
import { useBootstrapPrefix } from 'react-bootstrap/esm/ThemeProvider';

export interface BlockForegroundProps extends React.HTMLAttributes<HTMLElement>, BsPrefixProps {};

const propTypes = {};

const defaultProps: BlockForegroundProps = {};

const BlockForeground: BsPrefixRefForwardingComponent<'div', BlockForegroundProps> = React.forwardRef<HTMLElement, BlockForegroundProps>(
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
    bsPrefix = useBootstrapPrefix(bsPrefix, 'block-foreground');
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

BlockForeground.propTypes = propTypes;
BlockForeground.defaultProps = defaultProps;

export default BlockForeground;
