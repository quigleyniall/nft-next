import { Grid } from "@mui/material";
import LineItem from "../../components/Leaderboards/LineItem";
import { useContext, useEffect, useState } from "react";
import { CustomTheme } from "../../context/theme";
import axios from "axios";
import Dashboard from "@/components/Dashboard/Dashboard";
import {ErrorMsg} from "@/components/typography/typography"

const Leaderboards = () => {
  const { theme } = useContext(CustomTheme);
  const [users, setUsers] = useState([]);
  const [userData, setUserData] = useState([])
  const [errorSet, setError] = useState(false);

  useEffect(() => {
    const closed = async () => {
      try {
        const { data } = await axios.get(`/api/closed`);
     
        const userData = data.reduce((initial, curr) => {
          initial[curr.name] = initial[curr.name] + curr.amount || curr.amount;
          return initial
        }, {});
        setUserData(userData);
        console.log(userData);
        setUsers(data);
      } catch (err) {
        console.log('hithere', err);
          setError(true);
        }
    };
    closed();
  }, []);

  return (
    <Dashboard>
      <Grid
        rowSpacing={3}
        item
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ padding: "32px", background: 'background.page' }}
      >
       {errorSet && <ErrorMsg>Whoops! Something went wrong!</ErrorMsg>}
        {Object.keys(userData).map((user, index) => (
           <LineItem name={user} amount={`$${userData[user]}`} key={index} />
        ))}
      </Grid>
    </Dashboard>
  );
};

export default Leaderboards;
