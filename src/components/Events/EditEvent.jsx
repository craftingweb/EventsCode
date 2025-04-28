import { Link, useNavigate, useParams } from "react-router-dom";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { useQuery } from "@tanstack/react-query";
import { fetchEvents } from "../../util/http.js";

export default function EditEvent() {
  const navigate = useNavigate();
  const params = useParams();

  const { data, isPending } = useQuery({
    queryKey: ["events", params.id],
    queryFn: ({ signal }) => fetchEvents({ signal, id: params.id }),
  });

  function handleSubmit(formData) {}

  function handleClose() {
    navigate("../");
  }

  return (
    <Modal onClose={handleClose}>
      <EventForm inputData={data} onSubmit={handleSubmit}>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Update
        </button>
      </EventForm>
    </Modal>
  );
}
