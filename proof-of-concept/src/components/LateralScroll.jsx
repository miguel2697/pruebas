import { View, Text, Dimensions, ScrollView } from 'react-native';

const { width } = Dimensions.get('window');

export default function LateralScroll() {
    const screenPadding = 20;
    const stepFormWidth = width - screenPadding * 2;
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
                <View
                    style={{
                        width: stepFormWidth,
                        backgroundColor: "gray",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingVertical: 160,
                    }}
                >
                    <Text style={{ color: "white", fontSize: 20 }}>
                        Hello!
                    </Text>
                </View>
                <View
                    style={{
                        width: stepFormWidth,
                        backgroundColor: "green",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingVertical: 160,
                    }}
                >
                    <Text style={{ color: "white", fontSize: 20 }}>
                        Word 2
                    </Text>
                </View>

                <View
                    style={{
                        width: stepFormWidth,
                        backgroundColor: "orange",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingVertical: 160,
                    }}
                >
                    <Text style={{ color: "white", fontSize: 20 }}>
                        3 image ^^
                    </Text>
                </View>

                <View
                    style={{
                        width: stepFormWidth,
                        backgroundColor: "red",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingVertical: 160,
                    }}
                >
                    <Text style={{ color: "white", fontSize: 20 }}>
                        Last one
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
}