import React, { useEffect, useState } from 'react'
import { ImageBackground, StyleSheet, Text, View, Pressable} from 'react-native'

const Arrpuzzle =()=>{
    const[num,setnum] = useState([])


    useEffect(()=>{
        var temp =[]
        for( var i=0;i<9;){
            var randomNum = Math.floor(Math.random()*9);
            if(!temp.includes(randomNum)){
                temp.push(randomNum)
                i++;
            }
        }
        for(var j=0;j<temp.length;j++){
            if(temp[j]==0){
                temp[j] = ""
            }
        }
        console.log(temp)
        setnum(temp);
    },[])
    

    const btnclick=(index)=>{
        var copy =[...num]
        console.log(index)
        if(index == 0){
            if(copy[1] == ""){
                copy[1] = copy[index]
                copy[index] = ""
            }
            if(copy[3] == ""){
                copy[3] = copy[index]
                copy[index] = ""
            }    
        }else if(index == 1){
            if(copy[0] == ""){
                copy[0] = copy[index]
                copy[index] = ""
            }
            if(copy[2] == ""){
                copy[2] = copy[index]
                copy[index] = ""
            }
            if(copy[4] == ""){
                copy[4] = copy[index]
                copy[index] = ""
            }   
        }else if(index == 2){
            if(copy[1] == ""){
                copy[1] = copy[index]
                copy[index] = ""
            }
            if(copy[5] == ""){
                copy[5] = copy[index]
                copy[index] = ""
            }  
        }else if(index == 3){
            if(copy[0] == ""){
                copy[0] = copy[index]
                copy[index] = ""
            }
            if(copy[4] == ""){
                copy[4] = copy[index]
                copy[index] = ""
            } 
            if(copy[6] == ""){
                copy[6] = copy[index]
                copy[index] = ""
            } 
        }else if(index == 4){
            if(copy[1] == ""){
                copy[1] = copy[index]
                copy[index] = ""
            }
            if(copy[3] == ""){
                copy[3] = copy[index]
                copy[index] = ""
            } 
            if(copy[5] == ""){
                copy[5] = copy[index]
                copy[index] = ""
            } 
            if(copy[7] == ""){
                copy[7] = copy[index]
                copy[index] = ""
            } 
        }else if(index == 5){
            if(copy[2] == ""){
                copy[2] = copy[index]
                copy[index] = ""
            }
            if(copy[4] == ""){
                copy[4] = copy[index]
                copy[index] = ""
            }
            if(copy[8] == ""){
                copy[8] = copy[index]
                copy[index] = ""
            }   
        }else if(index == 6){
            if(copy[3] == ""){
                copy[3] = copy[index]
                copy[index] = ""
            }
            if(copy[7] == ""){
                copy[7] = copy[index]
                copy[index] = ""
            }  
        }else if(index == 7){
            if(copy[6] == ""){
                copy[6] = copy[index]
                copy[index] = ""
            }
            if(copy[4] == ""){
                copy[4] = copy[index]
                copy[index] = ""
            }
            if(copy[8] == ""){
                copy[8] = copy[index]
                copy[index] = ""
            }   
        }else if(index == 8){
            if(copy[5] == ""){
                copy[5] = copy[index]
                copy[index] = ""
            }
            if(copy[7] == ""){
                copy[7] = copy[index]
                copy[index] = ""
            }  
        }
        setnum(copy)
    }
   

  return (
    <>
         <View style={style.main}>
            <ImageBackground source={require('./img/back.jpg')} style={{height:'100%',width:'100%'}}>
                <Text style={style.head}>Puzzle Game</Text>
                <View style={style.box}>

                {
                    num.map((item,index)=>{
                        return(
                                <Pressable onPress={() =>{btnclick(index)}}>
                                    <Text style={style.txt}>{item}</Text>
                                </Pressable>
                        )
                    })
                }
                            </View>
            </ImageBackground>
        </View>
    </>
  )
}


export default Arrpuzzle;
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
   
    // rest:{
    //     backgroundColor:'#453D3A',
    //     color:'#fae8d7',
    //     width:'30%',
    //     fontSize:30,
    //     textAlign:'center',
    //     marginLeft:'35%',
    //     marginTop:'15%',
    //     borderWidth:2,
    //     borderColor:'#DDC8B5',
    //     borderRadius:10

    // },
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

    }
})

