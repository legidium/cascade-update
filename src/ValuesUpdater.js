import React from "react";
import { createValues } from "./utils";

class ValuesUpdater extends React.Component {
  static defaultProps = {
    fields: ["organizations", "branches", "accountTypes"]
  };

  componentDidMount() {
    console.log("[ValuesUpdater] cDM");
  }

  componentDidUpdate(prevProps) {
    console.log(`[${Date.now()}][ItemsUpdater]cDU`);

    if (this.shouldUpdateValues(prevProps)) {
      this.updateValues();
    }
  }

  shouldUpdateValues(prevProps) {
    return !this.props.updating && this.props.items !== prevProps.items;
  }

  updateValues() {
    const { organizations, ...values } = createValues(
      this.props.values,
      this.props.items
    );
    this.props.onChange(values);
  }

  render() {
    return null;
  }
}

export default ValuesUpdater;
