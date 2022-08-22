<<<<<<< HEAD
import React, {useState} from 'react';
import { Button, Appbar, Menu, MenuItem, Drawer} from "react-native-paper";
import {
  StyleSheet
} from "react-native";



function HabitEmptyState({navigation, back}) {

const [visible, setVisible] = useState(false);
const openMenu = () => setVisible(true);
const closeMenu = () => setVisible(false);

  return (
    <>
      <Appbar.Header>
        {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
        {!back ? (
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={
              <Appbar.Action icon="menu" color="white" onPress={openMenu} />
            }
          >
            <Menu.Item
              onPress={() => {
                console.log("Option 1 was pressed");
              }}
              title="Home"
            />
            <Menu.Item
              onPress={() => {
                console.log("Option 2 was pressed");
              }}
              title="Stats"
            />
            <Menu.Item
              onPress={() => {
                console.log("Option 3 was pressed");
              }}
              title="Group"
              disabled
            />
            <Menu.Item
              onPress={() => {
                console.log("Option 3 was pressed");
              }}
              title="Profile"
              disabled
            />
          </Menu>
        ) : null}
        <Appbar.Content title="CoHabit" />
        <Appbar.Action
          icon="dots-vertical"
          onPress={() => console.log("Pressed")}
        />
      </Appbar.Header>
=======
import React, {useState, useEffect} from 'react';
import { useAuthentication } from '../hook/useAuthentication';
import { Button, Appbar, Menu, MenuItem, Drawer, ToggleButton, IconButton} from "react-native-paper";
import { StyleSheet, Text, View, FlatList, TextInput, Keyboard, Pressable} from "react-native";
import { firebase } from "../config/firebase";

import { getAuth } from "firebase/auth";


function HabitEmptyState({navigation, back}) {
const auth = getAuth();
const user = auth.currentUser;
const uid = user.uid;
console.log(uid);
  
const [visible, setVisible] = useState(false);
const [visibleOne, setVisibleOne] = useState(false);
const openMenu = () => setVisible(true);
const openMenuOne = () => setVisibleOne(true);
const closeMenu = () => setVisible(false);
const closeMenuOne = () => setVisibleOne(false);

const [goals, setGoals] = useState([]);

const [addGoals, setAddGoals] = useState("");

const [status, setStatus] = useState("checked");
const [color, setColor] = useState("#0000FF");


const [statusOne, setStatusOne] = useState("checked");
const [colorOne, setColorOne] = useState("#0000FF");
const [active, setActive] = useState("");

const onButtonToggle = () => {
  setStatus(status === "checked" ? "unchecked" : "checked");
  setColor(color === "#0000FF" ? "#E0CCB8" : "#0000FF");
};

const onEditToggle = () => {
  setStatusOne(status === "checked" ? "unchecked" : "checked");
  setColorOne(colorOne === "#0000FF" ? "#E0CCB8" : "#0000FF");
};


  
//fetch or read the data from firebase

useEffect(() => {
 
  const goalRef = firebase.firestore().collection("goals").where("userId", "==", uid)
  const unsubscribe = goalRef.onSnapshot((querySnapshot) => {
    const goals = [];
    querySnapshot.forEach((doc) => {
      const { heading } = doc.data();
      goals.push({
        id: doc.id,
        heading,
      });
    });
    setGoals(goals);
  });
  return unsubscribe;
}, []);

 const deleteGoal = (goals) => {
   goalRef
     .doc(goals.id)
     .delete()
     .then(() => {
       //show a successful alert
       alert("Deleted successfully");
     })
     .catch((error) => {
       alert(error);
     });
 };


  return (
    <View style={{ backgroundColor: "#FFF1E7", flex: 1 }}>
      <Appbar.Header style={{ backgroundColor: "#FFF1E7" }}>
        <Menu
          style={styles.menuOneContainer}
          visible={visibleOne}
          onDismiss={closeMenuOne}
          anchor={
            <Appbar.Action icon="menu" color="black" onPress={openMenuOne} />
          }
        >
          <Menu.Item icon="home" title="Home" />
          <Menu.Item icon="home" title="Stats" />
          <Menu.Item icon="home" title="Group" />
          <Menu.Item icon="home" title="Profile" />
        </Menu>
        <Appbar.Content title="CoHabit" />
        {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
        {!back ? (
          <Menu
            style={styles.doneButton}
            visible={visible}
            onDismiss={closeMenu}
            anchor={
              <Appbar.Action
                icon="dots-vertical"
                color="black"
                onPress={openMenu}
              />
            }
          >
            <Menu.Item icon="pencil" onPress={onEditToggle} title="Edit" />
          </Menu>
        ) : null}
      </Appbar.Header>
      <FlatList
        data={goals}
        numColumns={1}
        renderItem={({ item }) => (
          <View>
            <Pressable style={styles.container}>
              {/* <IconButton
              icon='circle'
              onPress={() => deleteGoal(item)}
              style={styles.goalIcon}
            /> */}
              <View style={styles.innerContainer}>
                <View style={styles.twoContainer}>
                  <Text style={styles.itemHeading}>
                    {item.heading[0].toUpperCase() + item.heading.slice(1)}
                  </Text>
                  <ToggleButton
                    style={styles.editButton}
                    color={colorOne}
                    icon="pencil"
                    value="check"
                    status={statusOne}
                    onPress={() => navigation.navigate("Edit", { item })}
                  />
                </View>
                <ToggleButton
                  style={styles.toggleButton}
                  color={color}
                  icon="check"
                  value="check"
                  status={status}
                  onPress={onButtonToggle}
                />
              </View>
            </Pressable>
          </View>
        )}
      />
>>>>>>> 2f6fd3470824b4213285032a836321615747b48e
      <Button
        style={styles.button}
        icon="plus"
        mode="contained"
        onPress={() => navigation.navigate("Home")}
        uppercase={false}
      >
        Add Habit
      </Button>
<<<<<<< HEAD
    </>
=======
    </View>
>>>>>>> 2f6fd3470824b4213285032a836321615747b48e
  );
}

export default HabitEmptyState

const styles = StyleSheet.create({
<<<<<<< HEAD
button: {
  height: 50,
  marginTop: 600,
  marginLeft: 20,
  marginRight: 20,
  borderRadius: 10,
   justifyContent: "center",
   alignContent: "center",
   
}

})
=======
  button: {
    backgroundColor: '#006052',
    height: 50,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignContent: "center",
  },
  container: {
    backgroundColor: "#E0CCB8",
    padding: 15,
    borderRadius: 15,
    margin: 5,
    marginHorizontal: 10,
    flexDirection: "column",
    alignItems: "center",
    marginTop: 20,
    width: "50%",
    height: 200,
  },
  goalIcon: {
    marginTop: 5,
    fontSize: 20,
    marginLeft: 14,
  },
  toggleButton: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    borderWidth: 5,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    height: 120,
    width: 120,
    marginRight: 50,
    // backgroundColor: 'blue',
  },
  innerContainer: {
    alignItems: "center",
    marginLeft: 45,
  },
  itemHeading: {
    fontWeight: "bold",
    fontSize: 18,
    marginRight: 40,
  },
  twoContainer: {
    flexDirection: "row",
  },
  editButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  menuOneContainer:{
    marginTop: 40,
    width: 300,
    height: 800,
  },
  doneButton: {
    marginTop: 40,
  }
  
});
>>>>>>> 2f6fd3470824b4213285032a836321615747b48e
