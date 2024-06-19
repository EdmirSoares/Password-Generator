import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ToastProvider } from "react-native-toast-notifications";
import { AntDesign } from "@expo/vector-icons";
import Home from "./src/screens/Home/Home";

export default function App() {
	return (
		<ToastProvider
			successColor="#80BF66"
			warningColor="#FADA61"
			offsetTop={40}
			offsetBottom={50}
			swipeEnabled={true}
			renderToast={(toast) => (
				<View
					style={{
						backgroundColor: "#FFF",
						elevation: 10,
						width: "90%",
						minHeight: 50,
						paddingRight: 10,
						flexDirection: "row",
						alignItems: "center",
						borderRadius: 5,
					}}
				>
					<View
						style={{
							width: 5,
							height: "100%",
							borderBottomLeftRadius: 5,
							borderTopLeftRadius: 5,
							backgroundColor:
								toast.type === "success"
									? toast.successColor
									: toast.type === "warning"
									? toast.warningColor
									: toast.normalColor,
						}}
					/>

					{toast.type === "success" && (
						<AntDesign
							name="checkcircle"
							size={20}
							color={toast.successColor}
							style={{ marginRight: 15, marginLeft: 15 }}
						/>
					)}
					<Text
						style={{
							color: "#404040",
							fontSize: 13,
							width: "85%",
							marginTop: 10,
							marginBottom: 10,
						}}
					>
						{toast.message}
					</Text>
				</View>
			)}
		>
			<View style={styles.container}>
				<StatusBar style="auto" />
				<Home />
			</View>
		</ToastProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
