import React, { useContext } from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { Context as personalDetailsContext } from "../context/personalDetailsContext";
import { PDFViewer } from "@react-pdf/renderer";
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "col",
    backgroundColor: "#fff",
  },
  section: {
    // margin: 10,
    // padding: 10,
    flexGrow: 1,
  },
});

// Create Document Component
const MyDocument = () => {
  const {
    inputFirstName,
    inputMiddleName,
    inputLastName,
    inputDateOfBirth,
    inputGender,
    state,
  } = useContext(personalDetailsContext);

  return (
    <PDFViewer style={{ width: "100%", height: "100vh" }}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "col" }}>
              <Text> Dr. {state.firstName} {state.middleName} {state.lastName} </Text>
            </View>
          </View>
          <View style={styles.section}>
            <Text>Section #2</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default MyDocument;
