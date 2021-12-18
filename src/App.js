import { Component } from "react";
import "./App.css";
import villagerData from "./data";
import VillagerCard from "./VillagerCard";

class App extends Component {
  constructor() {
    super();

    this.state = {
      villagerData: villagerData,
      currentVillager: villagerData.wol00,
      villagers: [],
      
    };
  }

  changeVillager = () => {
    const currentVillagerId = Math.ceil(
      Math.random() * Object.keys(villagerData).length
    );
    const currentVillager = Object.values(villagerData).find(
      (villager) => villager.id === currentVillagerId
    );

    this.setState({ currentVillager });
  };

  addVillager = () => {
    const { villagers, currentVillager } = this.state;

    this.setState({
      villagers: [...villagers, currentVillager],
    });
  };

  handleReset = () => {
    this.setState({
      villagers: []
    });
  };

  removeChar = (e) => {
    let newList = this.state.villagers.splice(e.target.id, 1);
    this.setState({newList})
  }


  render() {
    const { villagers, currentVillager } = this.state;
    console.log(villagers);
    const villagersToDisplay = villagers.map((villager, i) => {
      console.log(i)
      return (
        <VillagerCard
          index = {i}
          key={i}
          villager={villager}
          villagers = {this.state.villagers}
          removeChar = {this.removeChar}
        />
      );
    });

    return (
      <div className="App">
        <h1>Animal Crossing Villagers</h1>
        <div>
          <button onClick={this.changeVillager}>Change villager</button>
          <button onClick={this.addVillager}>Add villager to village</button>
          <button onClick={this.handleReset}>Clear Village</button>
          <div>
            Currently selected villager: {currentVillager.name["name-USen"]}
          </div>
          <div>Number of villagers in village: {villagers.length}</div>
          <div className="villager-grid">{villagersToDisplay}</div>
        </div>
      </div>
    );
  }
}

export default App;