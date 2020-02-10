import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getCurrentUser } from "app/selectors/selector";
import { Redirect, Route } from "react-router";

interface PrivateProps {
  component: React.FC;
  currentUser: boolean;
  path: string;
}

const PrivateRoute: React.FC<any> = ({
  currentUser,
  component: WrappedComponent,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props: any) => {
        return currentUser ? (
          <WrappedComponent {...props} />
        ) : (
            <Redirect to="/login" />
          );
      }}
    />
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: getCurrentUser()
});

export default connect(mapStateToProps)(PrivateRoute);
