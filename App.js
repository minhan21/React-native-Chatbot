
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import PropTypes from 'prop-types';
import ChatBot from 'react-native-chatbot';
import {WebView} from 'react-native-webview';
const styles = StyleSheet.create({
  imagestyle:{
    width:'100%',
    height:'100%',
  
  },
  container2:{
    flex:1,
    height:1200,
  },
  container:{
    flex:1,
    height:600,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row'

  },
  divimg:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',


  },
  divsmall:{
    flex:1,
    flexDirection:"row",
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff',
    marginBottom:3,
    borderColor: '#F26F21'
 
  },
  logo:{
    width:'50%',
    height:'50%'
  },
  divlogo:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    height:'auto',
    width:'100%',

  },
  textstyle:{
    flex:1,
    flexDirection:"column",
  },
  textstyler:{
    fontSize:18,
    fontWeight: 'bold',
    fontFamily: 'Cochin',
  },
  img:{
    height:'100%',
    width:100,
    flex:1,
    },
 menu1:{
  flex:1,
  justifyContent:'center',
  alignItems:'center',
  flexDirection:'column',
 },
 webb:{
   height:350,
 }
  });

  // class Review extends Component {
  //   constructor(props) {
  //     super(props);
  
  //     this.state = {
  //       name: '',
  //       gender: '',
  //       age: '',
  //     };
  //   }
  
  //   componentWillMount() {
  //     const { steps } = this.props;
  //     const { name, gender, age } = steps;
  
  //     this.setState({ name, gender, age });
  //   }
  
  //   render() {
  //     const { name, gender, age } = this.state;
  //     return (
  //       <div style={{ width: '100%' }}>
  //         <h3>Summary</h3>
  //         <table>
  //           <tbody>
  //             <tr>
  //               <td>Name</td>
  //               <td>{name.value}</td>
  //             </tr>
  //             <tr>
  //               <td>Gender</td>
  //               <td>{gender.value}</td>
  //             </tr>
  //             <tr>
  //               <td>Age</td>
  //               <td>{age.value}</td>
  //             </tr>
  //           </tbody>
  //         </table>
  //       </div>
  //     );
  //   }
  // }
  
  // Review.propTypes = {
  //   steps: PropTypes.object,
  // };
  
  // Review.defaultProps = {
  //   steps: undefined,
  // };
  
const steps=[
{ 
  id: '1',
  message: 'Chào bạn, tôi là SmartSchool Team!',
  trigger: 'x',
},
{ 
  id: 'x',
  message: 'Bạn tên gì ?',
  trigger:'2'  
},
{
  id: '2',
  user: true,
  trigger: '3',
},
{
  id: '3',
  message: 'Hi {previousValue}, rất vui được trò chuyện cùng bạn!',
  trigger: '4',
},
{
  id: '4',
  message: 'Bạn cần mình giúp gì nào ?',
  trigger: '5',
},
{
  id: '5',
  options: [
    { value: 1, label: 'Liên hệ phòng CTSV', trigger: '7' },
    { value: 2, label: 'Tác giả của SmartSchool là ai?', trigger: '6' },
    { value: 3, label: 'Phòng học của mình ở đâu ?', trigger: 'phonghoc' },
    { value: 4, label: 'Tán gẫu với mình nhé?', trigger:'8'},
    { value: 5, label: 'Căn tin hôm nay bán món gì?', trigger:'9'},
    { value: 6, label: 'Phòng CTSV ở đâu?', trigger:'10'},
    { value: 7, label: 'Email liên hệ giảng viên', trigger:'11'},
    { value: 8, label: 'Các sự kiện của FPoly sắp tới', trigger:'event'},
    { value: 9, label: 'Lịch nghỉ lễ Fpoly HCM', trigger:'calendar'},
    { value: 10, label: 'Website SmartSchool Team', trigger:'team'},
  ],
},
{
id:'team',
component:(
  <View style={{height:800,width: '100%'}}>  
    <WebView 
    source={{ uri: 'http://lehau.me/' }} 
    javaScriptEnabled
    userAgent={"Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Mobile Safari/537.36"}
    />
  </View>
),
trigger:'5'
},
{
id:'calendar',
component:(
  <View style={styles.container} >
  <Image style={styles.img}      resizeMode="stretch"
  source={{uri: 'https://scontent.fsgn5-7.fna.fbcdn.net/v/t1.0-9/65262176_1277491189077046_1473456795103002624_n.png?_nc_cat=103&_nc_oc=AQn-YlF6HTtBz_n3uQOFDKa-L7bofh3RNzZOsZTvcsflZdWk3KdXDaPkK0LCLGeLRmU&_nc_ht=scontent.fsgn5-7.fna&oh=390fdb3b6dedeb710c2da2915ac1a652&oe=5D78EE36'}}/>
  </View>
),
trigger:'5'
},
{
  id:'phonghoc',
  message:'đang cập nhật',
  trigger:'5'
},
{
  id:'9',
  component:(
    <View style={styles.container} > 
    <View style={styles.menu1}>
    {/* menu 1 */}
    <View style={styles.divimg}>
    <Image style={styles.img}      resizeMode="stretch"
    source={{uri: 'https://photo-3-baomoi.zadn.vn/w1000_r1/17/11/20/265/24016724/1_44376.jpg'}}/>

    <Text style={styles.textstyler}>Cơm sườn</Text>
    <Text>20.000 VND </Text>

    </View>


    <View style={styles.divimg}>
    <Image style={styles.img} resizeMode="stretch"
    source={{uri: 'https://cdn.tgdd.vn/Files/2018/07/27/1104723/cach-lam-mi-xao-trung-nhanh-gon-ma-thom-ngon-hap-dan-9-760x367.jpg'}}/>
    

    <Text style={styles.textstyler}>Mì xào trứng </Text>
    <Text>20.000 VND </Text>

    </View>


    <View style={styles.divimg}>
    <Image style={styles.img}
     resizeMode="stretch"
    source={{uri: 'https://ameovat.com/wp-content/uploads/2016/09/cach-lam-nui-xao-bo-600x400.jpg'}}/>
 
    <Text style={styles.textstyler}>Nui xào trứng </Text>
    <Text>20.000 VND </Text>

    </View>
    </View>
    {/* menu2 */}
    <View style={styles.menu1}>
    {/* menu 1 */}
    <View style={styles.divimg}>
    <Image style={styles.img}      resizeMode="stretch"
    source={{uri: 'https://nghebep.com/wp-content/uploads/2018/01/com-chien-ca-man.jpg'}}/>

    <Text style={styles.textstyler}>Cơm cá chiên </Text>
    <Text>20.000 VND </Text>

    </View>


    <View style={styles.divimg}>
    <Image style={styles.img} resizeMode="stretch"
    source={{uri: 'http://neverland.vn/wp-content/uploads/2015/12/IMG_1611-crop2.jpg'}}/>
    

    <Text style={styles.textstyler}>Cơm đùi gà</Text>
    <Text>20.000 VND </Text>

    </View>


    <View style={styles.divimg}>
    <Image style={styles.img}
     resizeMode="stretch"
    source={{uri: 'http://images.alobacsi.vn/Images/Uploaded/Share/2016/07/14/b33nau-mi-goi.png'}}/>
 
    <Text style={styles.textstyler}>Mì gói nước </Text>
    <Text>20.000 VND </Text>

    </View>
    </View>
    {/* menu3 */}
    <View style={styles.menu1}>
    {/* menu 1 */}
    <View style={styles.divimg}>
    <Image style={styles.img}      resizeMode="stretch"
    source={{uri: 'https://monngonmoingay.com/wp-content/uploads/2015/08/Ca-ro-kho-to-2.png'}}/>

    <Text style={styles.textstyler}>Cơm cá rô</Text>
    <Text>20.000 VND </Text>

    </View>


    <View style={styles.divimg}>
    <Image style={styles.img} resizeMode="stretch"
    source={{uri: 'https://img-global.cpcdn.com/005_recipes/072d6839ce4a7ed3/400x400cq70/photo.jpg'}}/>
    

    <Text style={styles.textstyler}>Bánh bao </Text>
    <Text>20.000 VND </Text>

    </View>


    <View style={styles.divimg}>
    <Image style={styles.img}
     resizeMode="stretch"
    source={{uri: 'http://thieulamua.com/wp-content/uploads/2017/09/nuoc-ngot-coke-sleek-330ml-1-700x467-1.jpg'}}/>
 
    <Text style={styles.textstyler}>Nước ngọt </Text>
    <Text>20.000 VND </Text>

    </View>
    </View>
    </View>
  ),
  trigger:'5'
},
{
id:'10',
message:'Lầu 5 Phòng CTSV',
trigger:'5'
},
{
id:'11',
message:'Email',
trigger:'5',
},
{
  id:'event',
  component:(
    <View style={{height:2400,width: '100%'}}>  
      <WebView 
      source={{ uri: 'https://caodang.fpt.edu.vn/category/su-kien' }} 
      javaScriptEnabled
      userAgent={"Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Mobile Safari/537.36"}
      />
    </View>
  ),
    trigger:'5'
},
{
  id: '6',
  component:(
    
    <View style={styles.container2} >
      {/* <View style={{flex:1,justifyContent:'center',alignItems:'center'}}> 
      <Image style={styles.logo}
      resizeMode="stretch"
      source={{uri: 'http://lehau.me/assets/img/logo.png'}}/>
      </View> */}
      {/* <View style={styles.divsmall}> */}
      <View style={styles.divlogo}>
      <Image  resizeMode="stretch" style={styles.imagestyle}
      source={require('./react-native/img/An.png')}/>
      </View>
      {/* <View style={styles.textstyle}>
    <Text style={styles.textstyler}>Trần Đỗ Minh Ân</Text>
    <Text>Chuyên ngành: Lập trình Mobile</Text>
    <Text>Chủ nhiệm CLB SharkIT</Text>
    </View> */}
    {/* </View> */}
    {/* <View style={styles.divsmall}> */}
    <View style={styles.divlogo} >
      <Image  resizeMode="stretch" style={styles.imagestyle}
         source={require('./react-native/img/Duy.png')} />
         </View>
      {/* <View style={styles.textstyle}>
       <Text style={styles.textstyler}>Lưu Minh Thuấn</Text>
       <Text>Chuyên ngành: Lập trình Mobile</Text>
    <Text>Thành viên CLB SharkIT</Text>
    </View> */}
       {/* </View> */}
       {/* <View style={styles.divsmall}> */}
       <View style={styles.divlogo}>
      <Image  resizeMode="stretch" style={styles.imagestyle}
       source={require('./react-native/img/Thuan.png')} />
       </View>
       {/* <View style={styles.textstyle}>
       <Text style={styles.textstyler}>Nguyễn Thanh Duy</Text>
       <Text>Chuyên ngành: Ứng dụng phần mềm</Text>
    <Text>Phó Chủ nhiệm CLB SharkIT</Text>
    </View> */}
       {/* </View> */}
       {/* <View style={styles.divsmall}> */}
       <View style={styles.divlogo}>
      <Image  resizeMode="stretch" style={styles.imagestyle}
   source={require('./react-native/img/Hau.png')} />
   </View>
       {/* <View style={styles.textstyle}>
       <Text style={styles.textstyler}>Lê Bá Hậu</Text>
       <Text>Chuyên ngành: Ứng dụng phần mềm</Text>
    <Text>Thành viên ban quản trị J2team</Text>
    </View> */}
       {/* </View> */}
       <View style={styles.divlogo}>
      <Image  resizeMode="stretch" style={styles.imagestyle}
   source={require('./react-native/img/Dat.png')} />
   </View>


   <View style={styles.divlogo}>
      <Image  resizeMode="stretch" style={styles.imagestyle}
   source={require('./react-native/img/QuocAnh.png')} />
   </View>
        </View>
  ),
  trigger:'5',
},
{
  id: '7',
  message: 'Rất vui khi nói chuyện cùng bạn!',
  trigger:'5'
},
{
id:'8',
message:'Bạn tên gì vậy?',
trigger:'userrep'
},
{
  id:'userrep',
  user:true,
  trigger:'gender'
},
{
id:'gender',
message:'Hi {previousValue}! Bạn là nam hay nữ?',
trigger:'sex'
},
{
  id: 'sex',
  options: [
    { value: 'Nam', label: 'Nam', trigger: 'question' },
    { value: 'Nữ', label: 'Nữ', trigger: 'question' },
    { value: 'Bóng', label: 'Bóng bùng binh', trigger: 'question' },
  ],
},
{
  id: 'question',
  message: 'Ấy bao tuổi?',
  trigger: 'age',
},
{
  id: 'age',
  user: true,
  trigger: 'accept',
  validator: (value) => {
    if (isNaN(value)) {
      return 'Tuổi thì phải là số chứ :3';
    } else if (value < 0) {
      return 'Bạn là người âm à :v';
    } else if (value > 100) {
      return `${value}? Mình đang nói chuyện với người trời ư ?`;
    }

    return true;
  },
},
{
  id:'accept',
  message:'Tuyệt vời, hãy xem qua thông tin bạn của mình nè!',
  trigger:'7',
},


]
export default class App extends React.Component {

  render() {

    return (
      <View>
    <ChatBot  
      steps={steps}
      userAvatar={"http://lehau.me/assets/img/avarta1.jpg"} 
      botAvatar={"https://i.imgur.com/gzgYX84.png"}/>
      </View>
     ); 
    
 }
}
  // speechSynthesis={{ enable: true, lang: 'en' }}
  // steps={[
  //   {
  //     id: '1',
  //     message: 'What is your name?',
  //     trigger: '2',
  //   },
  //   {
  //     id: '2',
  //     user: true,
  //     trigger: '3',
  //   },
  //   {
  //     id: '3',
  //     message: 'Hi {previousValue}, nice to meet you!',
  //     end: true,
  //   },
  // ]}
  // />
  


