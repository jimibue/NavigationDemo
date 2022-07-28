import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator } from 'react-native';
import axios from 'axios';
const HomeScreen = () => {
    const [users, setUsers] = useState(null)
    const getUsers = async()=>{
        try{
          let res = await axios.get('http://localhost:3001/api/users')
          setUsers(res.data)
        }catch(err){
          console.log(err)
          setUsers([])
        }
    }
    useEffect(()=>{
        getUsers()
    },[])
    if(!users) return (
        <ActivityIndicator/>
    )
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home Screen</Text>
        <Text>{JSON.stringify(users)}</Text>
      </View>
    );
  };

  export default HomeScreen