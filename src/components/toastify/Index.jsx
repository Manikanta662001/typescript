import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

function Index() {
  const notify = () => {
    toast("Wow so easy");
    toast.success("Success Notification", {
      position: "bottom-center",
      autoClose: 3000,
      style: { backgroundColor: "green", color: "white" },
    });
    toast.error("Error Notification", {
      position: "bottom-left",
      autoClose: 3000,
    });
    toast.info("Info Notification", {
      position: "top-center",
      autoClose: 5000,
      // hideProgressBar: true,
    });
    toast.warning("Warning Notification", {
      position: "bottom-right",
      autoClose: 3000,
      draggable: true,
      closeOnClick: true,
    });
    toast.info("Info Notification", {
      position: "top-left",
      autoClose: 5000,
      className: "toast-info",
    });
  };
  return (
    <div>
      <h1>Toastify</h1>
      <button onClick={notify}>Notify</button>
      <ToastContainer />
    </div>
  );
}

export default Index;
