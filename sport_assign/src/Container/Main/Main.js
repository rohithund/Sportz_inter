import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";

import NavBar from "../../components/NavBar/NavBar";
import CardItems from "../../components/CardItems/CardItems";
import Footer from "../../components/Footer/Footer";

function Main() {
  const [players, setPlayers] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch(
          "https://api.npoint.io/20c1afef1661881ddc9c"
        );
        const data = await response.json();
        console.log(data);
        setPlayers(data.playerList);
      } catch (error) {
        console.error("Error fetching player data: ", error);
      }
    };
    fetchPlayers();
  }, []);

  const filteredPlayers = players
    .filter(
      (player) =>
        player.PFName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        player.TName.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => a.Value - b.Value);

  return (
    <div>
      <NavBar
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <Container>
        <div className="row">
          {filteredPlayers.map((player) => (
            <div className="col-sm-3 mt-4" key={player.Id}>
              <CardItems
                src={`/player-images/${player.Id}.jpg`}
                alt={player.PFName}
                PFName={player.PFName}
                SkillDesc={player.SkillDesc}
                Value={player.Value}
              />
            </div>
          ))}
          {filteredPlayers.length === 0 && (
            <div className="d-flex justify-content-center align-items-center mt-5">
              <div className="text-center fw-bold text-danger">
                No search results found.
              </div>
            </div>
          )}
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Main;
