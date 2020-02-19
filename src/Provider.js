import React from "react";
import ItemsUpdater from "./ItemsUpdater";
import ValuesUpdater from "./ValuesUpdater";

const fields = ["organizations", "branches", "accountTypes"];

class Provider extends React.Component {
  state = {
    values: {
      organizations: [],
      branches: [],
      accountTypes: []
    },
    items: {
      organizations: ["1", "2", "3"],
      branches: ["10", "20", "30"],
      accountTypes: ["100", "200", "300", "400", "500", "600", "700"]
    },
    updating: false
  };
  sdfsf;
  componentDidUpdate(prevProps, prevState) {
    console.log(`[${Date.now()}][Provider][cDU]`);

    const { updating } = this.state;
    if (updating && updating !== prevState.updating) {
      this.setState({ updating: false });
    }
  }

  handleInputChange = event => {
    const { name, value, type, selectedOptions } = event.target;
    this.setState(({ values }) => ({
      values: {
        ...values,
        [name]:
          type === "select-multiple"
            ? [...selectedOptions].map(({ value }) => value)
            : value
      }
    }));
  };

  handleItemsChange = items => {
    this.setState(state => ({
      items: { ...state.items, ...items }
    }));
  };

  handleValuesChange = values => {
    this.setState(state => ({
      values: { ...state.values, ...values },
      updating: true
    }));
  };

  renderSelect(name) {
    const { values, items } = this.state;
    return (
      <select
        multiple
        size={10}
        style={{ width: 173 }}
        name={name}
        value={values[name]}
        onChange={this.handleInputChange}
      >
        {items[name].map((value, key) => (
          <option key={key} value={value}>
            Item: {value}
          </option>
        ))}
      </select>
    );
  }

  render() {
    const { values, items, updating } = this.state;
    return (
      <div>
        {this.renderSelect("organizations")}
        {this.renderSelect("branches")}
        {this.renderSelect("accountTypes")}
        <ItemsUpdater
          fields={fields}
          values={values}
          updating={updating}
          onChange={this.handleItemsChange}
        />
        <ValuesUpdater
          fields={fields}
          values={values}
          items={items}
          updating={updating}
          onChange={this.handleValuesChange}
        />
      </div>
    );
  }
}

export default Provider;
