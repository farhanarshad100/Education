// withLoading.js
import React from "react";

function withLoading(WrappedComponent) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <p>Loading data...</p>;
    }

    // Pass all other props down
    return <WrappedComponent {...props} />;
  };
}

export default withLoading;
