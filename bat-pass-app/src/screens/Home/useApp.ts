import { useState } from "react";
import { useToast } from "react-native-toast-notifications";
import { Clipboard } from "react-native";



export function useApp() {
const toast = useToast();

const [password, setPassword] = useState("");
const [loading, setLoading] = useState(false);
const [notGenerated, setNotGenerated] = useState(true);

function generatePassword() {
    setLoading(true);
    setNotGenerated(false);

    setTimeout(() => {
        const charset =
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
        let password = "";

        for (let i = 0, n = charset.length; i < 8; ++i) {
            password += charset.charAt(Math.floor(Math.random() * n));
        }
        setLoading(false);
        setPassword("");

        setTimeout(() => {
            setPassword(password);
        }, 100);
    }, 2000);
}

function copyToClipboard() {
    try {
        Clipboard.setString(password);

        toast.show("Password copied to clipboard", {
            type: "success",
            placement: "top",
            duration: 2000,
            animationType: "zoom-in",
        });
    } catch {
        toast.show("Failed", {
            type: "warning",
            placement: "top",
            duration: 2000,
            animationType: "zoom-in",
        });
    }
}

return {
    password,
    loading,
    notGenerated,
    generatePassword,
    copyToClipboard,
  };
}