var navItems = document.querySelectorAll('.nav-item');
var contents = document.querySelectorAll('.content');

navItems.forEach(function(item, index) {
    item.addEventListener('click', function(event) {
        event.preventDefault(); 
        var targetId = this.getAttribute('href').substring(1);

        contents.forEach(function(content) {
            content.classList.remove('active');
        });

        document.getElementById(targetId).classList.add('active');
    });
});
