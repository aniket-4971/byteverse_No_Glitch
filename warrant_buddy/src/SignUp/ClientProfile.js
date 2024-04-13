import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function ClientProfile() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validationMessage, setValidationMessage] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [clientName, setClientName] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [address, setAddress] = useState("");
  const [cityname,setCityname ] = useState("");
  const [country,setCountry ] = useState("");
  const [pincode,setPincode ] = useState("");
  const [phonenumber,setPhonenumber ] = useState("");
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      setValidationMessage("Passwords match!");
      try {
        const response = await fetch("http://localhost:5000/user/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify
          ({
            name: clientName,
            AadharNo: aadharNumber,
            address:address,
            cityname:cityname,
            country :country,
            pincode :pincode,
            phonenumber:phonenumber,
            password:password
        }),
        });
        if (response.ok) {
          navigate("/login");
          // Form data successfully submitted     JSON.stringify
          // You can perform additional actions here, e.g., display success message, redirect user, etc.
        } else {
          const errorData = await response.json();
          setValidationMessage(errorData.error || "Failed to submit form data");
        }
      } catch (error) {
        console.error("Error submitting form data:", error);
        setValidationMessage("Failed to submit form data");
      }
    } else {
      setValidationMessage("Passwords do not match!");
    }
    
  };
  const handleNameChange = (event) => {
    setClientName(event.target.value); // Update clientName state
  };
  const handleAadharChange = (event) => {
    // Update aadharNumber state after parsing the input value as an integer
    setAadharNumber(parseInt(event.target.value));
  };
  const handleAddress = (event) => {
    setAddress(event.target.value); // Update clientName state
  };
  const handleCityname = (event) => {
    setCityname(event.target.value); // Update clientName state
  };
  const handleCountry = (event) => {
    setCountry(event.target.value); // Update clientName state
  };
  const handlePincode = (event) => {
    setPincode(event.target.value); // Update clientName state
  };
  const handlePhonenumber = (event) => {
    setPhonenumber(event.target.value); // Update clientName state
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };
  return (
    <div className="d-flex justify-content-center profileCard">
      <div class="containerClientProfile m-4  p-2 d-flex justify-content-center align-items-center">
        <div>
          <div
            className="d-flex justify-content-center"
            style={{
              color: "#0056b3",
            }}
          >
            <h4>Add Contact Information</h4>
          </div>
          <form class="row g-3" onSubmit={handleSubmit}>
            <div className="col-12 DP  d-flex justify-content-center">
              {selectedImage && (
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt="Selected"
                  style={{
                    width: "60px",
                    height: "60px",
                    objectFit: "cover",
                    borderRadius: "50%",
                    border: "2px solid #0056b3",
                    // margin: "10px",
                  }}
                />
              )}
            </div>
            <div className="col-12">
              <label htmlFor="image" className="form-label">
                Upload Image
              </label>
              <input
                type="file"
                className="form-control"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
                required
              />
            </div>

            <div class="col-md-6">
              <label for="name" class="form-label">
                Name
              </label>
              <input
                type="text"
                value={clientName}
                onChange={handleNameChange}
                class="form-control"
                id="inputEmail4"
                required
              />
            </div>
            <div class="col-md-6">
              <label for="aadharNumber" class="form-label">
                Aadhar Number
              </label>
              <input
                type="number"
                class="form-control"
                id="inputPassword4"
                value={aadharNumber}
                onChange={handleAadharChange}
                required
              />
            </div>
            <div class="col-12">
              <label for="inputAddress" class="form-label">
                Address
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                value={address}
                onChange={handleAddress}
                required
              />
            </div>

            <div class="col-md-6">
              <label for="cityName" class="form-label">
                City Name
              </label>
              <input
                type="text"
                class="form-control"
                id="inputEmail4"
                value={cityname}
                onChange={handleCityname}
                required
              />
            </div>
            <div class="col-md-6">
              <label for="country" class="form-label">
                Country
              </label>
              <input
                type="text"
                class="form-control"
                id="inputPassword4"
                value={country}
                onChange={handleCountry}
                required
              />
            </div>
            <div class="col-md-6">
              <label for="pinCode" class="form-label">
                Pin Code
              </label>
              <input
                type="number"
                class="form-control"
                id="inputEmail4"
                value={pincode}
                onChange={handlePincode}
                required
              />
            </div>
            <div class="col-md-6">
              <label for="phoneNumber" class="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                class="form-control"
                id="inputPassword4"
                value={phonenumber}
                onChange={handlePhonenumber}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="password" className="form-label">
                Enter Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
            </div>
            <div className="col-12">
              <p>{validationMessage}</p>
            </div>
            <div class="col-12">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label class="form-check-label" for="gridCheck">
                  Remember me
                </label>
              </div>
            </div>

            <div className="col-12 d-flex justify-content-center">
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ClientProfile;