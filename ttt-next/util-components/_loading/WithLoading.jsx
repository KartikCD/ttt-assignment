import * as React from "react";
import { ImSpinner8 } from "react-icons/im";
import styles from "./WithLoading.module.css";

export const WithLoading = React.memo(({ loading, children }) => {
  if (loading) {
    return (
      <div>
        <ImSpinner8 className={styles.spinner} />
      </div>
    );
  }

  return <>{children}</>;
});
