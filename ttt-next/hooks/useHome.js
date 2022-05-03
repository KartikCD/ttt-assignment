import * as React from "react";
import useAxiosPost from "./requests/useAxiosPost";

function useHome() {
  const [rollNumbers, setRollNumbers] = React.useState("");
  const { data, loading, error, reFetch } = useAxiosPost();

  const onChange = React.useCallback(
    (e) => {
      setRollNumbers(e.target.value);
    },
    [setRollNumbers]
  );

  const onClick = React.useCallback(() => {
    const body = {
      roll_numbers: rollNumbers.split(","),
    };
    reFetch("/results", body);
  }, [rollNumbers, reFetch]);

  return {
    rollNumbers,
    onChange,
    onClick,
    data,
    loading,
    error,
  };
}

export default useHome;
