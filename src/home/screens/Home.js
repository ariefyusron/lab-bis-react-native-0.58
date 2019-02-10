import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import { Icon } from 'native-base';

class Home extends Component {
  constructor(){
    super()
    this.state = {
      data: [
        {
          name: 'Arief Yusron',
          to: 'Praktikum Alpro C',
          file: 'Modul1.pdf',
          typeFile: 'pdf',
          size: '2 Mb',
          post: '',
          time: 'Jan 25, 2018',
          img_url: 'https://lh3.googleusercontent.com/a-/AAuE7mBPLyzzuOx0NFjGW6wD4InDi6aR4KWhpw3sxvgfdg=s640-rw-il'
        },
        {
          name: 'Arief Yusron',
          to: 'Praktikum Alpro C',
          file: '',
          typeFile: '',
          size: '',
          post: 'Assalamualaikum wr. wb. Hari ini praktikum saya liburkan dikarenakan saya ada urusan. Untuk hari pengganti silahkan diskusikan di kolom komentar.',
          time: 'Jan 25, 2018',
          img_url: 'https://lh3.googleusercontent.com/a-/AAuE7mBPLyzzuOx0NFjGW6wD4InDi6aR4KWhpw3sxvgfdg=s640-rw-il'
        },
        {
          name: 'Arief Yusron',
          to: 'Praktikum Alpro C',
          file: 'Kontrak.pdf',
          typeFile: 'pdf',
          size: '500 Kb',
          post: 'Assalamualaikum wr. wb. Kontrak praktikum',
          time: 'Jan 25, 2018',
          img_url: 'https://lh3.googleusercontent.com/a-/AAuE7mBPLyzzuOx0NFjGW6wD4InDi6aR4KWhpw3sxvgfdg=s640-rw-il'
        },
        {
          name: 'Arief Yusron',
          to: 'Praktikum Alpro C',
          file: 'Modul1.doc',
          typeFile: 'doc',
          size: '1.2 Mb',
          post: '',
          time: 'Jan 25, 2018',
          img_url: 'https://lh3.googleusercontent.com/a-/AAuE7mBPLyzzuOx0NFjGW6wD4InDi6aR4KWhpw3sxvgfdg=s640-rw-il'
        }
      ]
    }
  }
  
  static navigationOptions = {
    headerTitle: 'Lab Bis',
    headerTitleStyle: {
      color: '#ffffff'
    },
    headerStyle: {
      backgroundColor: '#3498DB' 
    },
    headerRight: (
      <TouchableOpacity>
        <Icon name='send-o' type='FontAwesome' style={{color: '#ffffff', fontSize: 23, marginRight: 19}} />
      </TouchableOpacity>
    )
  }

  _renderItem = ({item}) => (
    <View style={styles.row}>
      <View style={styles.rowHeader}>
        <View style={styles.containerImage}>
          <Image
            source={{uri: item.img_url}}
            style={styles.image}
          />
        </View>
        <View>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.sendTo}>send to <Text style={styles.title}>{item.to}</Text></Text>
          <Text style={styles.labelTime}>{item.time}</Text>
        </View>
      </View>
      <View style={styles.rowBody}>
        {item.post? (
          <View style={styles.containerPost}>
            <Text style={styles.post}>{item.post}</Text>
          </View>
        ):(null)}
        {item.file? (
          <View style={styles.containerFile}>
            <Icon
              name={item.typeFile==='pdf'? ('pdffile1'):('doc')}
              type={item.typeFile==='pdf'? ('AntDesign'):('SimpleLineIcons')}
              style={{color: item.typeFile==='pdf'? ('#FF6060'):('#3498DB')}}
            />
            <View style={styles.detailFile}>
              <Text style={styles.labelNameFile}>{item.file}</Text>
              <Text style={styles.labelSizeFile}>{item.size}</Text>
            </View>
          </View>
        ):(null)}
      </View>
    </View>
  )
  
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F4F4',
    flex: 1,
    padding: 12
  },
  row: {
    borderRadius: 5,
    backgroundColor: '#fff',
    marginBottom: 16,
    paddingHorizontal: 18,
    paddingVertical: 19
  },
  rowHeader: {
    flexDirection: 'row',
    marginBottom: 22
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5
  },
  title: {
    color: '#000',
    fontSize: 14,
    fontWeight: '500',
    marginTop: -2
  },
  sendTo: {
    color: '#000',
    fontSize: 14,
    marginTop: -3
  },
  labelTime: {
    color: '#777777',
    fontSize: 11,
    marginTop: 4
  },
  containerImage: {
    justifyContent: 'center',
    marginRight: 8
  },
  post: {
    color: '#000',
    fontSize: 12
  },
  rowBody: {
    paddingHorizontal: 5
  },
  containerFile: {
    backgroundColor: '#E1E1E1',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 5,
    flexDirection: 'row'
  },
  containerPost: {
    marginBottom: 11
  },
  labelNameFile: {
    color: '#000',
    fontSize: 11
  },
  labelSizeFile: {
    color: '#777777',
    fontSize: 10
  },
  detailFile: {
    marginLeft: 11
  }
})

export default Home;