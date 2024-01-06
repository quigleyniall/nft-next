import { Snackbar } from "@/context/snackbar";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

export const useDataSource = ({ url, errorMsg = "", successNoResultMsg = "" }) => {
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const { addMessage } = useContext(Snackbar);

  useEffect(() => {
    setPending(true);
    const getData = async () => {
      try {
        const { data } = await axios.get(url);
        setData(data);
        setSuccess(true);
      } catch (err) {
        console.log(err);
        setError(true);
        addMessage(err.message, "error");
      }

      setPending(false);
    };
    getData();
  }, []);

  return {
    data,
    statuses: {
        pending,
        success: { status: success, msg: data.length  === 0 ? successNoResultMsg : '' },
        error: { status: error, msg: errorMsg },
    }
   
  };
};
