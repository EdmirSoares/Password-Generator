import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeIn, FadeOut, withTiming } from "react-native-reanimated";
import { useToast } from "react-native-toast-notifications";
import { Clipboard } from "react-native";
import { useApp } from "./useApp";

import {
	Banner,
	Container,
	ButtonContainer,
	Text,
	ButtonAreacontainer,
	PasswordContainer,
	styles,
	PasswordText,
	ButtonContainerCopy,
} from "./style";

const Home = () => {
	const {
		password,
		loading,
		notGenerated,
		generatePassword,
		copyToClipboard,
	} = useApp();

	return (
		<Container>
			<LinearGradient
				colors={["rgba(86, 255, 233, 0.5)", "rgba(10, 50, 83, 0.8)"]}
				locations={[0.1, 0.8]}
				style={styles.gradient}
			/>
			<Banner>
				{notGenerated ? (
					<Animated.View entering={FadeIn} exiting={FadeOut}>
						<PasswordText>
							Click to generate a new password
						</PasswordText>
					</Animated.View>
				) : loading ? (
					<Animated.View entering={FadeIn} exiting={FadeOut}>
						<PasswordText>Wait...</PasswordText>
					</Animated.View>
				) : (
					<PasswordContainer>
						{!loading && (
							<Animated.View
								entering={FadeIn}
								exiting={FadeOut}
								style={styles.blur}
							>
								<PasswordText>Your new password:</PasswordText>
								{password && (
									<Animated.View
										entering={FadeIn}
										exiting={FadeOut}
									>
										<PasswordText>{password}</PasswordText>
									</Animated.View>
								)}
							</Animated.View>
						)}
					</PasswordContainer>
				)}
			</Banner>
			<ButtonAreacontainer>
				<ButtonContainer
					onPress={generatePassword}
					underlayColor="#b5dfd6"
					disabled={loading ? true : false}
				>
					<Text>{loading ? "Generating..." : "Generate"}</Text>
				</ButtonContainer>
				<ButtonContainerCopy
					onPress={copyToClipboard}
					color="#3a6692"
					underlayColor="#53598b"
					disabled={loading ? true : false}
					opacity={!loading ? 1 : 0}
				>
					<Text>Copy</Text>
				</ButtonContainerCopy>
			</ButtonAreacontainer>
		</Container>
	);
};

export default Home;
