import React from "react";
import { createItems } from "./utils";

class ItemsUpdater extends React.Component {
  static defaultProps = {
    fields: ["organizations", "branches", "accountTypes"]
  };

  componentDidUpdate(prevProps) {
    console.log(`[${Date.now()}][ItemsUpdater]`, this.props);

    if (this.shouldUpdateItems(prevProps)) {
      this.updateItems();
    }
  }

  shouldUpdateItems(prevProps) {
    return !this.props.updating && this.props.values !== prevProps.values;
  }

  updateItems() {
    // const items = await fetchItems(this.props.values)
    this.props.onChange(createItems(this.props.values));
  }

  render() {
    return null;
  }
}

export default ItemsUpdater;
