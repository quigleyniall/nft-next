import { Card, Grid } from "@mui/material";
import LineItem from "../../components/Leaderboards/LineItem";
import { useContext, useEffect, useState } from "react";
import Dashboard from "@/components/Dashboard/Dashboard";
import { ErrorMsg } from "@/components/typography/typography";
import { useDataSource } from "@/hooks/useDataSource";



const Leaderboards = () => {
  const [userData, setUserData] = useState([]);
  const { data, pending, error, success } = useDataSource({url: `/api/closed`});

  useEffect(() => {
    if (data.length === 0) return;
    const userData = data.reduce((initial, curr) => {
      initial[curr.name] = initial[curr.name] + curr.amount || curr.amount;
      return initial;
    }, {});
    setUserData(userData);
  }, [data]);

  return (
    <Dashboard pending={pending} error={error} success={success} data={data} >
          
      <Grid
        rowSpacing={3}
        item
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ padding: "32px", background: "background.page" }}
      >
        
        {Object.keys(userData).map((user, index) => (
          <LineItem name={user} amount={`$${userData[user]}`} key={index} />
        ))}
      </Grid>
    </Dashboard>
  );
};

export default Leaderboards;
