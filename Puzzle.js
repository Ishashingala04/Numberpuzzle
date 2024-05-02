import React, { useState, useEffect } from "react";
import { Alert, ImageBackground, Pressable, StyleSheet, Text, Vibration, View } from "react-native";
function Puzzle(){

    const[btn1,setbtn1]=useState('2');
    const[btn2,setbtn2]=useState('6');
    const[btn3,setbtn3]=useState('4');
    const[btn4,setbtn4]=useState('1');
    const[btn5,setbtn5]=useState('5');
    const[btn6,setbtn6]=useState('');
    const[btn7,setbtn7]=useState('3');
    const[btn8,setbtn8]=useState('8');
    const[btn9,setbtn9]=useState('7');
    const[win,setwin]=useState('');

    function generateRandomNumbers() {

        const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', ''];
        let temp = numbers.length, randomIndex;

        while (temp !== 0) {
            randomIndex = Math.floor(Math.random() * temp);
            temp--;
        
            [numbers[temp], numbers[randomIndex]] = [
                numbers[randomIndex], numbers[temp]];
        }
        
        return numbers;
    }
       
        function button1(){
            if(btn1 ==""){
                setbtn1(btn2);
                setbtn2('')
            }else
            if(btn2 ==""){
                setbtn2(btn1);
                setbtn1('')
            }else 
            if(btn4 ==""){
                setbtn4(btn1);
                setbtn1('')
            }

        }
        function button2(){
            if(btn1 ==""){
                setbtn1(btn2);
                setbtn2('')
            }else
            if(btn5 ==""){
                setbtn5(btn2);
                setbtn2('')
            }else
            if(btn3 ==""){
                setbtn3(btn2);
                setbtn2('')
            }
            
        }
        function button3(){
            if(btn2 ==""){
                setbtn2(btn3);
                setbtn3('')
            }else
            if(btn6 ==""){
                setbtn6(btn3);
                setbtn3('')
            }
        
        }
        function button4(){
            if(btn1 == ""){
                setbtn1(btn4);
                setbtn4('')
             }else
             if(btn5 ==""){
                setbtn5(btn4);
                setbtn4('')
             }else
             if(btn7 ==""){
                setbtn7(btn4);
                setbtn4('')
             }
        }
        function button5(){
           if(btn2 ==""){
            setbtn2(btn5);
            setbtn5('')
           }else
           if(btn4 ==""){
            setbtn4(btn5);
            setbtn5('')
           }else
           if(btn8 ==""){
            setbtn8(btn5);
            setbtn5('')
           }else
           if(btn6 == ""){
            setbtn6(btn5);
            setbtn5('')
        } 
        }
        function button6(){
            if(btn3 ==""){
                setbtn3(btn6);
                setbtn6('')
            }else
            if(btn5 == ""){
                setbtn5(btn6);
                setbtn6('')
            }else
            if(btn9 ==""){
                setbtn9(btn6);
                setbtn6('')
            }
        }
        function button7(){
            if(btn4 ==""){
                setbtn4(btn7);
                setbtn7('')
            }else
            if(btn8 ==""){
                setbtn8(btn7);
                setbtn7('')
            }
        }
        function button8(){
            if(btn5 ==""){
                setbtn5(btn8);
                setbtn8('')
            }else
            if(btn7 ==""){
                setbtn7(btn8);
                setbtn8('')
            }else
            if(btn9 ==""){
                setbtn9(btn8);
                setbtn8('')
            }
        }
        function button9(){
              
            if(btn8 == ""){
                setbtn8(btn9);
                setbtn9('')
            }else
            if(btn6 ==""){
                setbtn6(btn9);
                setbtn9('')
            }
        }


        function handleReset() {
            const newNumbers = generateRandomNumbers();
            setbtn1(newNumbers[0]);
            setbtn2(newNumbers[1]);
            setbtn3(newNumbers[2]);
            setbtn4(newNumbers[3]);
            setbtn5(newNumbers[4]);
            setbtn6(newNumbers[5]);
            setbtn7(newNumbers[6]);
            setbtn8(newNumbers[7]);
            setbtn9(newNumbers[8]);
            setwin('');
        }

        function winning(){
            if(btn1 =='1' &&  btn2 =='2' &&  btn3 =='3' &&  btn4 =='4' &&  btn5 =='5' &&  btn6 =='6' &&  btn7 =='7' &&  btn8 =='8' &&  btn9 ==''){
                setwin('You Are Win..🎊');
               
            }
        }

        useEffect(() =>{
            winning();
        },[btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9])
    return(
        <>
       

        <View style={style.main}>
            <ImageBackground source={require('./img/back.jpg')} style={{height:'100%',width:'100%'}}>
                <Text style={style.head}>Puzzle Game</Text>
            <View style={style.box}>
                <Pressable onPress={button1} style={style.pzl}><Text style={style.txt}>{btn1}</Text></Pressable>
                <Pressable onPress={button2} style={style.pzl}><Text style={style.txt}>{btn2}</Text></Pressable>
                <Pressable onPress={button3} style={style.pzl}><Text style={style.txt}>{btn3}</Text></Pressable>
                <Pressable onPress={button4} style={style.pzl}><Text style={style.txt}>{btn4}</Text></Pressable>
                <Pressable onPress={button5} style={style.pzl}><Text style={style.txt}>{btn5}</Text></Pressable>
                <Pressable onPress={button6} style={style.pzl}><Text style={style.txt}>{btn6}</Text></Pressable>
                <Pressable onPress={button7} style={style.pzl}><Text style={style.txt}>{btn7}</Text></Pressable>
                <Pressable onPress={button8} style={style.pzl}><Text style={style.txt}>{btn8}</Text></Pressable>
                <Pressable onPress={button9} style={style.pzl}><Text style={style.txt}>{btn9}</Text></Pressable>
                <Text style={{color:'white',fontSize:30,marginVertical:'7%',backgroundColor:'#453D3A'}}>{win}</Text>

                </View> 

                <Pressable onPress={handleReset}><Text style={style.rest}>Reset</Text></Pressable>

    
        </ImageBackground>

        </View>
      

        
        </>
    )
}
export default Puzzle;
const style = StyleSheet.create({

    main:{
        flex:1,
        justifyContent:'center',
    },
    head:{
        color:'#fae8d7',
        fontSize:50,
        textAlign:'center',
        marginVertical:'16%'

    },
   
    rest:{
        backgroundColor:'#453D3A',
        color:'#fae8d7',
        width:'30%',
        fontSize:30,
        textAlign:'center',
        marginLeft:'35%',
        marginTop:'8%',
        borderWidth:2,
        borderColor:'#DDC8B5',
        borderRadius:10

    },
    box:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center',
  
    },
   
    txt:{
        fontSize:60,
        color:'white',
        textAlign:'center',
        paddingTop:25, 
        fontFamily:'cursive', 
        height:120,
        width:120,
        borderWidth:2,
        borderColor:'#DDC8B5',
        borderRadius:10,
        justifyContent:'space-between',
        backgroundColor:'#453D3A',

    },
    movetxt:{
        fontSize:35,
        textAlign:'center',
        color:'#fae8d7',
        marginTop:'14%'
    }

})