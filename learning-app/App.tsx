import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
	const [color, setColor] = useState("red");
	const [styleContainer, setStyleContainer] = useState(styles.container);
	const [active, setActive] = useState(false);

	function changeColor() {
		setColor(color === "red" ? "blue" : "red");
		setStyleContainer(
			styleContainer === styles.container
				? styles.container_two
				: styles.container
		);
		//por padrão recebe o valor anterior e retorna o novo valor, no caso, o valor invertido
		setActive((prevValue: boolean) => {
			return !prevValue;
		});
		console.log(active);
	}

	return (
		<View style={styleContainer}>
			<TouchableOpacity onPress={changeColor}>
				<Text style={{ color: color }}>
					Open up App.tsx to start working on your app!
				</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#1a1a1a",
		alignItems: "center",
		justifyContent: "center",
	},
	container_two: {
		flex: 1,
		backgroundColor: "#fffd70",
		alignItems: "center",
		justifyContent: "center",
	},
});
