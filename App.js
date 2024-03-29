import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CalculatorScreen from "./components/CalculatorScreen";
import HistoryScreen from "./components/HistoryScreen";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Calculator" component={CalculatorScreen} />
				<Stack.Screen name="History" component={HistoryScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
