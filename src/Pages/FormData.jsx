import { useLocation } from "react-router-dom";
function FormData({}) {
  const { state } = useLocation();
  const formData = state.formData;

  const viewingType = state.propertyType;
  return (
    <div>
      <p>City: {formData.city}</p>
      <p>Price: {formData.price}</p>
      <p>Viewing Type (buy/sell/rent): {viewingType}</p>
    </div>
  );
}

export default FormData;
