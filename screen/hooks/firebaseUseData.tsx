/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import analytics from '@react-native-firebase/analytics';

export const currentUser = auth().currentUser;
export const onSignUp = async (email: string, password: string, displayName: string, familyName: string, driver: string) => {
  let returnResponse;
  let response;
  try {
    response = await auth().createUserWithEmailAndPassword(email, password).then(async (res) => {
      await auth().currentUser.updateProfile({
        displayName: displayName,
        photoURL: 'https://st.depositphotos.com/2218212/2938/i/450/depositphotos_29387653-stock-photo-facebook-profile.jpg',
        DOB: '17/07/2022',
      });
      await firestore().collection('Users').add({
        email: email,
        displayName: displayName,
        familyName: familyName,
        driver: driver,
        user:auth().currentUser.uid
      }).then(function () {
        // console.log({ status: 'success', message: 'User Added Successfully!' })
      }).catch((Error) => {
        returnResponse=({ status: 'fail', message: Error });
      })

       console.log({ status: 'success', message: 'Account created successfully' });
       returnResponse = ({ status: 'success', message: 'Account created successfully' });
    }).catch(err => {
      console.log("check 1");
      // console.log({ status: 'fail', message: err });
      returnResponse = ({ status: 'fail', message: err });
    });
  } catch (error) {
    console.log({ status: 'fail', message: error });
    returnResponse= ({ status: 'fail', message: error });
  }
  //  return ({ status: 'success', message: 'Account created successfully' });
  return returnResponse;
};
export const onSignIn = async (email: string, password: string) => {
  let response;
  try {
    response = await auth().signInWithEmailAndPassword(email, password);
    return { status: 'success', message: 'Login successful' };
  } catch (error) {
    return { status: 'fail', message: error };
  }
};
export const addEvent = async (name: string, date: string, time: string, address: string, description: string) => {
  console.log('success');
  let responce;
  try {
    responce = await firestore().collection('Event').add({
      name,
      date,
      time,
      address,
      description,
      user: auth()?.currentUser.uid,
      attending: [],
      createdAt: new Date(),
    });
    responce = await firestore().collection('notification').add({
      title: auth().currentUser?.displayName + " " + " Add new Event",
      subtitle: description,
    });
    console.log({ status: 'success', message: 'Post added!' });
    return ({ status: 'success', message: 'Post added!' });
  } catch (error) {
    console.log({ status: 'fail', message: error });
    return ({ status: 'fail', message: error });
  }
};
export const getMyEvent = async () => {
  let responce;
  try {
    responce = await firestore().collection('Event').where('user', '==', auth()?.currentUser?.uid).get();
    const data = responce.docs.map(doc => doc.data());
    return ({ status: 'success', message: data });
  } catch (error) {
    console.log({ status: 'fail', message: error });
    return ({ status: 'fail', message: error });
  }
}
export const deleteEvent = async (data) => {
  console.log(data);
  await firestore().collection('Event').where('user', '==', auth().currentUser?.uid).where('name', '==', data?.name).where('createdAt', '==', data?.createdAt).get().then(
    async function (querySnapshot) {
      await querySnapshot.forEach(function (doc) {
        doc.ref.delete();
      });
      console.log({ status: 'success', message: 'Post Deleted!' })
      return ({ status: 'success', message: 'Post Deleted!' });
    }
  ).catch((err) => {
    console.log({ status: 'fail', message: err });
  });
}
export const getNotification = async () => {
  let responce;
  try {
    responce = await firestore().collection('notification').get();
    const data = responce.docs.map(doc => doc.data());
    return ({ status: 'success', message: data });
  } catch (error) {
    console.log({ status: 'fail', message: error });
    return ({ status: 'fail', message: error });
  }
}
export const getEvent = async () => {
  let responce;
  try {
    responce = await firestore().collection('Event').where('user', '!=', auth()?.currentUser?.uid).get();
    const data = responce.docs.map(doc => doc.data());
    return ({ status: 'success', message: data });
  } catch (error) {
    console.log({ status: 'fail', message: error });
    return ({ status: 'fail', message: error });
  }
}
export const attendEvent = async (data) => {
  console.log(data);
  await firestore().collection('Event').where('name', '==', data?.name).where('createdAt', '==', data?.createdAt).get().then(
    async function (querySnapshot) {
      await querySnapshot.forEach(function (doc) {
        const check = doc.data().attending.map(e => e.user).indexOf(auth().currentUser?.uid);
        if (check === -1) {
          doc.ref.update({ attending: [...doc.data().attending, { name: auth()?.currentUser?.displayName, photoUrl: auth()?.currentUser?.photoURL, email: auth()?.currentUser?.email, user: auth()?.currentUser?.uid }] })
        }
      });
      console.log({ status: 'success', message: 'Event Attended!' })
      return ({ status: 'success', message: 'Event Attended!' });
    }
  ).catch((err) => {
    console.log({ status: 'fail', message: err });
    return ({ status: 'fail', message: err });
  });
}