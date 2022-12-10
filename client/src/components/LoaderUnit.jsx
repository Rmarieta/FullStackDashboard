import Loader from "assets/loading.gif";
const { Box } = require("@mui/material");

const LoaderUnit = () => {
  return (
    <Box display="flex" justifyContent="center" width="max" pt="25vh">
      <img src={Loader} alt="Loading..." width={35} height={35} />
    </Box>
  );
};

export default LoaderUnit;
