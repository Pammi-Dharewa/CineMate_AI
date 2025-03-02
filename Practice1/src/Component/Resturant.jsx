import React, { useState } from "react";

function Resturant() {
  const [showTable, setShowTable] = useState(false);
  const [showPerson, setShowPerson] = useState(false);
  const [person, setPerson] = useState(1);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [details, setDetails] = useState(false);
  const [name, setName] = useState("");
  const [num, setNum] = useState("");

  const handleClick = () => {
    if (!name || !num) {
      return alert("Please fill out the contact details form.");
    }

    alert(`Booking confirmed! 
      Date: ${date} 
      Time: ${time} 
      Persons: ${person}
      Name: ${name}
      Phone: ${num}`);
    
    // Reset all state variables to go back to the initial view
    setShowTable(false);
    setShowPerson(false);
    setPerson(1);
    setDate("");
    setTime("");
    setDetails(false);
    setName("");
    setNum("");
  };

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="p-6">
      {!details ? (
        !showTable ? (
          <button
            className="bg-blue-500 p-3 rounded-md text-white"
            onClick={() => setShowTable(true)}
          >
            Book a Table
          </button>
        ) : (
          <div className="bg-gray-100 p-6 rounded-md shadow-md">
            <h5 className="font-bold mb-4">Book a Table</h5>
            <div>
              <div className="bg-blue-100 mb-4 p-4 rounded-md">
                <label>Number of Persons:</label>
                <input
                  value={person}
                  onClick={() => setShowPerson(!showPerson)}
                  readOnly
                  type="text"
                  className="p-2 w-full border rounded-md cursor-pointer"
                />
                {showPerson && (
                  <div className="z-10 w-full grid grid-cols-4 gap-2 bg-blue-200 p-4">
                    {arr.map((ele) => (
                      <div
                        key={ele}
                        className="border p-2 text-center cursor-pointer hover:bg-blue-500 hover:text-white"
                        onClick={() => {
                          setPerson(ele);
                          setShowPerson(false);
                        }}
                      >
                        {ele}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="bg-blue-100 mb-4 p-4 rounded-md">
                <label>Date:</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="p-2 w-full border rounded-md"
                />
              </div>

              <div className="bg-blue-100 mb-4 p-4 rounded-md">
                <label>Time:</label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="p-2 w-full border rounded-md"
                />
              </div>

              <button
                onClick={() => {
                  if (!person || !date || !time) {
                    return alert("Please fill out all booking details.");
                  }
                  setDetails(true);
                  setShowTable(false);
                }}
                className="bg-blue-500 p-3 rounded-md text-white"
              >
                Book Now
              </button>
            </div>
          </div>
        )
      ) : (
        <div className="bg-gray-100 p-6 rounded-md shadow-md">
          <h5 className="font-bold mb-4">Contact Details</h5>
          <p>
            {`You are making a reservation for ${person} person(s) on ${date} at ${time}.`}
          </p>
          <div className="bg-blue-100 mb-4 p-4 rounded-md">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-2 w-full border rounded-md"
            />
          </div>
          <div className="bg-blue-100 mb-4 p-4 rounded-md">
            <label>Phone Number:</label>
            <input
              type="text"
              value={num}
              onChange={(e) => setNum(e.target.value)}
              className="p-2 w-full border rounded-md"
            />
          </div>
          <button
            onClick={handleClick}
            className="bg-blue-500 p-3 rounded-md text-white"
          >
            Confirm Booking
          </button>
        </div>
      )}
    </div>
  );
}

export default Resturant;
