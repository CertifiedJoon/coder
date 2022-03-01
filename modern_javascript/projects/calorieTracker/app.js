const StorageCtrl = (function() {
    return {
        storeItem : function(item) {
            let items = [];
            if (localStorage.getItem('items') !== null) {
                items = JSON.parse(localStorage.getItem('items'));
            }
            items.push(item);
            localStorage.setItem('items', JSON.stringify(items));
        },
        getItems : function() {
            let items;
            if ((items = localStorage.getItem('items')) === null) {
                items = []
            } else {
                items = JSON.parse(items);
            }
            return items;
        },
        updateItems : function(items) {
            localStorage.setItem('items', JSON.stringify(items));
        },
        storeTotalCalories : function(totalCalories) {
            localStorage.setItem('totalCalories', totalCalories);
        },
        getTotalCalories : function() {
            if (localStorage.getItem('totalCalories') === null) {
                return 0;
            }
            return parseInt(localStorage.getItem('totalCalories'));
        }
    }
})();

const ItemCtrl = (function() {
    const Item = function(id, meal, cal) {
        this.id = id;
        this.meal = meal;
        this.calories = cal;
    }
    // state
    const state = {
        items : StorageCtrl.getItems(),
        currentItem: null,
        totalCalories: StorageCtrl.getTotalCalories()
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
        getTotalCalories : function () {
            StorageCtrl.storeTotalCalories(state.totalCalories);
            return state.totalCalories;
        },
        adjustTotalCalories: function (calories) {
            state.totalCalories += calories;
            StorageCtrl.storeTotalCalories(state.totalCalories);
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
        },
        updateCurrentItem : function(updatedItem) {
            state.currentItem.meal = updatedItem.meal;
            this.adjustTotalCalories(updatedItem.calories - state.currentItem.calories);
            state.currentItem.calories = updatedItem.calories;
            return state.currentItem;
        }, 
        deleteCurrentItem : function() {
            let deleteId, spliceIndex;
            deleteId = state.currentItem.id;
            for (let i = 0; i < state.items.length; i++) {
                if (state.items[i].id === state.currentItem.id) {
                    spliceIndex = i;
                    break;
                }
            }
            this.adjustTotalCalories(-(state.currentItem.calories));
            state.items.splice(spliceIndex, 1);
            return deleteId;
        },
        clearAllItems : function() {
            state.items = [];
            state.totalCalories = 0;
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
        clearBtn: '.clear-btn',
        backBtn: '.back-btn',
        mealInput: '#item-name',
        caloriesInput: '#item-calories',
        totalCalories: '.total-calories'
    };

    return {
        populateItems : function(state) {
            const items = state.items;
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
            document.querySelector(UISelectors.totalCalories).textContent = state.totalCalories;
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
            this.clearInput();
        },
        showEditState: function(item) {
            document.querySelector(UISelectors.addBtn).style.display = 'none';
            document.querySelector(UISelectors.updateBtn).style.display = 'inline';
            document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
            document.querySelector(UISelectors.backBtn).style.display = 'inline';
            document.querySelector(UISelectors.mealInput).value = item.meal;
            document.querySelector(UISelectors.caloriesInput).value = item.calories;
        },
        updateListItem : function(item) {
            const li = document.querySelector(`#item-${item.id}`);
            if (li !== null) {
                li.innerHTML = `
                <strong>${item.meal}: </strong> <em>${item.calories} Kcal</em>
                <a href="#" class="secondary-content">
                    <i class="edit-item fa fa-pencil"></i>
                </a>
                `;
            }
        },
        deleteListItem: function(id) {
            document.querySelector(`#item-${id}`).remove();
        },
        clearListItems : function() {
            document.querySelector(UISelectors.itemList).innerHTML = '';
            this.hideEditState();
            this.showCalories(0);
            this.hideList();
        }
    };
})();

const App = (function(ItemCtrl, StorageCtrl, UICtrl) {
    const UISelectors = UICtrl.getSelectors();
    function loadEventListeners() {
        document.addEventListener('keypress', function(e) {
            if (e.key == 'Enter') {
                e.preventDefault();
                return false;
            }
        })
        document.querySelector(UISelectors.addBtn).addEventListener('click', addMealItem);
        document.querySelector(UISelectors.itemList).addEventListener('click', showEditState);
        document.querySelector(UISelectors.updateBtn).addEventListener('click', updateMealItem);
        document.querySelector(UISelectors.deleteBtn).addEventListener('click', deleteMealItem);
        document.querySelector(UISelectors.clearBtn).addEventListener('click', clearMealItems);
    }

    function clearMealItems(e) {
        ItemCtrl.clearAllItems();
        UICtrl.clearListItems();
        StorageCtrl.updateItems(ItemCtrl.getState().items);
        e.preventDefault();
    }

    function deleteMealItem(e) {
        const deletedId = ItemCtrl.deleteCurrentItem();
        UICtrl.deleteListItem(deletedId);
        UICtrl.showCalories(ItemCtrl.getTotalCalories());
        UICtrl.hideEditState();
        StorageCtrl.updateItems(ItemCtrl.getState().items);
        if (ItemCtrl.getState().items.length === 0) {
            UICtrl.hideList();
        }
        e.preventDefault();
    }

    function updateMealItem(e) {
        const updateInput = UICtrl.getItemInput();
        const updatedItem = ItemCtrl.updateCurrentItem(updateInput);
        UICtrl.updateListItem(updatedItem);
        UICtrl.showCalories(ItemCtrl.getTotalCalories());
        UICtrl.hideEditState();
        StorageCtrl.updateItems(ItemCtrl.getState().items);
        e.preventDefault();
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
            StorageCtrl.storeItem(newItem);
        }
        UICtrl.clearInput();
        e.preventDefault();
    }

    return {
        init : function() {
            UICtrl.hideEditState();
            const state = ItemCtrl.getState();
            if (state.items.length > 0) {
                UICtrl.populateItems(state);
            } else {
                UICtrl.hideList();
            }
            loadEventListeners();
        }
    }
})(ItemCtrl, StorageCtrl, UICtrl);

App.init();