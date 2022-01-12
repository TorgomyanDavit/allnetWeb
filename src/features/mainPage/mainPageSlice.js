import { createSlice } from "@reduxjs/toolkit";
import tvMatchFootball from "../../images/tvMatchFootball.png"
import tvMatchPremera from "../../images/tvMatchPremera.png"
import tvMir from "../../images/tvMir.png"
import tvRossia2 from "../../images/tvRossia2.png"
import personImg from "./userPage/images/PersonImg.png"
import messigePersonImg from "./userPage/images/messigePersonImg.png"
import contactsFb from "../../images/contactsFb.png"
import contactsGoogle from "../../images/contactsGoogle.png"
import contactsTelegram from "../../images/contactsTelegram.png"
import contactsTwitter from "../../images/contactsTwitter.png"

import androidIcon from "../../images/androidIcon.png"
import iosIcon from "../../images/iosIcon.png"
import LgSmart from "../../images/LgSmart.png"
import samsungImg from "../../images/samsungImg.png"
import smartIcon from "../../images/SmartIcon.png"







const initialState = {
    homeSliderSettings:{        
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    },
    channelGroupInput:{ 
        oneGroup:["Movie","Music","News","Sport","Entertainment","Other","Armenian"],
        twoGroup:["HD","4K","Ukrainian","Belarus","Educational","Childish","USA"]
    },
    tvChannel:{
        oneGroup:[tvMir,tvRossia2,tvMatchFootball,tvMatchPremera,tvMatchFootball,tvMir,tvRossia2,tvMatchFootball,tvMatchPremera],
        twoGroup:[tvMatchFootball,tvMatchPremera,tvRossia2,tvMatchFootball,tvMir,tvMatchFootball,tvMatchPremera,tvRossia2,tvMatchFootball]
    },
    tvChannelTwoSection:[
        [tvMir,tvRossia2,tvMatchFootball,tvMatchPremera,tvMatchFootball],
        [tvMatchFootball,tvMatchPremera,tvRossia2,tvMatchFootball,tvMir],
        [tvMatchPremera,tvMatchFootball,tvMir,tvRossia2,tvMatchPremera],
        [tvRossia2,tvMir,tvMatchPremera,tvMir,tvRossia2],
    ],
    svgImages:[
        {path:"/userPage/userHome",activeClass:"activeClass"},
        {path:"/userPerson",activeClass:"activeClass"},
        {path:"/userStatistic/table1",activeClass:"activeClass"},
        {path:"/userChannel",activeClass:"activeClass"},
        {path:"/statisticPortal",activeClass:"activeClass"},
        {path:"/messigePerson",activeClass:"activeClass"},
    ],
    animationPath:"null",
    animationPathDone:"null",
    personImg:personImg,
    imgType:false,
    innerSelect:["AM","EN"],
    Id:"",
    regAndsignNone:true,
    personData:[
        {id:1,dataName:"name",inner:"Raya Galstyan",type:"text",display:"none",placeholder:"changeName",value:""},
        {id:2,dataName:"E-mail",inner:"AllNet@mail.ru",type:"text",display:"none",placeholder:"changeMail",value:""},
        {id:3,dataName:"Password",inner:"******",type:"password",display:"none",placeholder:"changePassword",value:""}
    ],
    table:[
        {id:Math.random(),date:"20.02.2021",purpose:"purchase/extension of a pocket",balance:"3.00",theAmount:"3.00",remains:"3.00"},
        {id:Math.random(),date:"20.02.2021",purpose:"purchase/extension of a pocket",balance:"3.00",theAmount:"3.00",remains:"3.00"},
        {id:Math.random(),date:"20.02.2021",purpose:"purchase/extension of a pocket",balance:"3.00",theAmount:"3.00",remains:"3.00"},
        {id:Math.random(),date:"20.02.2021",purpose:"purchase/extension of a pocket",balance:"3.00",theAmount:"3.00",remains:"3.00"},
        {id:Math.random(),date:"20.02.2021",purpose:"purchase/extension of a pocket",balance:"3.00",theAmount:"3.00",remains:"3.00"},
        {id:Math.random(),date:"20.02.2021",purpose:"purchase/extension of a pocket",balance:"3.00",theAmount:"3.00",remains:"3.00"},
        {id:Math.random(),date:"20.02.2021",purpose:"purchase/extension of a pocket",balance:"3.00",theAmount:"3.00",remains:"3.00"},
        {id:Math.random(),date:"20.02.2021",purpose:"purchase/extension of a pocket",balance:"3.00",theAmount:"3.00",remains:"3.00"},
        {id:Math.random(),date:"20.02.2021",purpose:"purchase/extension of a pocket",balance:"3.00",theAmount:"3.00",remains:"3.00"},
        {id:Math.random(),date:"20.02.2021",purpose:"purchase/extension of a pocket",balance:"3.00",theAmount:"3.00",remains:"3.00"},
        {id:Math.random(),date:"20.02.2021",purpose:"purchase/extension of a pocket",balance:"3.00",theAmount:"3.00",remains:"3.00"}
    ],
    channelInputDiv:[
        ["Movie","Music","News","FHD"],
        ["HD","4K","Ukrainian","Belarus"],
        ["Sport","Entertainment","Other","Armenian"],
        ["Educational","Childish","USA"]
    ],
    formatInput:[
        ".m3u8 Playlist",".m3u Playlist",
        "OpenBox Internet TV+","Samsung tv",
        "Enigma Playlist"
    ],
    PortalId:"",
    formPortal:[
        {
            id:1,
            name:"m3u8",
            link:"",
            placeholder:"https://www.youtube.com/"
        },
        // {
        //     id:2,
        //     name:"Media library :",
        //     link:"",
        //     placeholder:"http://cf686e62d9e1.akciatv.org/playlists/uplist/3777b55dc19a39ebaf5b6d55f53dcc9d/playlist.m3u8"
        // },        
        // {
        //     id:3,
        //     name:"Stalker Portal :",
        //     link:"",
        //     placeholder:"http://cf686e62d9e1.akciatv.org/playlists/uplist/3777b55dc19a39ebaf5b6d55f53dcc9d/playlist.m3u8"
        // },
    ],
    messigePerson:[
        {
        description:"The playlist in the preset format - M3U8 is available via the link provided above.",
        date:"20.01.2021",name:"Raya Galstyan",img:messigePersonImg
        },
        {
        description:"The playlist in the preset format - M3U8 is available via the link provided above.",
        date:"20.01.2021",name:"Raya Galstyan",img:messigePersonImg
        },        
        {
        description:"The playlist in the preset format - M3U8 is available via the link provided above.",
        date:"20.01.2021",name:"Raya Galstyan",img:messigePersonImg
        },        
        {
        description:"The playlist in the preset format - M3U8 is available via the link provided above.",
        date:"20.01.2021",name:"Raya Galstyan",img:messigePersonImg
        },
    ],
    faq:[
        {id:1,name:"Lorem ipsum dolor sit amet?",simbol:"+",open:false},
        {id:2,name:"Lorem ipsum dolor sit amet?",simbol:"+",open:false},
        {id:3,name:"Lorem ipsum dolor sit amet?",simbol:"+",open:false},
        {id:4,name:"Lorem ipsum dolor sit amet?",simbol:"+",open:false},
        {id:5,name:"Lorem ipsum dolor sit amet?",simbol:"+",open:false},
        {id:5,name:"Lorem ipsum dolor sit amet?",simbol:"+",open:false},
        {id:6,name:"Lorem ipsum dolor sit amet?",simbol:"+",open:false}
    ],
    contactDivSocialLink:[
        {id:1,img:contactsFb,background:"#6561FF",Link:"https://ru-ru.facebook.com/"},
        {id:2,img:contactsGoogle,background:"#FF1F00",Link:"https://web.telegram.org/k/"},
        {id:3,img:contactsTelegram,background:"#0085FF",Link:"https://web.telegram.org/k/"},
        {id:4,img:contactsTwitter,background:"#282828",Link:"https://web.telegram.org/k/"}
    ],
    MainPageTvChanne:[smartIcon,androidIcon,iosIcon,LgSmart,samsungImg],
    Tarif:[
        {id:1,country:"Armenian",month:"Month - 10$",year:"year - 100%"},
        {id:2,country:"Russian",month:"Month - 10$",year:"year - 100%"},
        {id:3,country:"Armenian+Russian",month:"Month - 10$",year:"year - 100%"}
    ],
    TarifThanksShow:false
}

const mainPageSlices = createSlice({
    name:"mainPage",
    initialState:initialState,
    
    reducers :{
        changeDisplay:(state,action) => {
            state.personData = state.personData.map((val) => {
                if(val.id === action.payload.id && val.display === "none") {
                    return {...val,display:"block"}
                } else if((val.id === action.payload.id && val.display === "none")) {
                    return {...val,display:"none"}
                }
                return {...val,display:"none"}
            })
        },
        changeDate:(state,action) => {
            state.personData = state.personData.map((val) => {
                if(val.id === action.payload.id) {
                    return {...val,inner:val.value}
                }
                return val
            })
        },
        setValue:(state,action) => {
            state.personData = state.personData.map((val) => {
                if(val.id === action.payload.id) {
                    return {...val,value:action.payload.value}
                }
                return val
            })
        },
        setId:(state,action) => {
            console.log(action.payload.id)
            state.Id = action.payload.id
        },
        changeUserImg:(state,action) => {
            state.personImg = action.payload.userImg
        },
        checkLink:(state,action) => {
            state.PortalId = action.payload.id
            state.formPortal.forEach((val) => {
                if(val.id === action.payload.id) {
                    val.link = action.payload.value
                }
            })
        },
        checkPlaceholder:(state,action) => {
            console.log(action.payload)
            state.formPortal.forEach((val) => {
                if(val.id === action.payload.id) {
                    val.placeholder = val.link
                }
            })
            state.formPortal.forEach((val) => {
                if(val.id === action.payload.id) {
                    val.link = ""
                }
            })
        },
        changeAnimation:(state,action) => {
            state.animationPath = action.payload.value
        },
        changeAnimationPathDone:(state,action) => {
            state.animationPathDone = action.payload.value
        },
        changeImgType:(state,action) => {
            state.imgType = action.payload.type
        },
        changeRegAndSignImgdisplay:(state,action) => {
            state.regAndsignNone = !state.regAndsignNone
        },
        changeFaq:(state,action) => {
            state.faq = state.faq.map((val) => {
                if(val.id === action.payload.id) {
                    return {...val,open:!val.open,simbol:val.open ? "+" : "-"}  
                }
                return {...val,open:false,simbol:"+"}
            })
        },
        showThanks:(state,action) => {
            state.TarifThanksShow = !state.TarifThanksShow
            console.log(state.TarifThanksShow)

        }
    }
})

export const {showThanks,changeFaq,changeRegAndSignImgdisplay,changeImgType,changeAnimationPathDone,changeAnimation,changeDisplay,changeDate,setValue,setId,changeUserImg,checkLink,checkPlaceholder} = mainPageSlices.actions

export default mainPageSlices.reducer