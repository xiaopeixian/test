/**
 * var fullName;var obj;var test;var name;var Tom
 */
var fullName='language';
var obj={ // obj:aaafff111
    fullName:'javascript',
    prop:{  //prop:aaafff222
        getFullName:function(){ // getFullName:bbbfff111
            return this.fullName;
        }
    }
};
// this=>obj.prop undefined
console.log(obj.prop.getFullName());
// test = bbbfff111
var test=obj.prop.getFullName;
// 'language'
console.log(test());
var name='window';
var Tom={ //Tom aaafff333
    name:"Tom",
    show:function(){  // show:bbbfff222
        console.log(this.name);
    },
    wait:function(){  //wait:bbbfff333
        var fun=this.show;
        fun();
    }
};
Tom.wait();
/**
 * var fun
 * fun = bbbfff222
 * bbbfff222()=>  window
 * 
 */