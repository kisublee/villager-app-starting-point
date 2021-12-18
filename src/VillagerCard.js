import { Component } from "react";

class VillagerCard extends Component {
 
    

  render() {
    const { image_uri } = this.props.villager;
    console.log(this.props.index)
    return (
      <div className="villager-card" >
        <img src={image_uri} alt="villager" />
        <button id={this.props.index} onClick={this.props.removeChar}>reset</button>
      </div>
    );
  }
}

export default VillagerCard;