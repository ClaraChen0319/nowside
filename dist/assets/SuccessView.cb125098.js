import{_ as h,g as b,h as f,v as g,k,l as v}from"./index.84a7a0ad.js";import{p as C,r as P,o as l,c as a,a as e,e as _,t as r,j as x,b as w,w as j,F as d,m as u,f as y,d as m}from"./vendor.63e1e4f4.js";const I={name:"SuccessView",components:{},props:{successId:{type:String,default:""}},data(){return{favoriteActive:!1,organizerActive:!1,detailParams:{Id:0,ProjectName:"",ProjectContext:"",GroupPhoto:"",InitDate:"",FinishedDeadline:"",GroupNum:0,PartnerSkills:[],ProjectTypeId:[],ProjectState:"",Organizer:[],Applicants:[],ProjectBanner:"",ProjectPictures:[],ProjectExperience:""}}},computed:{},mounted(){this.onLogin(),this.getDetailParams()},methods:{onLogin(){localStorage.getItem("nowsideToken")&&(this.onFavorite(),this.onOrganizer())},onFavorite(){b(this.projectId).then(t=>{console.log("\u662F\u5426\u6536\u85CF\u5C08\u6848",t.data),t.data===!0&&(this.favoriteActive=!0)}).catch(t=>{console.log(t)})},onOrganizer(){f(this.projectId).then(t=>{console.log("\u662F\u5426\u70BA\u767C\u8D77\u4EBA",t.data),t.data===!0&&(this.organizerActive=!0)}).catch(t=>{console.log(t)})},getDetailParams(){g(this.successId).then(t=>{console.log("\u5C08\u6848\u8A73\u7D30",t.data.userdata),this.detailParams=t.data.userdata}).catch(t=>{console.log(t)})},addFavorite(t){localStorage.getItem("nowsideToken")&&k(t).then(i=>{console.log("\u6536\u85CF\u5C08\u6848",i.data),this.getSaveListParams(),this.getListParams()}).catch(i=>{console.log(i)})},cancelFavorite(t){localStorage.getItem("nowsideToken")&&v(t).then(i=>{console.log("\u53D6\u6D88\u6536\u85CF\u5C08\u6848",i.data),this.getSaveListParams(),this.getListParams()}).catch(i=>{console.log(i)})},timeFormat(t){return C(t).format("YYYY.MM.DD")}}},S={class:"pt-[60px] pb-[180px] w-full h-full"},N={class:"flex justify-center mb-28 bg-C_gray-100"},F=["src"],D={class:"flex relative flex-col py-20 px-24 mb-12 nowside-container-lg nowside-shadow"},A={class:"flex flex-col justify-center items-center mb-14 w-full"},G={class:"text-xl font-medium text-C_blue-700 dark:text-C_blue-300"},V={class:"absolute top-20 right-12 w-[256px]"},z={class:"mb-4"},L={class:"flex justify-between w-full"},T=e("span",{class:"mr-1 material-icons"},"favorite_border",-1),B=m(" \u6536\u85CF "),U=[T,B],O=e("span",{class:"mr-1 material-icons"},"favorite",-1),Y=m(" \u6536\u85CF "),E=[O,Y],X=e("span",{class:"mr-1 material-icons"},"north_east",-1),M=m(" \u524D\u5F80 "),q={class:"flex justify-between items-center mb-4"},H={class:"max-w-[144px] font-medium text-C_blue-500 dark:text-C_blue-200 truncate border-b-2 border-C_blue-300 dark:border-C_blue-200"},J={class:"flex items-center"},K=e("span",{class:"mr-1 text-xl text-orange-500 material-icons"},"adjust",-1),Q={class:"font-medium text-C_blue-700 dark:text-C_blue-200"},R={class:"flex mb-4"},W=e("p",{class:"mr-2 font-medium text-C_blue-700 dark:text-C_blue-400"}," \u767C\u8D77\u65E5 ",-1),Z={class:"dark:text-C_blue-200"},$={class:"flex mb-4"},ee=e("p",{class:"mr-2 font-medium text-C_blue-700 dark:text-C_blue-400"}," \u7D50\u675F\u65E5 ",-1),te={class:"dark:text-C_blue-200"},se={class:"flex items-center mb-4"},oe=e("span",{class:"mr-2 text-3xl text-C_blue-400 material-icons"},"account_circle",-1),le={class:"text-xl dark:text-C_blue-200"},ae={class:"text-C_blue-800"},re=y('<li class="overflow-y-scroll mb-10 max-h-[234px] snap-y snap-mandatory snap"><div class="w-full h-[234px] bg-red-100 snap-start"></div><div class="w-full h-[234px] bg-red-200 snap-start"></div><div class="w-full h-[234px] bg-red-300 snap-start"></div><div class="w-full h-[234px] bg-red-400 snap-start"></div><div class="w-full h-[234px] bg-red-500 snap-start"></div><div class="w-full h-[234px] bg-red-600 snap-start"></div><div class="w-full h-[234px] bg-red-700 snap-start"></div><div class="w-full h-[234px] bg-red-800 snap-start"></div><div class="w-full h-[234px] bg-red-900 snap-start"></div></li>',1),ie={class:"mb-10"},ce=e("p",{class:"inline-block mb-4 text-lg font-medium text-C_blue-700 dark:text-C_blue-400"}," \u5C08\u6848\u5167\u5BB9 ",-1),ne=e("br",null,null,-1),de={class:"dark:text-C_blue-200"},ue={class:"mb-10"},_e=e("p",{class:"inline-block mb-4 text-lg font-medium text-C_blue-700 dark:text-C_blue-400"}," \u5B78\u5230\u4EC0\u9EBC ",-1),me=e("br",null,null,-1),xe={class:"dark:text-C_blue-200"},pe={class:"mb-10"},he=e("p",{class:"inline-block mb-4 text-lg font-medium text-C_blue-700 dark:text-C_blue-400"}," \u5925\u4F34\u6280\u80FD ",-1),be=e("br",null,null,-1),fe={class:"flex overflow-y-hidden flex-wrap max-h-[68px]"},ge={class:"px-4"},ke=e("li",{class:"mb-10"},[e("p",{class:"inline-block mr-8 mb-4 text-lg font-medium text-C_blue-700 dark:text-C_blue-400"}," \u5206\u4EAB "),e("div",{class:"inline-block"},[e("button",{class:"nowside-button-blue-md"}," \u8907\u88FD\u9023\u7D50 ")])],-1),ve=e("p",{class:"inline-block mb-9 text-lg font-medium text-C_blue-700 dark:text-C_blue-400"}," \u53C3\u52A0\u4EBA\u54E1 ",-1),Ce=e("br",null,null,-1),Pe={class:"flex flex-wrap items-center"},we={class:"flex flex-col max-w-[100px]"},je={class:"mb-1 text-C_blue-700 dark:text-C_blue-200 truncate"},ye=e("p",{class:"text-C_blue-500 dark:text-C_blue-300"}," \u767C\u8D77\u4EBA ",-1),Ie={class:"flex flex-col max-w-[100px]"},Se={class:"mb-1 text-C_blue-700 dark:text-C_blue-200 truncate"},Ne=e("p",{class:"text-C_blue-500 dark:text-C_blue-300"}," \u7D44\u54E1 ",-1);function Fe(t,c,i,De,s,n){const p=P("router-link");return l(),a("article",S,[e("section",N,[e("img",{class:"object-cover w-screen h-[560px]",src:`http://sideprojectnow.rocket-coding.com/Upload/GroupPicture/${s.detailParams.ProjectBanner}`,alt:"banner"},null,8,F)]),e("section",D,[e("div",A,[e("div",{class:"mb-12 w-[304px] h-[304px] rounded-full border-2 border-C_gray-300 dark:border-C_gray-900 shadow-xl nowside-backgroundImage",style:_({"background-image":`url('http://sideprojectnow.rocket-coding.com/Upload/GroupPicture/${s.detailParams.GroupPhoto}')`})},null,4),e("span",G,r(s.detailParams.ProjectName),1),e("ul",V,[e("li",z,[e("div",L,[s.favoriteActive===!1?(l(),a("button",{key:0,class:"flex justify-center items-center py-2 px-6 text-md font-medium text-C_blue-400 bg-white hover:bg-C_gray-100 rounded border-2 border-C_gray-300",onClick:c[0]||(c[0]=o=>n.addFavorite(s.detailParams.Id))},U)):x("",!0),s.favoriteActive===!0?(l(),a("button",{key:1,class:"flex justify-center items-center py-2 px-6 text-md font-medium text-C_blue-700 bg-white hover:bg-C_gray-100 rounded border-2 border-C_gray-300",onClick:c[1]||(c[1]=o=>n.cancelFavorite(s.detailParams.Id))},E)):x("",!0),w(p,{class:"flex justify-center items-center py-2 px-6 text-md font-medium text-white bg-C_green-500 hover:bg-C_green-400 rounded",to:{name:"ProjectView",params:{projectId:s.detailParams.Id},hash:"#XXX"}},{default:j(()=>[X,M]),_:1},8,["to"])])]),e("li",q,[(l(!0),a(d,null,u(s.detailParams.ProjectTypeId,o=>(l(),a("div",{key:o.Id,class:"flex items-center"},[e("p",H,r(o.ProjectType),1)]))),128)),e("div",J,[K,e("p",Q,r(s.detailParams.ProjectState),1)])]),e("li",R,[W,e("p",Z,r(n.timeFormat(s.detailParams.InitDate)),1)]),e("li",$,[ee,e("p",te,r(n.timeFormat(s.detailParams.FinishedDeadline)),1)]),e("li",se,[oe,e("span",le,r(s.detailParams.GroupNum),1)])])]),e("div",null,[e("ul",ae,[re,e("li",ie,[ce,ne,e("p",de,r(s.detailParams.ProjectContext),1)]),e("li",ue,[_e,me,e("p",xe,r(s.detailParams.ProjectExperience),1)]),e("li",pe,[he,be,e("div",fe,[(l(!0),a(d,null,u(s.detailParams.PartnerSkills,o=>(l(),a("div",{key:o.Id,class:"inline-block mr-2 mb-4 bg-C_blue-200 rounded"},[e("p",ge,r(o.skill),1)]))),128))])]),ke,e("li",null,[ve,Ce,e("ul",Pe,[(l(!0),a(d,null,u(s.detailParams.Organizer,o=>(l(),a("li",{key:o.NickName,class:"flex items-center mr-6 mb-10 w-[196px]"},[e("div",{class:"mr-6 min-w-[72px] min-h-[72px] rounded-full nowside-backgroundImage",style:_({"background-image":`url('http://sideprojectnow.rocket-coding.com/Upload/GroupPicture/${o.ProfilePicture}')`})},null,4),e("div",we,[e("p",je,r(o.NickName),1),ye])]))),128)),(l(!0),a(d,null,u(s.detailParams.Applicants,o=>(l(),a("li",{key:o.NickName,class:"flex items-center mr-6 mb-10 w-[196px]"},[e("div",{class:"mr-6 min-w-[72px] min-h-[72px] rounded-full nowside-backgroundImage",style:_({"background-image":`url('http://sideprojectnow.rocket-coding.com/Upload/GroupPicture/${o.ProfilePicture}')`})},null,4),e("div",Ie,[e("p",Se,r(o.NickName),1),Ne])]))),128))])])])])])])}var Ve=h(I,[["render",Fe]]);export{Ve as default};