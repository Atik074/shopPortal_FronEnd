import Swal from "sweetalert2";

const handleError = (err, customMessage = "Something went wrong!") => {
  const errorMsg = err?.response?.data?.message || err.message || customMessage;

  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: errorMsg,
  });

  return errorMsg;
};

export default handleError;
