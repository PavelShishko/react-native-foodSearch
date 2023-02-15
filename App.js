import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import RestaurantsShowScreen from "./src/Screens/RestaurantsShowScreen";
import SearchScreen from "./src/Screens/SearchScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    RestaurantsShow: RestaurantsShowScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search",
    },
  }
);

export default createAppContainer(navigator);
