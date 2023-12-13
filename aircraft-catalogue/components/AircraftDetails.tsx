import { AircraftProps } from "@/types";
import React from "react";

interface AircraftDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  aircraft: AircraftProps;
}

const AircraftDetails = ({
  isOpen,
  closeModal,
  aircraft,
}: AircraftDetailsProps) => {
  return <div>AircraftDetails</div>;
};

export default AircraftDetails;
