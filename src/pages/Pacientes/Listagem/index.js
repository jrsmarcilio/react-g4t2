import React, { useState, useEffect, memo } from "react";
import Skeleton from "react-loading-skeleton";

import Patients from "./Containers/Patients";
import Pagination from "./Containers/Pagination";

import api from "../../../services/api";

function ListsPatients() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrenPage] = useState(1);
  const [patientPerPage] = useState(5);

  useEffect(() => {
    const fetchPatients = async () => {
      const res = await api.get("patient", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setTimeout(() => {
        setLoading(false);
        setPatients(res.data);
      }, 2000);
    };
    fetchPatients();
  }, []);

  const indexOfLastPatient = currentPage * patientPerPage;
  const indexOfFirstPatient = indexOfLastPatient - patientPerPage;
  const currentPatients = patients.slice(
    indexOfFirstPatient,
    indexOfLastPatient
  );

  const paginate = (pageNumber) => setCurrenPage(pageNumber);

  return (
    <>
      {loading ? (
        <Skeleton height={40} width="62rem" count={6} />
      ) : (
        <>
          <Patients patients={currentPatients} loading={loading} />
          <Pagination
            patientPerPage={patientPerPage}
            totalPatients={patients.length}
            paginate={paginate}
          />
        </>
      )}
    </>
  );
}

export default memo(ListsPatients);
