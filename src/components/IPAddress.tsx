import React, { useEffect, useState } from "react";

function IPAddress() {
  const [data, setData] = useState('');
  const [ipaddress, setIpAddress] = useState("");
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIpAddress(data.ip);
        setLat(data.latitude);
        setLong(data.longitude);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);
  return (
    <div>
      <h1>IPAddress</h1>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}

export default IPAddress;
