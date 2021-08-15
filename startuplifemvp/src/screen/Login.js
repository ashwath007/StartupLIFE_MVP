import React from 'react';
import {StyleSheet, View,Text, Image, ImageBackground } from 'react-native';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-google-signin/google-signin';
import { googleSignin } from '../action/auth';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import {screen_height, screen_width} from './support/Dimention'

const Login = ({googleSignin,authState}) => {
    return(
        <View>
               <ImageBackground source={{uri:"https://i.ibb.co/WWmH7wp/Login-page.png"}} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Inside</Text>
    </ImageBackground>
    {/* <a href="https://ibb.co/1fF0B5J"><img src="https://i.ibb.co/WWmH7wp/Login-page.png" alt="Login-page" border="0"></a> */}

            <GoogleSigninButton
            style={styles.gbtn}
                onPress={() => googleSignin()}
            />
        </View>
        )
}


Login.propTypes = {
    googleSignin: propTypes.func.isRequired,
    authState: propTypes.object.isRequired,
}

const mapDispatchToProps = {
    googleSignin
}

const mapStateToProps = (state) => ({
    authState: state.auth
  })

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center",
        width:'100%',
        height:'100%'
      },
      gbtn:{
          position:'relative'
      }
})




export default connect(mapStateToProps,mapDispatchToProps)(Login)