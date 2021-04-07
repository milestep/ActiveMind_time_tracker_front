(this["webpackJsonpactive-mind"]=this["webpackJsonpactive-mind"]||[]).push([[0],{69:function(e,t,a){},70:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),s=a(20),r=a.n(s),c=(a(69),a(5)),i=a(6),l=a(8),d=a(7),u=(a(70),a(11)),h=a.n(u),j=a(15),p=a(29),g=a(100),b=a(101),O=a(108),f=a(102),v=a(107),m=a(1),x=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var o;return Object(c.a)(this,a),(o=t.call(this,e)).handleChange=function(e){o.setState(Object(p.a)({},e.target.id,e.target.value))},o.handleSubmit=function(e){e.preventDefault(),o.props.handleSubmit({email:o.state.email,password:o.state.password})},o.state={email:"",password:""},o}return Object(i.a)(a,[{key:"validateForm",value:function(){return this.state.email.length>1}},{key:"render",value:function(){return Object(m.jsx)("div",{className:"Login",children:Object(m.jsxs)("form",{onSubmit:this.handleSubmit,children:[void 0!==this.props.auth.error&&Object(m.jsx)(g.a,{bsSize:"large",children:Object(m.jsx)(v.a,{variant:"danger",children:Object(m.jsx)("strong",{children:this.props.auth.error})})}),Object(m.jsxs)(g.a,{controlId:"email",bssize:"large",children:[Object(m.jsx)(b.a,{children:"Email"}),Object(m.jsx)(O.a,{autoFocus:!0,type:"email",value:this.state.email,onChange:this.handleChange})]}),Object(m.jsxs)(g.a,{controlId:"password",bssize:"large",children:[Object(m.jsx)(b.a,{children:"Password"}),Object(m.jsx)(O.a,{value:this.state.password,onChange:this.handleChange,type:"password"})]}),Object(m.jsx)(f.a,{block:!0,bssize:"large",disabled:!this.validateForm(),type:"submit",children:"Sign in"})]})})}}]),a}(o.Component),y=Object(j.b)((function(e){return{auth:e.auth}}))(x),C="LOAD_NOTES",S="ADD_NOTE",k="UPDATE_NOTE",N="DELETE_NOTE",_="LOAD_PROJECTS",D="LOAD_CATEGORIES",w="LOAD_USERS",T="AUTHENTICATED",A="UNAUTHENTICATED";function I(e){return{type:C,notes:e}}function P(e,t,a,o,n){return{type:k,index:e,project:t,category:a,hours:o,date:n}}function L(e){return{type:N,index:e}}function E(e){return{type:_,projects:e}}function M(e){return{type:D,categories:e}}function U(e){return{type:A,error:e}}var F=a(12),R=Object(F.a)();h.a.defaults.baseURL="https://portal.milestep.io",h.a.defaults.timeout=1e4,h.a.defaults.headers={"Access-Control-Allow-Origin":"*"};var H=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var o=arguments.length,n=new Array(o),s=0;s<o;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).handleSubmit=function(t){var a={email:t.email,password:t.password};console.log("Login data:"),console.log({data:a}),h.a.post("/api/signin",a).then((function(e){localStorage.setItem("is_admin",e.data.user.is_admin),console.log(e.data.token),console.log(e.data.user.username),console.log(e.data.user.is_admin),localStorage.setItem("token",e.data.token),localStorage.setItem("id",e.data.user.id),localStorage.setItem("firstname",e.data.user.firstname),localStorage.setItem("lastname",e.data.user.lastname),R.push("/"),R.go(0)})).catch((function(t){console.log(t.message),e.props.dispatch(U("Login failed"))}))},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(m.jsx)(y,{handleSubmit:this.handleSubmit})}}]),a}(o.Component),B=Object(j.b)()(H),z=function(){return Object(m.jsx)("div",{className:"d-flex justify-content-center",children:Object(m.jsx)("div",{className:"spinner-border",role:"status",children:Object(m.jsx)("span",{className:"sr-only",children:"Loading..."})})})},q=a(10),K=a(103),J=a(61),G=a(22),W=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var o;return Object(c.a)(this,a),(o=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),console.log({project_id:o.state.project,category_id:o.state.category,hours:o.state.hours,date:o.state.date}),o.props.handleSubmit({project_id:o.state.project,category_id:o.state.category,hours:o.state.hours,date:o.state.date})},o.state={project:"",category:"",hours:"",date:G.DateTime.now().toISODate()},o.onChangeProject=o.onChangeProject.bind(Object(q.a)(o)),o.onChangeCategory=o.onChangeCategory.bind(Object(q.a)(o)),o.onChangeHours=o.onChangeHours.bind(Object(q.a)(o)),o.onChangeDate=o.onChangeDate.bind(Object(q.a)(o)),o.handleSubmit=o.handleSubmit.bind(Object(q.a)(o)),o}return Object(i.a)(a,[{key:"validateForm",value:function(){return this.state.project.length>0&&this.state.category.length>0&&this.state.hours>0}},{key:"onChangeProject",value:function(e){console.log("Project selected!"),this.setState({project:e.target.value})}},{key:"onChangeCategory",value:function(e){console.log("Category selected!"),this.setState({category:e.target.value})}},{key:"onChangeHours",value:function(e){this.setState({hours:e.target.value})}},{key:"onChangeDate",value:function(e){this.setState({date:e.target.value})}},{key:"render",value:function(){var e=this.props.projects,t=this.props.categories;return Object(m.jsx)("form",{onSubmit:this.handleSubmit,children:Object(m.jsxs)(K.a,{children:[Object(m.jsx)(J.a,{controlid:"date",sm:2,children:Object(m.jsx)(O.a,{controlid:"date",type:"date",required:!0,value:this.state.date,onChange:this.onChangeDate})}),Object(m.jsx)(J.a,{controlid:"project",sm:3,children:Object(m.jsxs)(O.a,{value:this.state.project,as:"select",onChange:this.onChangeProject,children:[Object(m.jsx)("option",{value:"",children:"Project"}),e.map((function(e){return Object(m.jsx)("option",{value:e.id,children:e.project},e.id)}))]})}),Object(m.jsx)(J.a,{controlid:"category",sm:3,children:Object(m.jsxs)(O.a,{value:this.state.category,as:"select",onChange:this.onChangeCategory,children:[Object(m.jsx)("option",{value:"",children:"Category"}),t.map((function(e){return Object(m.jsx)("option",{value:e.id,children:e.category},e.id)}))]})}),Object(m.jsx)(J.a,{controlid:"hours",sm:2,children:Object(m.jsx)(O.a,{required:!0,placeholder:"Hours",value:this.state.hours,onChange:this.onChangeHours})}),Object(m.jsx)(J.a,{sm:2,children:Object(m.jsx)(f.a,{block:!0,disabled:!this.validateForm(),type:"submit",children:"Save"})})]})})}}]),a}(o.Component),Q=a(19),V=a(104),X=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var o;return Object(c.a)(this,a),(o=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),console.log({id:o.props.note.id,project_id:o.state.project,category_id:o.state.category,hours:o.state.hours,date:o.state.date}),o.props.onSubmit({id:o.props.note.id,project_id:o.state.project,category_id:o.state.category,hours:o.state.hours,date:o.state.date}),o.props.closeModal()},o.state={project:"",category:"",hours:o.props.note.hours,date:o.props.note.date},o.onChangeProject=o.onChangeProject.bind(Object(q.a)(o)),o.onChangeCategory=o.onChangeCategory.bind(Object(q.a)(o)),o.onChangeHours=o.onChangeHours.bind(Object(q.a)(o)),o.onChangeDate=o.onChangeDate.bind(Object(q.a)(o)),o.handleSubmit=o.handleSubmit.bind(Object(q.a)(o)),o}return Object(i.a)(a,[{key:"validateForm",value:function(){return this.state.project.length>0&&this.state.category.length>0&&this.state.hours>0}},{key:"onChangeProject",value:function(e){this.setState({project:e.target.value})}},{key:"onChangeCategory",value:function(e){this.setState({category:e.target.value})}},{key:"onChangeHours",value:function(e){this.setState({hours:e.target.value})}},{key:"onChangeDate",value:function(e){this.setState({date:e.target.value})}},{key:"render",value:function(){var e=this.props.projects,t=this.props.categories;return Object(m.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(m.jsx)(g.a,{controlid:"project",children:Object(m.jsxs)(O.a,{value:this.state.project,as:"select",onChange:this.onChangeProject,children:[Object(m.jsx)("option",{value:"",children:"Project"}),e.map((function(e){return Object(m.jsx)("option",{value:e.id,children:e.project},e.id)}))]})}),Object(m.jsx)(g.a,{controlid:"category",children:Object(m.jsxs)(O.a,{value:this.state.category,as:"select",onChange:this.onChangeCategory,children:[Object(m.jsx)("option",{value:"",children:"Category"}),t.map((function(e){return Object(m.jsx)("option",{value:e.id,children:e.category},e.id)}))]})}),Object(m.jsx)(g.a,{controlid:"hours",children:Object(m.jsx)(O.a,{required:!0,placeholder:"Hours",value:this.state.hours,onChange:this.onChangeHours})}),Object(m.jsx)(g.a,{controlid:"date",children:Object(m.jsx)(O.a,{controlid:"date",type:"date",required:!0,value:this.state.date,onChange:this.onChangeDate})}),Object(m.jsx)(f.a,{block:!0,disabled:!this.validateForm(),type:"submit",children:"Save"})]})}}]),a}(o.Component),Y=a(62),Z=a.n(Y),$=function(e){var t=e.onClickOutside,a=e.onKeyDown,o=e.modalRef,n=e.buttonRef,s=e.closeModal,c=e.onSubmit,i=e.note,l=e.projects,d=e.categories;return r.a.createPortal(Object(m.jsx)(Z.a,{children:Object(m.jsx)("aside",{tag:"aside",role:"dialog",tabIndex:"-1","aria-modal":"true",className:"modal-cover",onClick:t,onKeyDown:a,children:Object(m.jsxs)("div",{className:"modal-area",ref:o,children:[Object(m.jsxs)("button",{ref:n,"aria-label":"Close Modal","aria-labelledby":"close-modal",className:"_modal-close",onClick:s,children:[Object(m.jsx)("span",{id:"close-modal",className:"_hide-visual",children:"Close"}),Object(m.jsx)("svg",{className:"_modal-close-icon",viewBox:"0 0 40 40",children:Object(m.jsx)("path",{d:"M 10,10 L 30,30 M 30,10 L 10,30"})})]}),Object(m.jsx)("div",{className:"modal-body",children:Object(m.jsx)(X,{onSubmit:c,note:i,projects:l,categories:d,closeModal:s})})]})})}),document.body)},ee=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var o=arguments.length,n=new Array(o),s=0;s<o;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={isShown:!1},e.showModal=function(){e.setState({isShown:!0},(function(){e.closeButton.focus()})),e.toggleScrollLock()},e.closeModal=function(){e.setState({isShown:!1}),e.toggleScrollLock()},e.onKeyDown=function(t){27===t.keyCode&&e.closeModal()},e.onClickOutside=function(t){e.modal&&e.modal.contains(t.target)||e.closeModal()},e.toggleScrollLock=function(){document.querySelector("html").classList.toggle("scroll-lock")},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props.note;return Object(m.jsxs)(n.a.Fragment,{children:[Object(m.jsx)(Q.d,{className:"editBtn modal-button",onClick:this.showModal}),this.state.isShown?Object(m.jsx)($,{note:t,projects:this.props.projects,categories:this.props.categories,onSubmit:this.props.onSubmit,modalRef:function(t){return e.modal=t},buttonRef:function(t){return e.closeButton=t},closeModal:this.closeModal,onKeyDown:this.onKeyDown,onClickOutside:this.onClickOutside}):null]})}}]),a}(o.Component),te=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var o=arguments.length,n=new Array(o),s=0;s<o;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).deleteNote=function(t){e.props.deleteNote(t)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props.note;return console.log("TableItem:"),console.log(t.id),Object(m.jsxs)("tr",{id:t.id,children:[Object(m.jsx)("td",{children:t.project_id}),Object(m.jsx)("td",{children:t.category_id}),Object(m.jsx)("td",{children:t.hours}),Object(m.jsxs)("td",{children:[Object(m.jsx)(ee,{className:"taskLabel",note:t,projects:this.props.projects,categories:this.props.categories,onSubmit:this.props.updateNote}),Object(m.jsx)(Q.c,{className:"deleteBtn",onClick:function(a){return e.deleteNote(t.id)}})]})]},t.id)}}]),a}(o.Component),ae=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props.notes;return Object(m.jsxs)(V.a,{striped:!0,bordered:!0,hover:!0,children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Project"}),Object(m.jsx)("th",{children:"Category"}),Object(m.jsx)("th",{children:"Hours"}),Object(m.jsx)("th",{children:"Actions"})]})}),Object(m.jsx)("tbody",{children:t.map((function(t){return Object(m.jsx)(te,{note:t,id:t.id,updateNote:e.props.updateNote,deleteNote:e.props.deleteNote,projects:e.props.projects,categories:e.props.categories},t.id)}))})]})}}]),a}(o.Component),oe=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var o;return Object(c.a)(this,a),(o=t.call(this,e)).state={date:G.DateTime.now().toISODate()},o.onChangeDate=o.onChangeDate.bind(Object(q.a)(o)),o.onDatePlus=o.onDatePlus.bind(Object(q.a)(o)),o.onDateMinus=o.onDateMinus.bind(Object(q.a)(o)),o}return Object(i.a)(a,[{key:"onChangeDate",value:function(e){console.log("Date is: "),console.log(this.state.date),this.setState({date:e.target.value})}},{key:"onDatePlus",value:function(e){console.log("Date is: "),console.log(this.state.date);var t=G.DateTime.fromISO(this.state.date).plus({days:1});this.setState({date:t.toISODate()})}},{key:"onDateMinus",value:function(e){console.log("Date is: "),console.log(this.state.date);var t=G.DateTime.fromISO(this.state.date).minus({days:1});this.setState({date:t.toISODate()})}},{key:"render",value:function(){for(var e=this,t=0,a=[],o=this.props.notes,n=this.props.projects,s=this.props.categories,r=o.filter((function(t){return t.date===e.state.date})),c=function(e){var t=r[e],o=n.find((function(e){return e.id===t.project_id||e.project===t.project_id})),c=s.find((function(e){return e.id===t.category_id||e.category===t.category_id}));console.log("Note:"),console.log(t),console.log("Project:"),console.log(o),console.log("Category:"),console.log(c),o&&c&&(t.project_id=o.project,t.category_id=c.category,a.push(t))},i=0;i<r.length;i++)c(i);for(var l=0;l<a.length;l++)t+=a[l].hours;return Object(m.jsxs)("div",{children:[Object(m.jsx)("form",{className:"datePickerForm",children:Object(m.jsxs)(K.a,{children:[Object(m.jsx)(J.a,{className:"btnArrowLeft",children:Object(m.jsx)(Q.a,{className:"btnLeft",onClick:this.onDateMinus})}),Object(m.jsx)(J.a,{children:Object(m.jsx)(O.a,{controlid:"date",type:"date",required:!0,value:this.state.date,onChange:this.onChangeDate})}),Object(m.jsx)(J.a,{className:"btnArrowRight",children:Object(m.jsx)(Q.b,{className:"btnRight",onClick:this.onDatePlus})})]})}),Object(m.jsx)("div",{className:"noteTable",children:Object(m.jsx)(ae,{notes:a,projects:n,categories:s,deleteNote:this.props.deleteNote,updateNote:this.props.updateNote})}),Object(m.jsxs)(K.a,{children:[Object(m.jsx)(J.a,{}),Object(m.jsx)(J.a,{}),Object(m.jsx)(J.a,{className:"total",children:Object(m.jsxs)("h6",{className:"totalText",children:["Total: ",t]})}),Object(m.jsx)(J.a,{})]})]})}}]),a}(o.Component),ne=Object(F.a)(),se=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var o;return Object(c.a)(this,a),(o=t.call(this,e)).createNote=function(e){var t=e.user_id,a=e.project_id,n=e.category_id,s=e.hours,r=e.date,c=o.getAuthToken();h.a.post("/api/notes",{user_id:t,project_id:a,category_id:n,hours:s,date:r},c).then((function(e){o.props.dispatch(function(e,t,a,o,n,s){return{type:S,id:e,user:t,project:a,category:o,hours:n,date:s}}(e.data.id)),ne.go(0)})).catch((function(e){return console.log(e)}))},o.updateNote=function(e){var t=o.getAuthToken();h.a.put("/api/notes/".concat(e.id),{project_id:e.project_id,category_id:e.category_id,hours:e.hours,date:e.date},t).then((function(t){o.props.dispatch(P(e.id))})).catch((function(e){return console.log(e)})),ne.go(0)},o.deleteNote=function(e){var t=o.getAuthToken();h.a.delete("/api/notes/".concat(e),t).then((function(t){o.props.dispatch(L(e))})).catch((function(e){return console.log(e)}))},o.state={loading:!0},o}return Object(i.a)(a,[{key:"getAuthToken",value:function(){return{baseURL:"https://portal.milestep.io",headers:{Authorization:localStorage.getItem("token")}}}},{key:"getNotes",value:function(){var e=this,t=this.getAuthToken();h.a.get("/api/notes",t).then((function(t){e.props.dispatch(I(t.data)),e.setState({loading:!1})})).catch((function(e){return console.log(e.message)}))}},{key:"getProjects",value:function(){var e=this,t=this.getAuthToken();h.a.get("/api/projects",t).then((function(t){console.log("Projects:"),console.log(t.data),e.props.dispatch(E(t.data))})).catch((function(e){return console.log(e.message)}))}},{key:"getCategories",value:function(){var e=this,t=this.getAuthToken();h.a.get("/api/categories",t).then((function(t){console.log("Categories"),console.log(t.data),e.props.dispatch(M(t.data))})).catch((function(e){return console.log(e.message)}))}},{key:"componentDidMount",value:function(){this.getNotes(),this.getProjects(),this.getCategories()}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"header",children:Object(m.jsx)("h2",{children:localStorage.getItem("firstname")+" "+localStorage.getItem("lastname")})}),Object(m.jsxs)("div",{className:"container",children:[this.state.loading?Object(m.jsx)(z,{}):Object(m.jsx)(W,{projects:this.props.projects,categories:this.props.categories,handleSubmit:this.createNote}),Object(m.jsx)("div",{className:"datePicker",children:Object(m.jsx)(oe,{notes:this.props.notes,projects:this.props.projects,categories:this.props.categories,updateNote:this.updateNote,deleteNote:this.deleteNote})})]})]})}}]),a}(o.Component),re=Object(j.b)((function(e){return{notes:e.notes,projects:e.projects,categories:e.categories}}))(se),ce=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var o=arguments.length,n=new Array(o),s=0;s<o;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).deleteNote=function(t){e.props.deleteNote(t)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props.note;return Object(m.jsxs)("tr",{id:t.id,children:[Object(m.jsx)("td",{children:t.user_id}),Object(m.jsx)("td",{children:t.project_id}),Object(m.jsx)("td",{children:t.category_id}),Object(m.jsx)("td",{children:t.hours}),Object(m.jsxs)("td",{children:[Object(m.jsx)(ee,{className:"taskLabel",note:t,projects:this.props.projects,categories:this.props.categories,onSubmit:this.props.updateNote}),Object(m.jsx)(Q.c,{className:"deleteBtn",onClick:function(a){return e.deleteNote(t.id)}})]})]},t.id)}}]),a}(o.Component),ie=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props.notes;return Object(m.jsxs)(V.a,{striped:!0,bordered:!0,hover:!0,children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"User"}),Object(m.jsx)("th",{children:"Project"}),Object(m.jsx)("th",{children:"Category"}),Object(m.jsx)("th",{children:"Hours"}),Object(m.jsx)("th",{children:"Actions"})]})}),Object(m.jsx)("tbody",{children:t.map((function(t){return Object(m.jsx)(ce,{note:t,id:t.id,updateNote:e.props.updateNote,deleteNote:e.props.deleteNote,projects:e.props.projects,categories:e.props.categories,users_filter:e.props.users_filter,projects_filter:e.props.projects_filter,categories_filter:e.props.categories_filter},t.id)}))})]})}}]),a}(o.Component),le=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var o;return Object(c.a)(this,a),(o=t.call(this,e)).state={date:G.DateTime.now().toISODate()},o.onChangeDate=o.onChangeDate.bind(Object(q.a)(o)),o.onDatePlus=o.onDatePlus.bind(Object(q.a)(o)),o.onDateMinus=o.onDateMinus.bind(Object(q.a)(o)),o}return Object(i.a)(a,[{key:"onChangeDate",value:function(e){this.setState({date:e.target.value})}},{key:"onDatePlus",value:function(e){var t=G.DateTime.fromISO(this.state.date).plus({days:1});this.setState({date:t.toISODate()})}},{key:"onDateMinus",value:function(e){var t=G.DateTime.fromISO(this.state.date).minus({days:1});this.setState({date:t.toISODate()})}},{key:"render",value:function(){var e=this,t=0,a=this.props.users_filter,o=this.props.projects_filter,n=this.props.categories_filter,s=[],r=this.props.notes,c=this.props.users,i=this.props.projects,l=this.props.categories;if(""!==a){var d=c.find((function(e){return e.id===parseInt(a)}));a=d.username}if(""!==o){var u=i.find((function(e){return e.id===parseInt(o)}));o=u.project}if(""!==n){var h=l.find((function(e){return e.id===parseInt(n)}));n=h.category}for(var j=r.filter((function(t){return t.date===e.state.date})),p=function(e){var t=j[e],a=c.find((function(e){return e.id===t.user_id||e.username===t.user_id})),o=i.find((function(e){return e.id===t.project_id||e.project===t.project_id})),n=l.find((function(e){return e.id===t.category_id||e.category===t.category_id}));a&&o&&n&&(t.user_id=a.username,t.project_id=o.project,t.category_id=n.category,s.push(t))},g=0;g<j.length;g++)p(g);for(var b=[],f=0;f<s.length;f++)s[f].user_id.indexOf(a)>-1&&s[f].project_id.indexOf(o)>-1&&s[f].category_id.indexOf(n)>-1&&b.push(s[f]);for(var v=0;v<b.length;v++)t+=b[v].hours;return Object(m.jsxs)("div",{children:[Object(m.jsx)("form",{className:"datePickerForm",children:Object(m.jsxs)(K.a,{children:[Object(m.jsx)(J.a,{className:"btnArrowLeft",children:Object(m.jsx)(Q.a,{className:"btnLeft",onClick:this.onDateMinus})}),Object(m.jsx)(J.a,{children:Object(m.jsx)(O.a,{controlid:"date",type:"date",required:!0,value:this.state.date,onChange:this.onChangeDate})}),Object(m.jsx)(J.a,{className:"btnArrowRight",children:Object(m.jsx)(Q.b,{className:"btnRight",onClick:this.onDatePlus})})]})}),Object(m.jsx)("div",{className:"noteTable",children:Object(m.jsx)(ie,{notes:b,projects:i,categories:l,users_filter:a,projects_filter:o,categories_filter:n,deleteNote:this.props.deleteNote,updateNote:this.props.updateNote})}),Object(m.jsxs)(K.a,{children:[Object(m.jsx)(J.a,{}),Object(m.jsx)(J.a,{}),Object(m.jsx)(J.a,{}),Object(m.jsx)(J.a,{className:"total",children:Object(m.jsxs)("h6",{className:"totalText",children:["Total: ",t]})}),Object(m.jsx)(J.a,{})]})]})}}]),a}(o.Component),de=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var o;return Object(c.a)(this,a),(o=t.call(this,e)).state={user:"",project:"",category:""},o.onChangeUser=o.onChangeUser.bind(Object(q.a)(o)),o.onChangeProject=o.onChangeProject.bind(Object(q.a)(o)),o.onChangeCategory=o.onChangeCategory.bind(Object(q.a)(o)),o}return Object(i.a)(a,[{key:"onChangeUser",value:function(e){this.setState({user:e.target.value})}},{key:"onChangeProject",value:function(e){this.setState({project:e.target.value})}},{key:"onChangeCategory",value:function(e){this.setState({category:e.target.value})}},{key:"render",value:function(){var e=this.props.users.filter((function(e){return!0!==e.is_admin})),t=this.props.projects,a=this.props.categories;return Object(m.jsxs)("div",{children:[Object(m.jsx)("form",{children:Object(m.jsxs)(K.a,{children:[Object(m.jsx)(J.a,{sm:2,children:Object(m.jsx)("h4",{className:"filtersLabel",children:"Filters:"})}),Object(m.jsx)(J.a,{sm:3,controlid:"user",children:Object(m.jsxs)(O.a,{value:this.state.user,as:"select",onChange:this.onChangeUser,children:[Object(m.jsx)("option",{value:"",children:"User"}),e.map((function(e){return Object(m.jsx)("option",{value:e.id,children:e.username},e.id)}))]})}),Object(m.jsx)(J.a,{sm:3,controlid:"project",children:Object(m.jsxs)(O.a,{value:this.state.project,as:"select",onChange:this.onChangeProject,children:[Object(m.jsx)("option",{value:"",children:"Project"}),t.map((function(e){return Object(m.jsx)("option",{value:e.id,children:e.project},e.id)}))]})}),Object(m.jsx)(J.a,{sm:3,controlid:"category",children:Object(m.jsxs)(O.a,{value:this.state.category,as:"select",onChange:this.onChangeCategory,children:[Object(m.jsx)("option",{value:"",children:"Category"}),a.map((function(e){return Object(m.jsx)("option",{value:e.id,children:e.category},e.id)}))]})})]})}),Object(m.jsx)("div",{className:"datePicker",children:Object(m.jsx)(le,{notes:this.props.notes,users:e,projects:t,categories:a,users_filter:this.state.user,projects_filter:this.state.project,categories_filter:this.state.category,updateNote:this.props.updateNote,deleteNote:this.props.deleteNote})})]})}}]),a}(o.Component),ue=Object(F.a)(),he=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var o;return Object(c.a)(this,a),(o=t.call(this,e)).updateNote=function(e){var t=o.getAuthToken();h.a.put("/api/notes/".concat(e.id),{project_id:e.project_id,category_id:e.category_id,hours:e.hours,date:e.date},t).then((function(t){o.props.dispatch(P(e.id))})).catch((function(e){return console.log(e)})),ue.go(0)},o.deleteNote=function(e){var t=o.getAuthToken();h.a.delete("/api/notes/".concat(e),t).then((function(t){o.props.dispatch(L(e))})).catch((function(e){return console.log(e)}))},o.state={loading:!0},o}return Object(i.a)(a,[{key:"getAuthToken",value:function(){return{baseURL:"https://portal.milestep.io",headers:{Authorization:localStorage.getItem("token")}}}},{key:"getNotes",value:function(){var e=this,t=this.getAuthToken();h.a.get("/api/notes",t).then((function(t){e.props.dispatch(I(t.data)),e.setState({loading:!1})})).catch((function(e){return console.log(e.message)}))}},{key:"getProjects",value:function(){var e=this,t=this.getAuthToken();h.a.get("/api/projects",t).then((function(t){console.log("Projects:"),console.log(t.data),e.props.dispatch(E(t.data))})).catch((function(e){return console.log(e.message)}))}},{key:"getCategories",value:function(){var e=this,t=this.getAuthToken();h.a.get("/api/categories",t).then((function(t){console.log("Categories"),console.log(t.data),e.props.dispatch(M(t.data))})).catch((function(e){return console.log(e.message)}))}},{key:"getUsers",value:function(){var e=this,t=this.getAuthToken();h.a.get("/api/users",t).then((function(t){var a;console.log("Users"),console.log(t.data),e.props.dispatch((a=t.data,{type:w,users:a}))})).catch((function(e){return console.log(e.message)}))}},{key:"componentDidMount",value:function(){this.getNotes(),this.getProjects(),this.getCategories(),this.getUsers()}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"header",children:Object(m.jsx)("h2",{children:localStorage.getItem("firstname")+" "+localStorage.getItem("lastname")})}),Object(m.jsx)("div",{className:"container",children:this.state.loading?Object(m.jsx)(z,{}):Object(m.jsx)(de,{notes:this.props.notes,users:this.props.users,projects:this.props.projects,categories:this.props.categories,updateNote:this.updateNote,deleteNote:this.deleteNote})})]})}}]),a}(o.Component),je=Object(j.b)((function(e){return{notes:e.notes,projects:e.projects,categories:e.categories,users:e.users}}))(he),pe=(a(95),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return!1===this.props.auth.authenticated?Object(m.jsx)(B,{}):"true"===localStorage.getItem("is_admin")?Object(m.jsx)(je,{}):Object(m.jsx)(re,{})}}]),a}(o.Component)),ge=Object(j.b)((function(e){return{auth:e.auth}}))(pe),be=Object(F.a)(),Oe=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentWillMount",value:function(){this.props.dispatch(U()),localStorage.removeItem("token"),localStorage.removeItem("firstname"),localStorage.removeItem("lastname"),localStorage.removeItem("is_admin"),localStorage.removeItem("id"),be.push("/"),be.go(0)}},{key:"render",value:function(){return null}}]),a}(o.Component),fe=Object(j.b)()(Oe),ve=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var o;return Object(c.a)(this,a),(o=t.call(this,e)).handleChange=function(e){o.setState(Object(p.a)({},e.target.id,e.target.value))},o.handleSubmit=function(e){e.preventDefault(),o.props.handleSubmit({password:o.state.password})},o.state={password:"",password_confirmation:""},o}return Object(i.a)(a,[{key:"validateForm",value:function(){return this.state.password.length>5&&this.state.password===this.state.password_confirmation}},{key:"render",value:function(){return Object(m.jsx)("div",{className:"Login",children:Object(m.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(m.jsx)(b.a,{children:Object(m.jsx)("h3",{children:localStorage.getItem("firstname")+" "+localStorage.getItem("lastname")})}),Object(m.jsxs)(g.a,{controlId:"password",bssize:"large",children:[Object(m.jsx)(b.a,{children:"New password:"}),Object(m.jsx)(O.a,{autoFocus:!0,type:"password",value:this.state.password,onChange:this.handleChange})]}),Object(m.jsxs)(g.a,{controlId:"password_confirmation",bssize:"large",children:[Object(m.jsx)(b.a,{children:"Password confirmation:"}),Object(m.jsx)(O.a,{value:this.state.password_confirmation,onChange:this.handleChange,type:"password"})]}),Object(m.jsx)(f.a,{block:!0,bssize:"large",disabled:!this.validateForm(),type:"submit",children:"Save"})]})})}}]),a}(o.Component),me=Object(F.a)();h.a.defaults.baseURL="https://portal.milestep.io",h.a.defaults.timeout=1e4,h.a.defaults.headers={"Access-Control-Allow-Origin":"*"};var xe=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var o=arguments.length,n=new Array(o),s=0;s<o;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).handleSubmit=function(t){var a=e.getAuthToken();console.log("Password data:"),console.log({password:t.password}),h.a.put("/api/setup/".concat(localStorage.getItem("id")),{password:t.password},a).then((function(e){console.log("User password successfully updated!"),console.log(e.data),me.push("/"),me.go(0)})).catch((function(t){console.log(t.message),e.props.dispatch(U("Updated failed"))}))},e}return Object(i.a)(a,[{key:"getAuthToken",value:function(){return{baseURL:"http://localhost:4000",headers:{Authorization:localStorage.getItem("token")}}}},{key:"render",value:function(){return Object(m.jsx)(ve,{handleSubmit:this.handleSubmit})}}]),a}(o.Component),ye=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)("h1",{children:"Page Not Found"}),Object(m.jsx)("label",{children:"Error 404"})]})})}}]),a}(o.Component),Ce=a(106),Se=a(105),ke=a(28),Ne=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(m.jsxs)(Ce.a,{collapseOnSelect:!0,expand:"lg",bg:"light",variant:"light",children:[Object(m.jsx)(Ce.a.Brand,{children:Object(m.jsx)(ke.b,{to:"/",children:"Active Mind"})}),Object(m.jsx)(Ce.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(m.jsx)(Ce.a.Collapse,{id:"responsive-navbar-nav",children:Object(m.jsxs)(Se.a,{className:"ml-auto",children:[!1===this.props.auth.authenticated&&Object(m.jsx)(Ce.a.Brand,{children:Object(m.jsx)(ke.b,{to:"/login",children:"Login"})}),!0===this.props.auth.authenticated&&Object(m.jsx)(Ce.a.Brand,{children:Object(m.jsx)(ke.b,{to:"/settings",children:"Settings"})}),!0===this.props.auth.authenticated&&Object(m.jsx)(Ce.a.Brand,{children:Object(m.jsx)(ke.b,{to:"/logout",children:"Logout"})})]})})]})}}]),a}(o.Component),_e=Object(j.b)((function(e){return{auth:e.auth}}))(Ne),De=a(27),we=a(63),Te=a(34),Ae=a(64);var Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(console.log({state:e,action:t}),t.type){case C:return console.log("@LOAD_NOTES"),console.log({state:e,action:t}),t.notes;case S:return[].concat(Object(Ae.a)(e),[{id:t.id,user_id:t.user_id,project_id:t.project_id,category_id:t.category_id,hours:t.hours,date:t.date}]);case k:return console.log("@UPDATE_NOTES"),console.log({state:e,action:t}),e.map((function(e){return e.id===t.index?Object(Te.a)(Object(Te.a)({},e),{},{project_id:t.project_id,category_id:t.category_id,hours:t.hours,date:t.date}):e}));case N:return console.log("@DELETE_NOTE"),console.log({state:e,action:t}),e.filter((function(e){return e.id!==t.index}));default:return e}};var Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(Te.a)(Object(Te.a)({},e),{},{authenticated:!0});case A:return{state:[],authenticated:!1,error:t.error};default:return e}};var Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(console.log({state:e,action:t}),t.type){case _:return console.log("@LOAD_PROJECTS"),console.log({state:e,action:t}),t.projects;default:return e}};var Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(console.log({state:e,action:t}),t.type){case D:return console.log("@LOAD_CATEGORIES"),console.log({state:e,action:t}),t.categories;default:return e}};var Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(console.log({state:e,action:t}),t.type){case w:return console.log("@LOAD_USERS"),console.log({state:e,action:t}),t.users;default:return e}},Ue=Object(De.c)({notes:Ie,auth:Pe,projects:Le,categories:Ee,users:Me});var Fe=a(13),Re=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,109)).then((function(t){var a=t.getCLS,o=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),o(e),n(e),s(e),r(e)}))},He=Object(De.d)(Ue,Object(De.a)(we.a));localStorage.getItem("token")?He.dispatch({type:T}):He.dispatch(U()),r.a.render(Object(m.jsx)(j.a,{store:He,children:Object(m.jsx)(ke.a,{children:Object(m.jsxs)("div",{children:[Object(m.jsx)(_e,{}),Object(m.jsxs)(Fe.c,{children:[Object(m.jsx)(Fe.a,{exact:!0,path:"/",component:ge}),Object(m.jsx)(Fe.a,{path:"/login",component:B}),Object(m.jsx)(Fe.a,{path:"/logout",component:fe}),Object(m.jsx)(Fe.a,{path:"/settings",component:xe}),Object(m.jsx)(Fe.a,{component:ye})]})]})})}),document.getElementById("root")),Re()}},[[97,1,2]]]);
//# sourceMappingURL=main.d4fcb493.chunk.js.map