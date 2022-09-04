let component = {
    template:`
        <form class="login-form" @submit.prevent="handleSubmit()">
            <h1>{{title}}</h1>
            <input name="email" type="input" value=""/> 
            <input name="password" type="password" value=""/> 
            <input type="submit" value="submit"/>
        </form>
    `,
    data : function() {
        return {
            title: "Login Form",
        }        
    },
    methods:  {
        handleSubmit: function () {
            //event.preventDefault();
            console.log("handle submit called");
            //alert("The form was submitted!");
        }
    }   
};

console.log(component.template);
var data = component.data();
var data2 = component.data;
console.log(data.title);
component.methods.handleSubmit();

