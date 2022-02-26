const PageState = function() {
    let currentState;
    
    this.init = function() {
        this.change(new HomeState);
    }

    this.change = function(state) {
        currentState = state;
    }
}

const HomeState = function() {
    document.querySelector('#heading').textContent = null;
    document.querySelector('#content').innerHTML = `
    <div class="jumbotron">
    <h1 class="display-4">Hello, world!</h1>
    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr class="my-4">
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </p>
    </div>
    `;
}

const AboutState = function() {
    document.querySelector('#heading').textContent = 'About';
    document.querySelector('#content').innerHTML = `
    <p>This is about page</p>`;
}

const ContactState = function() {
    document.querySelector('#heading').textContent = 'Contact';
    document.querySelector('#content').innerHTML = `
    <p>This is contact page</p>`;
}

const page = new PageState();
page.init();

document.getElementById('home').addEventListener('click', function() {
    page.change(new HomeState);
});

document.getElementById('about').addEventListener('click', function() {
    page.change(new AboutState);
});

document.getElementById('contact').addEventListener('click', function() {
    page.change(new ContactState);
});