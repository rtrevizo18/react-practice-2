import PlaceList from "../components/PlaceList";

import { useParams } from "react-router-dom";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://flatironnomad.nyc/wp-content/uploads/2023/04/esb-header-history-scaled.jpg",
    address: "20 W 34th St., New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9882393,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Emp. State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://flatironnomad.nyc/wp-content/uploads/2023/04/esb-header-history-scaled.jpg",
    address: "20 W 34th St., New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9882393,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
