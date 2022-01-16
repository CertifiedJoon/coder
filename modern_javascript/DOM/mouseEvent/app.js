const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

//click
//clearBtn.addEventListener('click', runEvent);

//dbclick
//clearBtn.addEventListener('dblclick', runEvent);

//mousedown
//clearBtn.addEventListener('mousedown', runEvent);

//mouseup
//clearBtn.addEventListener('mouseup', runEvent);

//mouseenter
//card.addEventListener('mouseenter', runEvent);

//mouseover
//card.addEventListener('mouseover', runEvent);

//mouseleave
//card.addEventListener('mouseleave', runEvent);

//mouseout
//card.addEventListener('mouseout', runEvent);

card.addEventListener('mousemove', runEvent);

function runEvent(e){
  heading.innerText = `${e.offsetX} . ${e.offsetY}`;
}