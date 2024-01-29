import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function HistoryScreen({ route, navigation }) {
	//Array destructuring for passed data:
	const { calculations } = route.params;

	//Components:
	const listHeader = () => {
		return (
			<View>
				<Text>History</Text>
			</View>
		);
	};

	//Rendering:
	return (
		<View style={styles.container}>
			<View style={{ height: 20 }} />
			<FlatList
				data={calculations}
				ListHeaderComponent={listHeader}
				renderItem={({ item }) => <Text>{item}</Text>}
			/>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		//marginTop: 200,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	textInputContainer: {
		width: 200,
		borderColor: "gray",
		borderWidth: 1,
		marginBottom: 10,
	},
	buttonContainer: {
		flexDirection: "row",
	},
});
