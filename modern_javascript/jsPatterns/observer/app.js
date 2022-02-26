class ObserverEvent {
    constructor() {
        this.functions = [];
    }
    subscribe(fn) {
        this.functions.push(fn);
        console.log(`You have subscribed to ${fn.name}`);
    }
    unsubscribe(fn) {
        this.functions = this.functions.filter((f) => {
            if (f !== fn) {
                return f;
            }
        });
        console.log(`You have unsubscribed ${fn.name}`);
    }
    fire() {
        this.functions.forEach((f) => f());
    }
}

const click = new ObserverEvent();

document.querySelector('.sub-ms').addEventListener('click', function() {
    click.subscribe(getCurrMillieSeconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function() {
    click.unsubscribe(getCurrMillieSeconds);
});

document.querySelector('.sub-s').addEventListener('click', function() {
    click.subscribe(getCurrSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function() {
    click.unsubscribe(getCurrSeconds);
});

document.querySelector('.fire').addEventListener('click', function() {
    click.fire();
});

const getCurrMillieSeconds = function() {
    console.log(`Current MillieSeconds: ${new Date().getMilliseconds()}`);
}

const getCurrSeconds = function() {
    console.log(`Current Seconds: ${new Date().getSeconds()}`);
}