import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function CompanyDetails({ open, handleClose }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          sx={{
            fontSize: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "blue",
          }}
        >
          <Box component="span" fontWeight="fontWeightBold">
            COMPANY DETAILS
          </Box>
        </Typography>

        <Typography id="modal-modal-title" variant="h6" component="h2">
          <b>Name</b>
          <p>Geeksynergy Technologies Pvt Ltd</p>
          <b>Address</b>
          <p>Sanjayanagar, Bengaluru-56</p>
          <b>Phone</b>
          <p>XXXXXXXX09</p>
          <b>Email</b>
          <p>XXXXXXXX@gmail.com</p>
        </Typography>
      </Box>
    </Modal>
  );
}
