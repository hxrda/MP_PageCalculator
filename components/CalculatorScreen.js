//Calculator screen is initially rendered
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function CalculatorScreen({ navigation }) {
	//States:
	const [firstNumber, setFirstNumber] = useState(0);
	const [secondNumber, setSecondNumber] = useState(0);
	const [result, setResult] = useState();

	const [calculation, setCalculation] = useState(""); //redundant
	const [calculations, setCalculations] = useState([]);

	//Functions:
	const addNumbers = () => {
		//Calculate result:
		const additionValue = parseFloat(firstNumber) + parseFloat(secondNumber);
		setResult(additionValue);

		//Create a string representation of the calculation:
		const calculationString = `${firstNumber} + ${secondNumber} = ${additionValue}`;
		setCalculation(calculationString);

		//Save the representation to an array state:
		setCalculations((prevCalculations) => [
			...prevCalculations,
			calculationString,
		]);
	};

	const subtractNumbers = () => {
		//Calculate result:
		const subtractionValue = parseFloat(firstNumber) - parseFloat(secondNumber);
		setResult(subtractionValue);

		//Create a string representation of the calculation:
		const calculationString = `${firstNumber} - ${secondNumber} = ${subtractionValue}`;
		setCalculation(calculationString);

		//Save the representation to an array state:
		setCalculations((prevCalculations) => [
			...prevCalculations,
			calculationString,
		]);
	};

	return (
		<View style={styles.container}>
			<Text>Result: {result}</Text>

			<View>
				<TextInput
					style={styles.textInputContainer}
					inputMode="numeric"
					onChangeText={(firstValue) => setFirstNumber(firstValue)}
				/>
				<TextInput
					style={styles.textInputContainer}
					inputMode="numeric"
					onChangeText={(secondValue) => setSecondNumber(secondValue)}
				/>
			</View>

			<View style={styles.buttonContainer}>
				<Button title="+" onPress={addNumbers} />
				<View style={{ width: 10 }} />
				<Button title="-" onPress={subtractNumbers} />
				<View style={{ width: 10 }} />
				<Button
					title="History"
					onPress={() => navigation.navigate("History", { calculations })}
				/>
			</View>

			<View style={{ height: 70 }} />

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
