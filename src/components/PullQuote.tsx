import React from 'react';
import classNames from 'classnames';
import { BsPrefixProps, BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';
import { useBootstrapPrefix } from 'react-bootstrap/esm/ThemeProvider';

export interface PullQuoteProps extends React.HTMLAttributes<HTMLElement>, BsPrefixProps {};

const propTypes = {};

const defaultProps: PullQuoteProps = {};

const PullQuote: BsPrefixRefForwardingComponent<'blockquote', PullQuoteProps> = React.forwardRef<HTMLElement, PullQuoteProps>(
  (
    {
      bsPrefix,
      // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
      as: Component = 'blockquote',
      className,
      ...props
    },
    ref
  ) => {
    bsPrefix = useBootstrapPrefix(bsPrefix, 'pull-quote');
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

PullQuote.propTypes = propTypes;
PullQuote.defaultProps = defaultProps;

export default PullQuote;
