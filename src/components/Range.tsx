import React, { Component } from 'react';
interface Attribute {
  name: string;
  value: number;
  unit: string;
}

interface Attributes extends Array<Attribute> { }

interface Props {
  data: Attributes;
}
interface State {
  currentItem: number;
}

class Range extends Component<Props, State> {
  state = {
    currentItem: 0,
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ currentItem: Number(event.target.value) });
  };

  render() {
    const { data } = this.props;
    const { currentItem } = this.state;

    return (
      <div>
        <input
          type="range"
          min={0}
          max={data.length - 1}
          value={currentItem}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Range;
