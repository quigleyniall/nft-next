import { Grid } from "@mui/material";
import LineItem from "../../components/Leaderboards/LineItem";
import { useContext, useEffect, useState } from "react";
import { CustomTheme } from "../../context/theme";
import axios from "axios";
import Dashboard from "@/components/Dashboard/Dashboard";

const Leaderboards = () => {
  const { theme } = useContext(CustomTheme);
  const [users, setUsers] = useState([]);
  const [userData, setUserData] = useState([])

  useEffect(() => {
    const closed = async () => {
      const { data } = await axios.get(`/api/closed`);
      const userData = data.reduce((initial, curr) => {
        initial[curr.name] = initial[curr.name] + curr.amount || curr.amount;
        return initial
      }, {});
      setUserData(userData);
      console.log(userData);
      setUsers(data);
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
        {/* {users.map(({ ...props }, index) => (
          <LineItem {...props} key={index} />
        ))} */}
        {Object.keys(userData).map((user, index) => (
           <LineItem name={user} amount={`$${userData[user]}`} key={index} />
        ))}
      </Grid>
    </Dashboard>
  );
};

export default Leaderboards;
