import * as React from "react";
import httpCommon from "../../util/http-common";

export default function useAxiosPost(url, payload) {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (url !== undefined && url !== "") {
      reFetch(url, payload);
    }
  }, []);

  const reFetch = React.useCallback(async (url, payload) => {
    setLoading(true);
    try {
      const response = await httpCommon.post(url, payload);
      console.log(response);
      setData(response);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    data,
    loading,
    error,
    reFetch,
  };
}
