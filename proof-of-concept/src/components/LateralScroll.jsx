import React from 'react';
import { View, Text, Dimensions, ScrollView, TouchableOpacity, Alert } from 'react-native';

const { width } = Dimensions.get('window');

export default function LateralScroll() {
    const screenPadding = 20;
    const stepFormWidth = width - screenPadding * 2;

    const showAlert = (message) => {
        Alert.alert(message);
    };

    return (
        <View
            style={{
                width: "100%",
                borderRadius: 2,
                backgroundColor: "2d0381",
                paddingHorizontal: 15,
            }}
        >
            <ScrollView
                style={{
                    flexGrow: 0,
                    alignContent: "center",
                }}
                contentContainerStyle={{
                    flexGrow: 1,
                    position: "relative",
                }}
                horizontal
            >
                <TouchableOpacity
                    style={{
                        width: stepFormWidth,
                        backgroundColor: "black",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingVertical: 160,
                    }}
                    onPress={() => showAlert('Relajarte')}
                    activeOpacity={1}
                >
                    <Text style={{ color: "white", fontSize: 20 }}>
                        Relajarte
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        width: stepFormWidth,
                        backgroundColor: "orangered",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingVertical: 160,
                    }}
                    onPress={() => showAlert('Dormir')}
                    activeOpacity={1}
                >
                    <Text style={{ color: "white", fontSize: 20 }}>
                        Dormir
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        width: stepFormWidth,
                        backgroundColor: "gray",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingVertical: 160,
                    }}
                    onPress={() => showAlert('Concentrarte')}
                    activeOpacity={1}
                >
                    <Text style={{ color: "white", fontSize: 20 }}>
                        Concentrarte
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        width: stepFormWidth,
                        backgroundColor: "forestgreen",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingVertical: 160,
                    }}
                    onPress={() => showAlert('Cuidarte')}
                    activeOpacity={1}
                >
                    <Text style={{ color: "white", fontSize: 20 }}>
                        Cuidarte
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}