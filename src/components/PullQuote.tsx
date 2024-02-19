import React from 'react';
import classNames from 'classnames';
import { BsPrefixProps } from 'react-bootstrap/esm/helpers';
import { useBootstrapPrefix } from 'react-bootstrap/esm/ThemeProvider';
import PropTypes from 'prop-types';

export interface PullQuoteProps extends React.HTMLAttributes<HTMLElement>, BsPrefixProps {

  /**
   * The general visual variant a the Pull Quote.
   */
  variant?: 'dark' | string;
};

const propTypes = {
  
  /**
   * The general visual variant a the Pull Quote.
   */
  variant: PropTypes.string
};

const defaultProps: PullQuoteProps = {};

const PullQuote: React.ForwardRefExoticComponent<PullQuoteProps & React.RefAttributes<HTMLElement>> = React.forwardRef<HTMLElement, PullQuoteProps>(
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
