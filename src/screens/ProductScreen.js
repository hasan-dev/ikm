import React from 'react';
import {View, ScrollView} from 'react-native';
import {Card, Text, Header, Button} from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProductScreen = () => {
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
            source={require('../../assets/img2.jpeg')}
          />
        </Card>
        <Card>
          <Card.Title>Kategori</Card.Title>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingBottom: 30,
            }}>
            <Icon name="cutlery" size={30} color="red" />
            <Icon name="coffee" size={30} color="red" />
            <Icon name="car" size={30} color="red" />
            <Icon name="building" size={30} color="red" />
          </View>
        </Card>
        <Card>
          <Text style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold'}}>
            Terbaru Di IKM Kota Batu
          </Text>
          <View style={{flexDirection: 'row'}}>
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

export default ProductScreen;
