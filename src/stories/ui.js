import { Dimensions } from "react-native";

const { height } = Dimensions.get("window");

const iconSizes = {
  "vsmall": [80, 110],
  "small": [100, 130],
  "medium": [150, 180],
  "large": [180, 210],
};

export default {
  get itemSize() {
    return (height < 752) ? 180 : 210;
  },
    getColumns(size) {

    if (size === "vsmall"){
      return 6
    }
    else if (size === "small"){
      return 5
    }
    else if (size === "medium"){
      return 4
    }
    else if (size === "large"){
      return 3
    }

  }, getFontSize(size) {

    if (size === "vsmall"){
      return 12
    }
    else if (size === "small"){
      return 16
    }
    else if (size === "medium"){
      return 20
    }
    else if (size === "large"){
      return 24
    }

  },
  getIconSize(size) {
    const mappedSize = (height < 752) ? 0 : 1;
    return iconSizes[size][mappedSize];
  }
};
