import { useContext } from "react";
import { DetailsContext } from "../context/details-context/detailsContext";

export const useDetailsContext = () => useContext(DetailsContext)