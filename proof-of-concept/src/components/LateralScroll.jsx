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
                pagingEnabled={true}
                snapToInterval={stepFormWidth}
                decelerationRate="fast"
            >
                <TouchableOpacity
                    style={{
                        width: stepFormWidth,
                        backgroundColor: "black",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingVertical: 160,
                    }}
                    onPress={() => showAlert('Hello!')}
                    activeOpacity={1}
                >
                    <Text style={{ color: "white", fontSize: 20 }}>
                        Hello!
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
                    onPress={() => showAlert('Word 2')}
                    activeOpacity={1}
                >
                    <Text style={{ color: "white", fontSize: 20 }}>
                        Word 2
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
                    onPress={() => showAlert('3 image ^^')}
                    activeOpacity={1}
                >
                    <Text style={{ color: "white", fontSize: 20 }}>
                        3 image ^^
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
                    onPress={() => showAlert('Last one')}
                    activeOpacity={1}
                >
                    <Text style={{ color: "white", fontSize: 20 }}>
                        Last one
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}
