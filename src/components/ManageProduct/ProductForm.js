import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Input from './Input';
import Button from '../UI/Button';
import {GlobalStyles} from '../../constants/styles';

const ProductForm = (submitButtonLabel, onSubmit, onCancel, defaultValue) => {
  const [inputs, setInputs] = useState({
    nama: {
      value: defaultValue ? defaultValue.nama : '',
      isValid: true,
    },
    harga: {
      value: defaultValue ? defaultValue.harga : 0,
      isValid: true,
    },
    stok: {
      value: defaultValue ? defaultValue.stok : 0,
      isValid: true,
    },
    deskripsi: {
      value: defaultValue ? defaultValue.deskripsi : '',
    },
  });

  const inputChangedHandler = (inputIdentifier, enteredValue) => {
    setInputs(curInputs => {
      return {
        ...curInputs,
        [inputIdentifier]: {value: enteredValue, isValid: true},
      };
    });
  };

  const submitHandler = () => {
    const productData = {
      nama: inputs.nama.value,
      harga: inputs.harga.value,
      stok: inputs.stok.value,
      deskripsi: inputs.deskripsi.value,
    };

    const namaIsValid = productData.nama.trim().length > 0;
    const hargaIsValid = isNaN(productData.harga) && productData.harga > 0;
    const stokIsValid = isNaN(productData.stok) && productData.stok > 0;
    const deskripsiIsValid = productData.nama.trim().length > 0;

    if (!namaIsValid || !hargaIsValid || !stokIsValid || !deskripsiIsValid) {
      setInputs(curInputs => {
        return {
          nama: {value: curInputs.nama.value, isValid: namaIsValid},
          harga: {value: curInputs.harga.value, isValid: hargaIsValid},
          stok: {value: curInputs.stok.value, isValid: stokIsValid},
          deskripsi: {
            value: curInputs.deskripsi.value,
            isValid: deskripsiIsValid,
          },
        };
      });
      return;
    }

    onSubmit(productData);
  };

  const formIsInValid =
    !inputs.nama.value ||
    !inputs.harga.value ||
    !inputs.stok.value ||
    !inputs.deskripsi.value;

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Product</Text>
      <Input
        label="Nama"
        inValid={!inputs.nama.isValid}
        textInputConfig={{
          onChangeText: inputChangedHandler.bind(this, 'nama'),
          value: inputs.nama.value,
        }}
      />
      <Input
        label="Harga"
        inValid={!inputs.harga.isValid}
        textInputConfig={{
          onChangeText: inputChangedHandler.bind(this, 'harga'),
          value: inputs.harga.value,
        }}
      />
      <Input
        label="Stok"
        inValid={!inputs.stok.isValid}
        textInputConfig={{
          onChangeText: inputChangedHandler.bind(this, 'stok'),
          value: inputs.stok.value,
        }}
      />
      <Input
        label="Deskripsi"
        invalid={!inputs.deskripsi.isValid}
        textInputConfig={{
          onChangeText: inputChangedHandler.bind(this, 'deskripsi'),
          value: inputs.deskripsi.value,
        }}
      />
      {formIsInValid && (
        <Text style={styles.errorText}>Invalid input values</Text>
      )}
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Batal
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          Submit
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 24,
    textAlign: 'center',
  },
  inputsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInput: {
    flex: 1,
  },
  errorText: {
    textAlign: 'center',
    color: GlobalStyles.colors.error500,
    margin: 8,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});

export default ProductForm;
