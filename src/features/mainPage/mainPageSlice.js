import { createSlice } from "@reduxjs/toolkit";
import tvMatchFootball from "../../images/tvMatchFootball.png"
import tvMatchPremera from "../../images/tvMatchPremera.png"
import tvMir from "../../images/tvMir.png"
import tvRossia2 from "../../images/tvRossia2.png"
import contactsFb from "../../images/contactsFb.png"
import contactsGoogle from "../../images/contactsGoogle.png"
import contactsTelegram from "../../images/contactsTelegram.png"
import contactsTwitter from "../../images/contactsTwitter.png"
import androidIcon from "../../images/androidIcon.png"
import iosIcon from "../../images/iosIcon.png"
import LgSmart from "../../images/LgSmart.png"
import samsungImg from "../../images/samsungImg.png"
import smartIcon from "../../images/SmartIcon.png"
import { getAllContent, getNotification, getTarif, getUserData, getUserHistory, getUserHomePage } from "./getRequest";
import { sendEmail, newPass, postLogAuth, postRegister, postSignIn, changeUserData, buyTarif, deleteMessagePost, sendMessag } from "./postRequest";


const initialState = {
    // async
    server:"https://all.mergel-stone.am/api",
    serverForImg:"https://all.mergel-stone.am",
    // server:"http://127.0.0.1:8000/api",
    // serverForImg:"http://127.0.0.1:8000",
    mainPagePagination:{title:"",description:""},
    mainPAboutPagination:{about:null,therms:null,privacy:null},
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
    userHomePage:[],
    userPage:[],
    table:{
        Row:[12,24,50],
        rowCount:12,
        countPage:[],
        PageIndex:0,
        data:[]
    },
    userpageImg:[],
    paymentPage:[],

    
    personImg:"",
    checkTarifData:false,
    regEmailErrorAuthenticated:false,
    loginemailValidation:false,
    forgetemailError:false,
    access_token:false,
    sendEmailRedirect:false,
    // newPasswordSucces:false,



    ThanksShow:false,
    loading:{mainLoading:false},
    loadinHeight:undefined,




    // notAsync 
    homeSliderSettings:{        
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    },
    // tvChannel:{
    //     oneGroup:[tvMir,tvRossia2,tvMatchFootball,tvMatchPremera,tvMatchFootball,tvMir,tvRossia2,tvMatchFootball,tvMatchPremera],
    //     twoGroup:[tvMatchFootball,tvMatchPremera,tvRossia2,tvMatchFootball,tvMir,tvMatchFootball,tvMatchPremera,tvRossia2,tvMatchFootball]
    // },
    tvChannelTwoSection:[
        [tvMir,tvRossia2,tvMatchFootball,tvMatchPremera,tvMatchFootball],
        [tvMatchFootball,tvMatchPremera,tvRossia2,tvMatchFootball,tvMir],
        [tvMatchPremera,tvMatchFootball,tvMir,tvRossia2,tvMatchPremera],
        [tvRossia2,tvMir,tvMatchPremera,tvMir,tvRossia2],
    ],
    svgImages:[
        {path:"/userPage/userHome",activeClass:"activeClass"},
        {path:"/userPage/userPerson",activeClass:"activeClass"},
        {path:"/userPage/userStatistic/table1",activeClass:"activeClass"},
        {path:"/userPage/userChannel",activeClass:"activeClass"},
        // {path:"/userPage/statisticPortal",activeClass:"activeClass"},
        {path:"/userPage/messigePerson",activeClass:"activeClass"},
    ],
    animationPath:"null",
    animationPathDone:"null",
    imgType:false,
    innerSelect:["am","en"],
    Id:"",
    regAndsignNone:true,
    personData:[
        {id:1,dataName:"username",inner:"",type:"text",display:"none",placeholder:"changeName",value:""},
        {id:2,dataName:"email",inner:"",type:"text",display:"none",placeholder:"changeMail",value:""},
        {id:3,dataName:"Password",inner:"",type:"password",display:"none",placeholder:"changePassword",value:""}
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
    messigePerson:[],
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
                } 
                return {...val,display:"none"}
            })
        },
        changeLanguigArm:(state,action) => {
            state.personData = state.personData.map((val,i) => {
                if(action.payload.leng === "en")
                {return {...val,dataName:action.payload.engLeng[i],placeholder:action.payload.engPlaceholder[i]}}
                else {return {...val,dataName:action.payload.armLeng[i],placeholder:action.payload.armPlaceholder[i]}} 
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
        chengRowCountPagination:(state,action) => {
            state.table.rowCount = action.payload
        },
        paginationCount:(state,action) => {
           state.table.PageIndex = action.payload
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
        },
        userDate:(state,action) => {
            state.personData = state.personData.map((val,index) => {
                switch(index) {
                    case 0 : return { ...val,inner:state.userPage.username } ;
                    case 1 : return { ...val,inner:state.userPage.email } ;
                    case 2 : return { ...val,inner:state.userPage.password } ;
                }
            })
        },
        setTarifId:(state,action) => {
            if(!state.checkTarifData) { state.checkTarifData = action.payload } else {state.checkTarifData = false}
        },
        changeloadHeight:(state,action) => {
            // state.loadinHeight = action.payload.height
        },
        ShowOkeyByTarif:(state,action) => {
            state.ThanksShow = !state.ThanksShow
        },
        changeUsername:(state,action) => {
            state.userPage.username = action.payload
        },
        clearUserpage:(state) => {
            state.userPage = []
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
                let key = Object.keys(data);
                switch(key[0]) {
                    case "home" : 
                    state.mainPagePagination.description = data.home.description
                    state.mainPagePagination.title = data.home.title
                    break;

                    case "about" : 
                    state.mainPAboutPagination = data
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

                    case "csrf_token" : 
                        localStorage.setItem("csrf_token",data.csrf_token)
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
        .addCase(getUserHomePage.pending,(state,action) => {
            console.log("pending userPageHomeNew",action);
            // state.loading.mainLoading = "loading"
        })
        .addCase(getUserHomePage.fulfilled,(state,action) => {
            console.log("fulfiled userPageHomeNew",action);
            state.userHomePage = action.payload
            state.userPage = action.payload.user

            // state.loading.mainLoading = false
        })
        //  getHistoiry
        .addCase(getUserHistory.pending,(state,action) => {
            console.log("pending userHistory",action);
            // state.loading.mainLoading = "loading"
        })
        .addCase(getUserHistory.fulfilled,(state,action) => {
            console.log("fulfiled userHistory",action);
            state.table.data = splitTable(state,action)

            // state.loading.mainLoading = false
        })

        // getNotification
        .addCase(getNotification.pending,(state,action) => {
            console.log("pending getNotification",action);

            // state.loading.mainLoading = "loading"
        })
        .addCase(getNotification.fulfilled,(state,action) => {
            console.log("fulfiled getNotification",action);
            state.messigePerson = action.payload.notifications
            // state.loading.mainLoading = false
        })

        // get TArif
        .addCase(getTarif.pending,(state,action) => {
            console.log("pending getTarif",action);
            // state.loading.mainLoading = "loading"
        })
        .addCase(getTarif.fulfilled,(state,action) => {
            console.log("fulfiled getTarif",action);
            state.paymentPage = action.payload.tariffs
            // state.loading.mainLoading = false
        })
        
        // all User get Error request
        // .addCase(getUserPage.pending,(state,action) => {
        //     console.log("pending userPage",action);
        //     state.loading.mainLoading = "loading"
        // })
        // .addCase(getUserPage.fulfilled,(state,action) => {
        //     console.log("fulfiled userPAge",action);
        //     if(!!action.payload.error) {state.loginemailValidation = true}
        //     // state update homePage
        //     state.userHomePage = action.payload[0]
        //     // state Update userPage
        //     state.userPage = action.payload[1]
        //     // state update paymentPage
        //     state.paymentPage = action.payload[2].tariffs
        //     // state update PaymentHistoryPage 
        //     state.table.data = splitTable(state,action)
        //     // notification
        //     state.messigePerson = action.payload[4].notifications
        //     state.loading.mainLoading = false;
        // })
        
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

        // change data
        .addCase(changeUserData.pending,(state,action) => {
            console.log("pending changeUserData",action);
            state.loading.mainLoading = "loading";
        })
        .addCase(changeUserData.fulfilled,(state,action) => {
            console.log("fulfiled changeUserData",action);
            state.loading.mainLoading = false;
        })

        // buy Tarif
        .addCase(buyTarif.pending,(state,action) => {
            console.log("pending bytarif",action);
            state.loading.mainLoading = "loading";
        })
        .addCase(buyTarif.fulfilled,(state,action) => {
            console.log("fulfiled pending bytarif",action);
            if(action.payload.success) {
                state.ThanksShow = true
                state.TarifThanksShow = false
            }
            state.loading.mainLoading = false;
        })

        // delete Message
        .addCase(deleteMessagePost.pending,(state,action) => {
            console.log("pending deleteMessage",action);
            state.loading.mainLoading = "loading";
        })
        .addCase(deleteMessagePost.fulfilled,(state,action) => {
            console.log("fulfiled deleteMessage",action);
            state.loading.mainLoading = false;
        })
        .addCase(sendMessag.pending,(state,action) => {
            console.log("pending sendMessag",action);
            state.loading.mainLoading = "loading";
        })
        .addCase(sendMessag.fulfilled,(state,action) => {
            console.log("fulfiled sendMessag",action);
            state.receiveLetterShow = !state.receiveLetterShow
            state.loading.mainLoading = false;
        })
    }
})

function splitTable(state,action) {
    // debugger
    let indexPage = Math.ceil(action.payload.history.length / state.table.rowCount)
    state.table.countPage = [...new Array(indexPage)]
    let page = [], i = 0, i2 = 0;
    let correctData = action.payload.history.map((val) => {
        let date = +(val.date_start + `000`)
        return {...val,date_start:new Date(date).toISOString().split('T')[0]}
    })
    return correctData.reduce(function(aggr,val,index) {
        page[i2] = val;
        if((this.length - 1) === index){ aggr[i] = page; return aggr};
        if(page.length === state.table.rowCount){ aggr[i] = page; page = []; i++; i2 = 0; return aggr};
        i2++;return aggr;
    }.bind(action.payload.history),[]);
}



// getUserData
// torgomyandavid96@gmail.com
// davit.torgomyan96@mail.ru
export const {
    aginationCount,closeLetter,delsetMessige,showThanks,changeFaq,changeRegAndSignImgdisplay,changeUsername,
    changeImgType,changeAnimationPathDone,changeAnimation,changeDisplay,changeDate,setValue,clearUserpage,
    setId,changeUserImg,checkLink,checkPlaceholder,loading,registerAuth,loginAuth,changeloadHeight,changeLanguigArm,
    forgetemailError,sendLetterMail,userDate,paginationCount,setTarifId,chengRowCountPagination,ShowOkeyByTarif
} = mainPageSlices.actions

export default mainPageSlices.reducer

