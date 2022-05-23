import React, { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  Button,
  Snackbar,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { decrement, increment, reset } from "../redux/reducers/counterReducer";

const Counter: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const resetCounter = (): void => {
    // Update Redux store
    dispatch(reset());
    // Update local state
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Box style={styles.container}>
      <Stack spacing={2}>
        <Typography variant="h1">{count}</Typography>
        <Stack spacing={3} direction="row">
          <Button
            variant="contained"
            color="info"
            onClick={() => dispatch(decrement())}
          >
            {"-"}
          </Button>
          <Button variant="outlined" color="info" onClick={resetCounter}>
            Reset
          </Button>
          <Button
            variant="contained"
            color="info"
            onClick={() => dispatch(increment())}
          >
            {"+"}
          </Button>
          <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            message="Counter reset"
            action={action}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

const styles = {
  container: {
    padding: 6,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  } as React.CSSProperties,
};

export default Counter;
