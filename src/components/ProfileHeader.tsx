import React from 'react';
import classNames from 'classnames';
import { BsPrefixProps } from 'react-bootstrap/esm/helpers';
import { useBootstrapPrefix } from 'react-bootstrap/esm/ThemeProvider';

export interface ProfileHeaderProps extends React.HTMLAttributes<HTMLElement>, BsPrefixProps {};

const propTypes = {};

const defaultProps: ProfileHeaderProps = {};

const ProfileHeader: React.ForwardRefExoticComponent<ProfileHeaderProps & React.RefAttributes<HTMLElement>> = React.forwardRef<HTMLElement, ProfileHeaderProps>(
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
    bsPrefix = useBootstrapPrefix(bsPrefix, 'profile-header');
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

ProfileHeader.propTypes = propTypes;
ProfileHeader.defaultProps = defaultProps;

export default ProfileHeader;
