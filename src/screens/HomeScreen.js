import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Header, Divider, Text, Card, Button, Icon} from '@rneui/themed';

const HomeScreen = () => {
  return (
    <View>
      <ScrollView>
        <Header
          backgroundColor="red"
          centerComponent={{
            text: 'IKM',
            style: {color: '#fff', paddingTop: 10, fontSize: 18},
          }}
          containerStyle={{
            justifyContent: 'space-around',
          }}
        />
        <Card>
          <Card.Image
            style={{padding: 0, height: 200}}
            source={require('../../assets/img1.jpg')}
          />
        </Card>
        {/* <Text style={{textAlign: 'center', paddingTop: 10}} h4>
          Pendaftaran Merek dan Unit Usaha
        </Text>
        <Text style={{textAlign: 'center', padding: 5}} h5>
          Daftarkan Merek atar unit saha UMKM anda untuk mempermudah promosi
          Produk anda
        </Text>
        <Card style={{width: 20}}>
          <Icon name="book" type="font-awesome" color="red" />
          <Card.Divider />
          <Card.Title>Daftar Merek Produk UMKM</Card.Title>
          <Button
            buttonStyle={{
              backgroundColor: 'red',
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="Daftar"
          />
        </Card> */}
        <Card>
          <Text style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold'}}>
            Daftar Penawaran Produk
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Card containerStyle={{backgroundColor: 'red', width: '35%'}}>
              <Card.Title style={{color: 'white'}}>
                Penawaran Promo Terbaik
              </Card.Title>
              <Text style={{color: 'white'}}>
                Segera dapatkan Produk UMKM berkualitas dengan berbagai promo
                menarik
              </Text>
            </Card>
            <Card containerStyle={{width: '55%'}}>
              <Card.Image
                style={{padding: 0}}
                source={require('../../assets/sepatu.jpg')}
              />
              <Text
                style={{marginBottom: 10, fontSize: 16, textAlign: 'center'}}>
                Sepatu
              </Text>
              <Text
                style={{
                  marginBottom: 10,
                  color: 'red',
                  fontSize: 16,
                  textAlign: 'center',
                }}>
                Rp. 50.000,00
              </Text>
              <Button
                buttonStyle={{
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 0,
                  backgroundColor: 'red',
                  borderRadius: 5,
                }}
                title="Beli Sekarang"
              />
            </Card>
          </View>
        </Card>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
