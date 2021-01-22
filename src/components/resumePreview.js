import React, { useContext } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import { Context as personalDetailsContext } from "../context/personalDetailsContext";
import { Context as ExperiencesContext } from "../context/experiencesContext";

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
  const { state } = useContext(personalDetailsContext);

  const experiencesContext = useContext(ExperiencesContext);

  const hospitalExperiencesList = experiencesContext.state.hospitalExperiences.map(
    (exp, index) => {
      return <li style={{ display: "inline" }}>{exp}</li>;
    }
  );

  return (
    <PDFViewer style={{ width: "100%", height: "100vh" }}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#363e49",
              color: "#fff",
              padding: "2rem",
            }}
          >
            <View style={{ flexDirection: "col", marginVertical: "16px" }}>
              <Text>
                {" "}
                Dr. {state.firstName} {state.middleName} {state.lastName}{" "}
              </Text>
              <Text style={{ maxWidth: "350px", marginTop: 8 }}>
                {" "}
                MBBS, MD, MSC, FICP, FRCP{" "}
              </Text>
              <Text style={{ maxWidth: "350px", marginTop: 8 }}>
                {" "}
                {String(state.dateOfBirth)}{" "}
              </Text>
            </View>
            <View>
              <Image
                source="https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                style={{
                  width: "80px",
                  height: "100px",
                  marginVertical: "8px",
                }}
              ></Image>
            </View>
          </View>
          <View style={{ marginTop: 16 }}>
            <Text>1 - Professional Experiences</Text>
            <View style={{ marginTop: 16, marginLeft: 32 }}>
              <Text>1.1 Hospital Experiences</Text>
              {experiencesContext.state.hospitalExperiences.map(
                (exp, index) => {
                  return <Text style={{ display: "inline", marginLeft: 64 }}>{exp}</Text>;
                }
              )}
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default MyDocument;
