import React from 'react';
import classNames from 'classnames';
import { BsPrefixProps } from 'react-bootstrap/esm/helpers';
import { useBootstrapPrefix } from 'react-bootstrap/esm/ThemeProvider';

export interface BlockBackgroundProps extends React.HTMLAttributes<HTMLElement>, BsPrefixProps {};

const propTypes = {};

const defaultProps: BlockBackgroundProps = {};

const BlockBackground: React.ForwardRefExoticComponent<BlockBackgroundProps & React.RefAttributes<HTMLElement>> = React.forwardRef<HTMLElement, BlockBackgroundProps>(
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
    bsPrefix = useBootstrapPrefix(bsPrefix, 'block-background');
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

BlockBackground.propTypes = propTypes;
BlockBackground.defaultProps = defaultProps;

export default BlockBackground;
