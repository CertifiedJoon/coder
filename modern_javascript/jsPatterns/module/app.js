// Basic Structure
// (function(){
//     declare private variables and function here

//     return {
//         return public variables and function here
//     }
// })

// standard module pattern
const UICtrl = (function() {
    let text = 'Hello Korea'
    const changeText = function() {
        document.querySelector('h1').textContent = text;
    }
    return {
        callChangeText : function(){
            changeText();
            console.log(text);
        }
    }
})();

UICtrl.callChangeText();

// revealing module pattern
const ItemCtrl = (function() {
    let data = [];

    function add(item) {
        data.push(item);
        console.log('item added.');
    }
    
    function get(id) {
        return data.find(item => {
            return item.id === id;
        });
    };

    return {
        add: add,
        get: get
    }
})();

const obj = {
    id: 1,
    name: 'John'
}
ItemCtrl.add(obj);
console.log(ItemCtrl.get(obj.id));