const ItemCtrl = (function() {
    const Item = function(id, meal, cal) {
        this.id = id;
        this.meal = meal;
        this.calories = cal;
    }
    // state
    const state = {
        items : [],
        currentItem: null,
        totalCalories: 0
    };
    return {
        getState : function() {
            return state;
        },
        addNewItem : function(item) {
            let id;
            if (state.items.length > 0){
                id = state.items[state.items.length - 1].id + 1;
            } else {
                id = 0;
            }
            const newItem = new Item(id, item.meal, item.calories);
            state.items.push(newItem);
            return newItem;
        },
        adjustTotalCalories: function (calories) {
            state.totalCalories += calories;
            return state.totalCalories;
        },
        setCurrentItem : function(id) {
            let found;
            state.items.forEach((item) => {
                if (item.id === id) {
                    found = item
                }
            });
            if (found) {
                state.currentItem = found;
                return found;
            }
            return null;
        }
    }
})();

const UICtrl = (function() {
    const UISelectors = {
        itemList : '#item-list',
        listItem: '.collection-item',
        addBtn : '.add-btn',
        updateBtn: '.update-btn',
        deleteBtn: '.delete-btn',
        backBtn: '.back-btn',
        mealInput: '#item-name',
        caloriesInput: '#item-calories',
        totalCalories: '.total-calories'
    };

    return {
        populateItems : function(items) {
            let html = '';
            items.forEach((item) => {
                html += `
                <li class="collection-item" id="item-${item.id}">
                    <strong>${item.meal}: </strong> <em>${item.calories} Kcal</em>
                    <a href="#" class="secondary-content">
                        <i class="edit-item fa fa-pencil"></i>
                    </a>
                </li>`;
            });
            document.querySelector(UISelectors.itemList).innerHTML = html;
        } ,
        getSelectors : function () {
            return UISelectors;
        },
        getItemInput : function () {
            return {
                meal: document.querySelector(UISelectors.mealInput).value,
                calories: parseInt(document.querySelector(UISelectors.caloriesInput).value)
            }
        },
        addListItem : function(item) {
            document.querySelector(UISelectors.itemList).style.display = 'block';
            const li = document.createElement('li');
            li.className = 'collection-item';
            li.id = `item-${item.id}`;
            li.innerHTML = `
            <strong>${item.meal}: </strong> <em>${item.calories} Kcal</em>
            <a href="#" class="secondary-content">
                <i class="edit-item fa fa-pencil"></i>
            </a>
            `
            document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
        }, 
        hideList : function() {
            document.querySelector(UISelectors.itemList).style.display = 'none';
        },
        showCalories: function(totalCalories) {
            document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
        },
        clearInput : function() {
            document.querySelector(UISelectors.mealInput).value = '';
            document.querySelector(UISelectors.caloriesInput).value = '';
        },
        hideEditState: function() {
            document.querySelector(UISelectors.addBtn).style.display = 'inline';
            document.querySelector(UISelectors.updateBtn).style.display = 'none';
            document.querySelector(UISelectors.deleteBtn).style.display = 'none';
            document.querySelector(UISelectors.backBtn).style.display = 'none';
        },
        showEditState: function(item) {
            document.querySelector(UISelectors.addBtn).style.display = 'none';
            document.querySelector(UISelectors.updateBtn).style.display = 'inline';
            document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
            document.querySelector(UISelectors.backBtn).style.display = 'inline';
            document.querySelector(UISelectors.mealInput).value = item.meal;
            document.querySelector(UISelectors.caloriesInput).value = item.calories;
        }
    };
})();

const App = (function(ItemCtrl, UICtrl) {
    const UISelectors = UICtrl.getSelectors();
    function loadEventListeners() {
        document.querySelector(UISelectors.addBtn).addEventListener('click', addMealItem);
        document.querySelector(UISelectors.itemList).addEventListener('click', showEditState);
    }
    
    function showEditState(e) {
        if(e.target.classList.contains('edit-item')) {
            const editItem = e.target.parentElement.parentElement.id;
            const editItemArr = editItem.split('-');
            const editId = parseInt(editItemArr[1]);
            const currItem = ItemCtrl.setCurrentItem(editId);
            UICtrl.showEditState(currItem);
        }
        e.preventDefault();
    }

    function addMealItem(e) {
        const itemInput = UICtrl.getItemInput();
        if (itemInput.meal !== '' && itemInput.calories !== ''){
            const newItem = ItemCtrl.addNewItem(itemInput);
            const totalCalories = ItemCtrl.adjustTotalCalories(newItem.calories);
            UICtrl.showCalories(totalCalories);
            UICtrl.addListItem(newItem);
        }
        UICtrl.clearInput();
        e.preventDefault();
    }
    return {
        init : function() {
            console.log('Initializing App...');
            UICtrl.hideEditState();
            const state = ItemCtrl.getState();
            if (state.items.length > 0) {
                UICtrl.populateItems(state.items);
            } else {
                UICtrl.hideList();
            }
            loadEventListeners();
        }
    }
})(ItemCtrl, UICtrl);

App.init();