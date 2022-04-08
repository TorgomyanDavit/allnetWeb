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
import { getAllContent } from "./getRequest";
import { sendEmail, getUserPage, newPass, postLogAuth, postRegister, postSignIn } from "./postRequest";







const initialState = {
    // async
    server:"http://127.0.0.1:8000/api",
    mainPagePagination:{title:"",description:""},
    mainPAboutPagination:{description:""},
    mainContactPagination:{
        messagePhone:"",
        messageEmail:"",
        contactDivSocialLink:[
            {id:1,img:contactsFb,background:"#6561FF",Link:""},
            {id:2,img:contactsGoogle,background:"#FF1F00",Link:""},
            {id:3,img:contactsTelegram,background:"#0085FF",Link:""},
            {id:4,img:contactsTwitter,background:"#282828",Link:""}
        ],
    },
    mainFaqPagination:[],
    userPage:[],


    regEmailErrorAuthenticated:false,
    loginemailValidation:false,
    forgetemailError:false,
    access_token:false,
    sendEmailRedirect:false,
    // newPasswordSucces:false,


    paginationTarif:[],
    loading:{mainLoading:false},




    // notAsync 
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
    table:{
        countPage:[...new Array(20)],
        showPage:[...new Array(3)],
        data:[
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
    },
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
            date:"20.01.2021",name:"Raya Galstyan",img:messigePersonImg,id:1
        },
        {
            description:"The playlist in the preset format - M3U8 is available via the link provided above.",
            date:"20.01.2021",name:"Raya Galstyan",img:messigePersonImg,id:2
        },        
        {
            description:"The playlist in the preset format - M3U8 is available via the link provided above.",
            date:"20.01.2021",name:"Raya Galstyan",img:messigePersonImg,id:3
        },        
        {
            description:"The playlist in the preset format - M3U8 is available via the link provided above.",
            date:"20.01.2021",name:"Raya Galstyan",img:messigePersonImg,id:4
        },
    ],
    MainPageTvChanne:[smartIcon,androidIcon,iosIcon,LgSmart,samsungImg],
    TarifThanksShow:false,
    receiveLetterShow:false,
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
            state.mainFaqPagination = state.mainFaqPagination.map((val) => {
                if(val.id === action.payload.id) {
                    return {...val,open:!val.open,simbol:val.open ? "+" : "-"}  
                }
                return {...val,open:false,simbol:"+"}
            })
        },
        showThanks:(state,action) => {
            state.TarifThanksShow = !state.TarifThanksShow

        },
        delsetMessige:(state,action) => {
            state.messigePerson = state.messigePerson.filter((val) => {
                return val.id !== action.payload.id
            })
        },
        closeLetter:(state,action) => {
            state.receiveLetterShow = !state.receiveLetterShow
        },
        paginationCount:(state,action) => {
        //    state.table.countPage = [...new Array(action.payload)]
        },
        loading:(state) => {
            state.loading.mainLoading = false
        },
        registerAuth:(state) => {
            state.regEmailErrorAuthenticated = false
        },
        loginAuth:(state) => {
            state.loginemailValidation = false
        },
        forgetemailError:(state) => {
            state.forgetemailError = false
        },
        sendLetterMail:(state,action) => {
            state.sendEmailRedirect = false
        }
    },

    extraReducers:(builder) => {
        builder
        .addCase(getAllContent.pending,(state,action) => {
            console.log("pending Getallcontent",action);
            state.loading.mainLoading = "loading"
        })
        .addCase(getAllContent.fulfilled,(state,action) => {
            console.log("fullfiled Getallcontent",action);
            action.payload.forEach((data) => {
                let key = Object.keys(data)
                switch(key[0]) {
                    case "home" : 
                    state.mainPagePagination.description = data.home.description
                    state.mainPagePagination.title = data.home.title
                    break;

                    case "about" : 
                    state.mainPAboutPagination.description = data.about.content;
                    break;

                    case "contact" : 
                    let {phone,email,facebook_link,google_link,twitter_link,telegram_link} = data.contact
                    state.mainContactPagination.messagePhone = phone
                    state.mainContactPagination.messageEmail = email
                    state.mainContactPagination.contactDivSocialLink = state.mainContactPagination.contactDivSocialLink.map((val) => {
                        switch(val.id) {
                            case 1 : val.Link = facebook_link;return val;
                            case 2 : val.Link = google_link;return val;
                            case 3 : val.Link = telegram_link;return val;
                            case 4 : val.Link = twitter_link;return val;
                        }
                    });
                    break;

                    case "faq" : 
                        state.mainFaqPagination = data.faq.map((val) => {
                            return {id:val.id,title:val.title,description:val.description,simbol:"+",open:false}
                        })
                    break;

                    case "tariffs" : 
                        state.paginationTarif = data.tariffs
                    break;
                    
                }
            })
            state.loading.mainLoading = false
            
        })
        .addCase(getAllContent.rejected,(state,action) => {
            console.log("rejected Getallcontent",action);
        })

        // postRegister
        .addCase(postRegister.pending,(state,action) => {
            state.loading.mainLoading = "loading"
            console.log("pending register",action);
        })
        .addCase(postRegister.fulfilled,(state,action) => {
            if(!!action.payload.errors) {state.regEmailErrorAuthenticated = true} 
            else if(!!action.payload.access_token) {
                sessionStorage.setItem("authenticated", action.payload.access_token);
            } else {state.access_token = null}
            state.loading.mainLoading = false
            console.log("fulfiled register",action);

        })

        // postLogin
        .addCase(postSignIn.pending,(state,action) => {
            console.log("pending signin",action);
            state.loading.mainLoading = "loading"
        })
        .addCase(postSignIn.fulfilled,(state,action) => {
            if(!!action.payload.error) {state.loading.mainLoading = true;state.loginemailValidation = true} 
            else if(!!action.payload.access_token) {
                sessionStorage.setItem("authenticated", action.payload.access_token);
            } 
            state.loading.mainLoading = false
            console.log("fulfiled signin",action);
        })

        // get UserPageMain
        .addCase(getUserPage.pending,(state,action) => {
            console.log("pending userPage",action);
            state.loading.mainLoading = "loading"
        })
        .addCase(getUserPage.fulfilled,(state,action) => {
            console.log("fulfiled userPAge",action);
            if(!!action.payload.error) {state.loginemailValidation = true} 
            else if(!!action.payload.access_token) {
                sessionStorage.setItem("authenticated", action.payload.access_token);
            } 
            state.userPage = action.payload
            state.loading.mainLoading = false
        })

        // LogAuth
        .addCase(postLogAuth.pending,(state,action) => {
            console.log("pending logAuth",action);
            state.loading.mainLoading = "loading"
        })
        .addCase(postLogAuth.fulfilled,(state,action) => {
            console.log("fulfiled logauth",action);
            state.loading.mainLoading = false
        })

        // sendEmail
        .addCase(sendEmail.pending,(state,action) => {
            console.log("pending sendMail",action);
            state.loading.mainLoading = "loading"
        })
        .addCase(sendEmail.fulfilled,(state,action) => {
            console.log("fulfiled sendMail",action);
            if(!action.payload.error) {state.sendEmailRedirect = true} 
            else if(!!action.payload.error) {state.forgetemailError = true} 
            state.loading.mainLoading = false
        })

        // newPass
        .addCase(newPass.pending,(state,action) => {
            console.log("pending newPassword",action);
            state.loading.mainLoading = "loading";
        })
        .addCase(newPass.fulfilled,(state,action) => {
            console.log("fulfiled newPassword",action);
            state.loading.mainLoading = false;
        })
    }
})
// torgomyandavid96@gmail.com
// davit.torgomyan96@mail.ru
export const {
    aginationCount,closeLetter,delsetMessige,showThanks,changeFaq,changeRegAndSignImgdisplay,
    changeImgType,changeAnimationPathDone,changeAnimation,changeDisplay,changeDate,setValue,
    setId,changeUserImg,checkLink,checkPlaceholder,loading,registerAuth,loginAuth,
    forgetemailError,sendLetterMail
} = mainPageSlices.actions

export default mainPageSlices.reducer

