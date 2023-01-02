import React from 'react';
import classNames from 'classnames';
import { BsPrefixProps, BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';
import { useBootstrapPrefix } from 'react-bootstrap/esm/ThemeProvider';

export interface BlockTitleProps extends React.HTMLAttributes<HTMLElement>, BsPrefixProps {};

const propTypes = {};

const defaultProps: BlockTitleProps = {};

const BlockTitle: BsPrefixRefForwardingComponent<'h1', BlockTitleProps> = React.forwardRef<HTMLElement, BlockTitleProps>(
  (
    {
      bsPrefix,
      // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
      as: Component = 'h1',
      className,
      ...props
    },
    ref
  ) => {
    bsPrefix = useBootstrapPrefix(bsPrefix, 'block-title');
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

BlockTitle.propTypes = propTypes;
BlockTitle.defaultProps = defaultProps;

export default BlockTitle;
